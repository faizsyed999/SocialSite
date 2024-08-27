import { useState } from "react";
import FormContainer from "./FormContainer";
import { endpoint } from "../utils/Constants";
import { redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const fieldChangeHandler = (ChangeEvent: React.ChangeEvent<HTMLInputElement>) => {
    const target = ChangeEvent.target;
    target.id;

    // todo

}


export default function Register() {
    const [username, setUsername] = useState(``)
    const [password, setPassword] = useState(``)
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const navigateObject = useNavigate();
    const usernameClass: string = `UserNameField ${usernameInvalid ? `shake` : ``}`;
    const passwordClass: string = `PasswordField ${passwordInvalid ? `shake` : ``}`;


    const buttonHandler = async (ChangeE: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        ChangeE.preventDefault();


        if (username == ``) setUsernameInvalid(true);
        if (password == ``) setPasswordInvalid(true);
        
        const registerEndpoint: string = `${endpoint}/auth/register/`;
        const loginResponse = await fetch(registerEndpoint, {
            method: "POST",
            body: JSON.stringify({ "username": username, "password": password }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status == 200) {
            loginResponse.json().then(data => localStorage.setItem(`token`, data.signInToken));

            return navigateObject(`/`);
            // if sign in is successful then send user to homepage
        }

    }
    return (
        <FormContainer>
            <>
                <h3 className="WelcomeField">Welcome!</h3>

                <div className="FieldBox">
                    <input type="text" name="username" id="username" placeholder='Username' className={usernameClass} onChange={e => setUsername(e.target.value)} />
                    <input type="password" name="password" id='password' placeholder='Password' className={passwordClass} onChange={e => setPassword(e.target.value)} />
                    <input type="password" name='password' id='confirmpassword' placeholder='Reenter Password' className='PasswordField' onChange={fieldChangeHandler} />
                    <input type="button" name='button' id='registerbutton' className='PasswordField' onClick={buttonHandler} />
                </div>
            </>
        </FormContainer>
    );
}