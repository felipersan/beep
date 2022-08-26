import { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDebouncedCallback } from 'use-debounce'
import api from '../../api/api'
import ReposCard from './ReposCard'
import { Container } from './styles'
import UserCard from './UserCard'

interface user {
  avatar_url: string
  bio: string
  blog: any
  company: any
  created_at: string
  email: any
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: any
  hireable: any
  html_url: string
  id: number
  location: any
  login: string
  name: string
  node_id: string
  organizations_url: string
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  twitter_username: any
  type: string
  updated_at: string
  url: string
}

interface props {
  data: user
}

export default function User({ data }: props) {
  const [repos, setRepos] = useState<any[]>([])
  const [filteredRepos, setFilteredRepos] = useState<any[]>([])

  useEffect(() => {
    getRepos()
    setFilteredRepos([])
  }, [data])

  function handleUser(event: FormEvent) {
    event.preventDefault()
    //filtrar repos
  }

  const debounced = useDebouncedCallback((value: any) => {
    filterRepos(value.target.value)
  }, 1000)

  async function getRepos() {
    api.get(`${data.login}/repos`).then((response: any) => {
      setRepos(response.data)
    })
  }

  function filterRepos(name: string) {
    try {
      const newRepos = repos.filter((val: any) => {
        return val.name.toUpperCase().includes(name.toUpperCase())
      })
      setFilteredRepos(newRepos)
      if (newRepos.length === 0)
        throw new Error('Ops, Repositório não encontrado')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <Container>
      <UserCard
        data={{
          description: data.bio,
          name: data.name,
          photo: data.avatar_url,
          user: data.login,
          path: data.html_url
        }}
      />
      <h3 className="search">Pesquisar Repositórios:</h3>
      <form onSubmit={handleUser}>
        <input
          type="text"
          className="input"
          onChange={debounced}
          placeholder="Digite seu usuário do GitHub"
        />
        <button type="submit">Pesquisar</button>
      </form>
      <div className="areaRepos">
        {filteredRepos.length > 0
          ? filteredRepos.map((row: any, key: number) => (
              <ReposCard key={key} data={row} />
            ))
          : repos.map((row: any, key: number) => (
              <ReposCard key={key} data={row} />
            ))}
      </div>
    </Container>
  )
}
