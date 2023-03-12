import 'antd/dist/reset.css'
import { HistoriesCard } from './components/HistoriesCard'
import { historiesData } from './data/histories'
import { UsersData } from './data/users'
import { UsersCard } from './components/UsersCard'
import { CreateUser } from './components/CreateUser'

function App () {
  const handleOnClick = () => {
    console.log('handleOnClick')
  }

  return (
    <div>
      {/* <HistoriesCard histories={historiesData}/>
      <UsersCard users={UsersData}/> */}
      <CreateUser/>
    </div>

  )
}

export default App
