import { Container } from './styles'

interface props {
  data: any
  //eu até ia tipar... mas é muito trabalho para um projeto tão simples...
}

export default function ReposCard({ data }: any) {
  return (
    <Container href={data.html_url} target={'_blank'}>
      <div className="header">
        <h2 className="nameRepos">{data.name}</h2>
        <h3 className="tec">{data.language}</h3>
      </div>
      <h3 className="descriptionRepos">{data.description}</h3>
    </Container>
  )
}
