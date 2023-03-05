import 'antd/dist/reset.css'
import { Button } from 'antd'

function App () {
  const handleOnClick = () => {
    console.log('handleOnClick')
  }
  return (
    <div>Hola
      <Button onClick={handleOnClick} type="primary">Primary Button</Button>
    </div>

  )
}

export default App
