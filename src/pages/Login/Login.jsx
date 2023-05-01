import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);

    const from = location.state?.from?.pathname || '/category/0'
    

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(loggedUser);

            setSuccess("Login Successful!")
            form.reset();
            navigate(from, { replace: true })


        })
        .catch(error => {
            setError(error.message);
            console.log(error);
        })

    }


    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login!</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Login
                </Button>
                
                <Form.Text className="text-secondary">
                   <br />
                   Don't have an account?
                    <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-success d-block">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                  {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;