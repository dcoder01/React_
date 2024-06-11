import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}= useParams()
  return (
    <div className='d-flex justify-content-center' style={{backgroundColor:'gray'}} >User: {id}</div>
  )
}

export default User