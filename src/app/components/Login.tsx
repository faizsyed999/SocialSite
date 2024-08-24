import '../../styles/login.css';
import { MouseEventHandler, useState } from 'react';
import { redirect } from 'react-router-dom';
import { endpoint } from '../utils/Constants';
import Register from './Register';
import FormContainer from './FormContainer';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("pending");
    const [register, setRegister] = useState(false);

    if(register){
        // take user to register page.
        return <Register></Register>;
    }


    const invalidInfo = <p>Invalid username or password!</p>;
    const fieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name == `username`)
            setUsername(e.target.value)
        else
            setPassword(e.target.value);

        setStatus(`pending`);
    };

    const SignInFlow = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        
        const loginEndpoint: string = `${endpoint}/auth/login/`;
        const loginResponse = await fetch(loginEndpoint, {
            method: "POST",
            body: JSON.stringify({ "username": username, "password": password, "register": register }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status == 200) {
            loginResponse.json().then(data => localStorage.setItem(`token`, data.signInToken));

            return redirect(`/home`);
            // if sign in is successful then send user to homepage
        }
        else setStatus(`invalid`);
    }

    return (
            <FormContainer>
                <>
                    <h3 className="WelcomeField">Welcome!</h3>

                    <div className="FieldBox">
                        <input type="text" name='username' id='username' placeholder='Username' className='UserNameField' onChange={fieldChangeHandler} />
                        <input type="text" name='password' id='password' placeholder='Password' className='PasswordField' onChange={fieldChangeHandler} />
                        <input type='button' value={register ? `Register` : `Login`} className='LoginButton' onClick={SignInFlow} />
                        {status == `invalid` ? invalidInfo : null}
                    </div>
                    <div className='register'>
                        <a href='' onClick={(ChangeEvent) => { ChangeEvent.preventDefault(); setRegister(true) }} className="register_button">
                            <h3>Register Now!</h3>
                        </a>

                    </div>
                    </>
            </FormContainer>
    );
}
