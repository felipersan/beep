import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <div className="cont">
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App
