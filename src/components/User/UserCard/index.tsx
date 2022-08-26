import { useRef } from 'react'
import { IconGitHub } from '../../../assets/icons'
import { Container } from './styles'

interface props {
  data: {
    photo: string
    name: string
    description: string
    user: string
    path: string
  }
}

export default function UserCard({ data }: props) {
  const cardRef = useRef<any>(null)
  return (
    <Container ref={cardRef} photo={cardRef?.current?.clientWidth * 0.9}>
      <div
        className="perfil"
        style={{ backgroundImage: `url(${data.photo})` }}
      ></div>
      <div className="text">
        <h2 className="name">{data.name}</h2>
        <h3 className="description">{data.description}</h3>
        <a href={data.path} className="github" target={'_blank'}>
          <IconGitHub />
          {data.user}
        </a>
      </div>
    </Container>
  )
}
