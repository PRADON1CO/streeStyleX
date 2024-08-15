import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../style/login.css"; // Importar el archivo CSS
import { useForm } from "react-hook-form";
import login from"../../assets/login.png"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (usuario) =>{
    console.log(usuario);
  }

  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row>
          <Col>
            <Card className="p-4 shadow">
              <Card.Body>
                <Card.Title className="text-center mb-4"><img src={login} alt="" className="imgLogin" /></Card.Title>
                <Form onSubmit={handleSubmit(onSubmit)} className="px-2 px-md-5 pb-2 formText">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-medium">Correo electronico:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ej: juan@mail.com"
                      {...register("email", {
                        required: "El correo es obligatorio",
                        minLength: {
                          value: 4,
                          message:
                            "El email debe contener al menos 4 caracteres",
                        },
                        maxLength: {
                          value: 250,
                          message:
                            "El email debe contener como máximo 250 caracteres",
                        },
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                          message:
                            "El correo debe ser un email valido Ej: nombre@mail.com",
                        },
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.email?.message}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-medium">Contraseña:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="ingrese una contraseña"
                      {...register("password", {
                        required: "El password es obligatorio",
                        minLength: {
                          value: 8,
                          message: "el minimo es de 8 caracteres",
                        },
                        maxLength: {
                          value: 12,
                          message: "el maximo es de 15 caracteres",
                        },
                        pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                          message:
                            "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                        },
                      })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Text className="text-danger">
                      {" "}
                      {errors.password?.message}
                    </Form.Text>
                  </Form.Group>
                  <div>
                    <p className="text-underline fw-medium">Crear Cuenta</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button className="bg-dark rounded-0 border-0" type="submit">
                      Enviar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
