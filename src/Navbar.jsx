import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./App.css"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
    let [modelStatus, setModelStatus]= useState(false)
    let [modelShow, setModelShow]= useState(false)
    const showToast = () => toast.success("Notification works!");

    let submitdata = (event)=>{
        event.preventDefault();
        toast.success("Data Submitted!");
    }
  return (
    <div>
      <ToastContainer />
      <Row className="navbar">
        <Col>Home</Col>
        <Col>About</Col>
        <Col>Courses</Col>
        <Col>Gallary</Col>
        <Col>Career</Col>
        <Col>Contact Us</Col>
        <Col>
          <span
            style={{ color: "blue" }}
            onClick={() => setModelStatus(!modelStatus)}
          >
            Sign In
          </span>{" "}
          <span style={{ color: "green" }}>Sign Up</span>
        </Col>
      </Row>
      <div className={`modelOverLay ${modelStatus ? "modelShow" : ""}`}></div>
      <div className={`modelDiv ${modelStatus ? "showModelDiv" : ""}`}>
        <h1>Sign In</h1>
        <Container fluid className="p-4">
          <Container>
            <Form onSubmit={(event) => submitdata(event)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Container>
      </div>
    </div>
  );}