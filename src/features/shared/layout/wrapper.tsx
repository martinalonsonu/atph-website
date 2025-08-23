import React from 'react'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1360px] mx-auto sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default Wrapper
