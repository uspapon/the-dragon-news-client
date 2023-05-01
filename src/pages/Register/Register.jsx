import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { createUser, updateUserData } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleAccepted = (event) => {
        const form  = event.target;
        setAccepted(form.checked);
        console.log(form.checked)

    }

    const handleRegister = event => {
        event.preventDefault();

        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser);

                form.reset();
                setSuccess('User has been created successfully! Thnak You.')
                updateUserData(loggedUser, name, photo)
                    .then(() => {
                        console.log('user name updated');
                    })
                    .catch(error => {

                        setError(error.message);
                        console.log(error);
                    })
            })
            .catch(error => {
                setError(error.message);
                console.log(error);
            })




    }


    return (


        <Container className='w-25 mx-auto'>
            <h3>Please Register!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    name="accept" 
                    type="checkbox" 
                    label={<>Accept <Link to="/terms">Terms and Condetions</Link> </>} />
                </Form.Group>


                <Button variant="primary" disabled ={!accepted} type="submit">
                    Register
                </Button>

                <Form.Text className="text-secondary">
                    <br />
                    Already have an account?
                    <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>

    );
};

export default Register;