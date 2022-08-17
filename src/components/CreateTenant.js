import React, {useRef, useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import userFacade from "../userFacade";

const CreateTenant = () => {
    const initialState = {job: "", name: "", phone: "", username: "", password: ""};
    const [tenant, setTenant] = useState(initialState);
    const [errorMsg, setErrorMsg] = useState("");
    const errorAlertMsg = useRef(null);
    const successAlertMsg = useRef(null);


    const handleInput = (event) => {
        const target = event.target
        const id = target.id
        const value = target.value
        setTenant({...tenant, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userFacade.createUser(tenant).then(response =>{
            const status = response.code;
            const msg = response.message;
            setTenant(initialState);
        })
    }



    return (
        <Container className="">
            <h2 className={"" }>Add new Tenant</h2>
            <Form onChange={handleInput} onSubmit={handleSubmit}>
                <Form.Group className="" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" value={tenant.name}  placeholder="Name" />
                </Form.Group>
                <Form.Group className="" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control required type="text" value={tenant.phone}  placeholder="Phone" />
                </Form.Group>
                <Form.Group className="" controlId="job">
                    <Form.Label>Job</Form.Label>
                    <Form.Control required type="text" value={tenant.job}  placeholder="Job" />
                </Form.Group>
                <Form.Group className="" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" value={tenant.username}  placeholder="Username" />
                </Form.Group>
                <Form.Group className="" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" value={tenant.password}  placeholder="Password" />
                </Form.Group>
                <Button variant="btn-danger" type="submit">
                    Add tenant
                </Button>
            </Form>
        </Container>
    );
};

export default CreateTenant;