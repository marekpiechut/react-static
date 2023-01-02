import React from 'react'

const FancyDiv: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div style={{ border: '1px solid red' }}>{children}</div>
}
export default FancyDiv
