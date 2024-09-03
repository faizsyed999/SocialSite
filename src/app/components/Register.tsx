import { useState } from "react";
import FormContainer from "./FormContainer";
import { endpoint } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import Styles from '../../styles/sources/register.module.scss';

export default function Register() {
    const [username, setUsername] = useState(``)
    const [passwordobj, setPassword] = useState({password: ``, repassword: ``})
    const [usernameInvalid, setUsernameInvalid] = useState(false)
    const [passwordInvalid, setPasswordInvalid] = useState(false)

    const navigateObject = useNavigate()

    const buttonHandler = async (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.preventDefault();

        if (username == ``) setUsernameInvalid(true)
        if (passwordobj.password == ``) setPasswordInvalid(true)
        if(passwordobj.password != passwordobj.repassword) setPasswordInvalid(true)

        const registerEndpoint: string = `${endpoint}/auth/register/`
        const loginResponse = await fetch(registerEndpoint, {
            method: "POST",
            body: JSON.stringify({ "username": username, "password": passwordobj.password.split(``), "repassword": passwordobj.repassword.split(``) }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status == 200) {
            loginResponse.json().then(data => localStorage.setItem(`token`, data.signInToken));

            return navigateObject(`/`);             // if sign in is successful then send user to homepage

        }
    }

    const usernameClass: string = `${Styles.UserNameField} ${usernameInvalid ? `${Styles.shake}` : ``}`
    const passwordClass: string = `${Styles.PasswordField} ${passwordInvalid ? `${Styles.shake}` : ``}`
    
    return (
        <FormContainer>
            <>
                <h3 className={Styles.WelcomeField}>Welcome!</h3>

                <div className={Styles.FieldBox}>
                    <input type="text" name="username" id="username" placeholder='Username' className={usernameClass} onChange={e => setUsername(e.target.value)} />

                    <input type="password" name="password" id='password' placeholder='Password' className={passwordClass} 
                                        onChange={e => setPassword({password : e.target.value, repassword : passwordobj.repassword})} />

                    <input type="password" name='password' id='confirmpassword' placeholder='Reenter Password' className={passwordClass} 
                                        onChange={e => setPassword({password : passwordobj.password, repassword : e.target.value})} />

                    <input type="button" name='button' id='registerbutton' className={Styles.RegisterButton} onClick={buttonHandler} />
                </div>
            </>
        </FormContainer>
    );
}