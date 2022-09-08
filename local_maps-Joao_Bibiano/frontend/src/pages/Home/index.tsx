import {
  Container,
  RightContainer,
  LeftContainer,
  Title,
  SubTitle,
  Button,
  ButtonBox, 
  Image,
} from './styles';

function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local de sua cidade</Title>
        <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>
        <Button>
          <ButtonBox>{'>'}</ButtonBox>
          Cadastre um ponto comercial
        </Button>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  )
}

export default Home