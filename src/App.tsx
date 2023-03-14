import 'antd/dist/reset.css'
import { RouterProvider } from 'react-router-dom'
import { Menu } from './components/shared/menu/Menu'
import { router } from './routes'
import { GlobalStyles } from './styles/global'

function App () {
  return (
    <div>
      <GlobalStyles />
      <div className='app__container'>
        <div className='app__item__container'>
          <Menu />
        </div>
        <div className='app__item__container'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App
