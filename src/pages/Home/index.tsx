import { FormEvent, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import api from '../../api/api'
import { IconArrowDown } from '../../assets/icons'
import User from '../../components/User'
import { Container } from './styles'

export default function Home() {
  const [name, setName] = useState<string>('')
  const [user, setUser] = useState<any>()
  const userRef = useRef<any>(null)

  useEffect(() => {
    if (userRef) {
      userRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [user])

  async function getUser(user: string) {
    api
      .get(`${user}`)
      .then((response: any) => {
        setUser(response.data)
      })
      .catch((error: any) => {
        toast.error('Ops, usuário não encontrado')
      })
  }

  function handleUser(event: FormEvent) {
    event.preventDefault()
    try {
      if (!name) throw new Error('Por favor, digite um nome')
      getUser(name)
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <Container user={!!user}>
      <div className="card">
        <div
          className="image"
          style={{
            backgroundImage: `url(https://react-challenge-beep.vercel.app/img/logo.svg)`
          }}
        ></div>
        <form onSubmit={handleUser}>
          <input
            type="text"
            className="input"
            onChange={(e: any) => setName(e.target.value)}
            placeholder="Digite seu usuário do GitHub"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>
      {user && (
        <button
          className="arrowDown"
          onClick={() => {
            userRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }}
        >
          <IconArrowDown color={'#fff'} size={45} />
        </button>
      )}
      {user && (
        <div className="user" ref={userRef}>
          <User data={user} />
        </div>
      )}
    </Container>
  )
}
