import React from 'react'
import ReactLoading from 'react-loading'

const LoadingComponent = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <ReactLoading
        type='spinningBubbles'
        color='#736345'
        height={150}
        width={150}
      />
    </div>
  )
}

export default LoadingComponent
