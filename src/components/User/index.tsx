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
  console.log(data)
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
    </Container>
  )
}
