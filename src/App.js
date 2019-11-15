import React, { useState } from 'react';
import { cpfMask, cnpjMask, cepMask, celularMask, telefoneMask, moedarealMask } from './mask'
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';

function App() {

  const [cpf, setCpf] = useState();
  const [cnpj, setCnpj] = useState();
  const [cep, setCep] = useState();
  const [celular, setCelular] = useState();
  const [telefone, setTelefone] = useState();
  const [moedaReal, setMoedaReal] = useState();

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img src="https://www.corujasdev.com.br/wp-content/uploads/2018/09/CorujasDev.png" className="App-logo" alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col >
          <p>Mascara de campos de diversos formatos</p>
          <Form>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="cpf">CPF</Label>
                  <Input
                    maxLength='14'
                    name='cpf'
                    value={cpf || ''}
                    placeholder="___.___.___-__"
                    onChange={(e) => setCpf(cpfMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="cnpj">CNPJ</Label>
                  <Input
                    maxLength='18'
                    name='cnpj'
                    value={cnpj || ''}
                    placeholder="___.___.___/____-__"
                    onChange={(e) => setCnpj(cnpjMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="cep">CEP</Label>
                  <Input
                    maxLength='9'
                    name='cep'
                    value={cep || ''}
                    placeholder="_____-___"
                    onChange={(e) => setCep(cepMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="cep">Moeda Real</Label>
                  <Input
                    maxLength='9'
                    name='moedaReal'
                    value={moedaReal || ''}
                    placeholder="_.__"
                    onChange={(e) => setMoedaReal(moedarealMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="celular">Celular</Label>
                  <Input
                    maxLength='15'
                    name='celular'
                    value={celular || ''}
                    placeholder="(__) _____-____"
                    onChange={(e) => setCelular(celularMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="telefone">Telefone</Label>
                  <Input
                    maxLength='14'
                    name='telefone'
                    value={telefone || ''}
                    placeholder="(__) ____-____"
                    onChange={(e) => setTelefone(telefoneMask(e.target.value))}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}

export default App;
