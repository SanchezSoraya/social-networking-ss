import { CreateUser } from './components/CreateUser'
import { createBrowserRouter } from 'react-router-dom'
import { UsersCard } from './components/UsersCard'
import { UsersData } from './data/users'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello</div>
  },
  {
    path: '/user',
    element: <UsersCard users={UsersData} />
  },
  {
    path: '/user/create',
    element: <CreateUser />
  }
])
