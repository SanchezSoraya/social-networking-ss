import { type FC } from 'react'
import { type IUser } from '../interfaces/User'
import { UserCard } from './UserCard'

interface UserCardProps {
  users: IUser[]
}
export const UsersCard: FC<UserCardProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <UserCard key={index} firstname={user.firstname} lastname={user.lastname} age={user.age} email={user.email} gender={user.gender}/>

        )
      })}

    </div>
  )
}
