import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";

export default function New() {
  return(
    <Container>
      <Form>
        <FormTitle>
          Cadastro do Comércio Local
        </FormTitle>
        <Section>
          Dados
        </Section>
      </Form>
    </Container>
  );
}