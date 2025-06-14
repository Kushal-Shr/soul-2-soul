import React from 'react'

const Main = (props) => {
    const {children} = props;
  return (
    <main className='flex-1 min-h-screen'>
        {children}
    </main>
  )
}

export default Main
