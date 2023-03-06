import 'antd/dist/reset.css'
import { HistoriesCard } from './components/HistoriesCard'
import { historiesData } from './data/histories'

function App () {
  const handleOnClick = () => {
    console.log('handleOnClick')
  }

  return (
    <div>
      <HistoriesCard histories={historiesData}/>
    </div>

  )
}

export default App
