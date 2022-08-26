import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import { GlobalStyle } from './styles/globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <ToastContainer />
    </>
  )
}

export default App
