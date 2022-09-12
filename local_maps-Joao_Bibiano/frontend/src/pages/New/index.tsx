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

import Input from "../../components/input";
import { useState } from "react";

export default function New() {
  const [formValues, setFormValues] = useState({
    name:'',
    description: '',
    contact: '',
    category: ''
  });

  // console.log(formValues);
  return(
    <Container>
      <Form>
        <FormTitle>
          Cadastro do Comércio Local
        </FormTitle>
        <Section>
          Dados
        </Section>
        <Input
          label="Nome do local"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />

        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />

        <Input
          label="Contato"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />

        <Section>Endereço</Section>
      </Form>
    </Container>
  );
}