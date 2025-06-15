import { google } from 'googleapis'
import { NextResponse } from 'next/server'

// Configure Google Sheets
const sheets = google.sheets('v4')
const SHEET_NAME = 'Contact'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

async function ensureSheetExists(sheetsAPI, spreadsheetId) {
  const spreadsheet = await sheetsAPI.spreadsheets.get({ auth, spreadsheetId })
  const contactSheet = spreadsheet.data.sheets.find(
    sheet => sheet.properties.title === SHEET_NAME
  )
  if (!contactSheet) {
    await sheetsAPI.spreadsheets.batchUpdate({
      auth,
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: SHEET_NAME,
                gridProperties: { rowCount: 1000, columnCount: 6 }
              }
            }
          }
        ]
      }
    })
    await sheetsAPI.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `${SHEET_NAME}!A1:F1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message']]
      }
    })
  }
}

export async function POST(req) {
  try {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      throw new Error('Missing environment variables')
    }
    const body = await req.json()
    const { name, email, phone, subject, message } = body
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }
    const timestamp = new Date().toLocaleString()
    const row = [timestamp, name, email, phone || '', subject, message]
    await ensureSheetExists(sheets, process.env.GOOGLE_SHEET_ID)
    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: SHEET_NAME,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] }
    })
    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 })
  }
} 