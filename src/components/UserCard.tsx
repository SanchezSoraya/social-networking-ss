import { Card, Avatar } from 'antd'
import { type FC } from 'react'
import { type IUser } from '../interfaces/User'
import { Meta } from 'antd/es/list/Item'

export const UserCard: FC<IUser> = ({ firstname, lastname, age, email, gender }) => {
  return (
    <Card bg-danger title ={ firstname } bordered={false} style={{ width: 300 }} >
      <Meta
      avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
    />

      <p>{lastname}</p>
      <p>{age}</p>
      <p>{ email}</p>
      <p>{gender}</p>

    </Card>
  )
}
