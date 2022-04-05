import { ContainerS } from '../../components/ContainerForm';
import { PageTitle } from '../../components/PageTitle';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUser = {
      email,
      firstName,
      lastName,
      birthdate: birthdate + 'T00:00:00.000Z',
      imageUrl,
      password,
      passwordConfirmation,
    };

    console.log(inputUser);

    axios
      .post('/user', inputUser)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <ContainerS>
      <PageTitle>Criar uma conta</PageTitle>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col}>
          <Form.Label>Digite um email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Sobrenome"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            onChange={(event) => setBirthdate(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Link da Imagem do perfil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Link da Imagem"
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </Form.Group>


        <Row>
          <Form.Group as={Col}>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Senha"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Confirmação da senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirmação da senha"
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Criar
        </Button>
      </Form>
    </ContainerS>
  );
};
