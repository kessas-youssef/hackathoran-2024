import React from 'react'

function InputWrap({ classes, children }) {
  return (
    <div className={`w-full flex flex-row justify-between items-center gap-3 [&>input]:border-4 [&>input]:border-grey-900 [&>input]:rounded-lg [&>input]:p-1 [&>select]:border-4 [&>select]:border-grey-900 [&>select]:rounded-lg [&>select]:p-1 ${classes}`} >{children}</div>
  )
}

export default InputWrap