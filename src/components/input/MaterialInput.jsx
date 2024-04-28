import { TextField } from '@mui/material'
import React from 'react'

const MaterialInput = (props) => {

    const {
        label,
        type,
        onChange
    } = props

  return (
    <div>
    <TextField
        label={label}
        type={type}
        onChange={onChange}
    />
    </div>
    
  )
}

export default MaterialInput