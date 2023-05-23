import React from 'react'
import { Card } from 'react-bootstrap'
import { SOUser } from '../../models/StackoverflowUser'

const UserImage = (props: {user: SOUser}) => {
  return (
    <>
        <Card.Img aria-disabled={props.user.isBlocked} variant="top" src={props.user.profile_image} />
    </>
  )
}

export default UserImage