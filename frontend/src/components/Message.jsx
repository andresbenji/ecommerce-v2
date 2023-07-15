import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({variant, children}) => {
  return (
   <Alert variant={variant}>
    {children}
   </Alert>
  )
}

//sets default color of variant to light blue
Message.defaultProps = {
    variant: 'info'
}

export default Message
