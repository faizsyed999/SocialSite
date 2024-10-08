import Styles from '../../styles/login.module.scss';
import { useState } from 'react';
import { endpoint } from '../utils/Constants';
import Register from './Register';
import FormContainer from './FormContainer';

export default function Login({setToken} : {setToken : (token : string) => void }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("pending"); //todo required
    const [register, setRegister] = useState(false);
    const [usernameValid, setUsernameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);



    if (register) return <Register setToken={setToken}></Register>;
    // if (loggedIn) {
    //     console.log('nav to home /!');
        
    //     navigateObject('/')
    // }
    


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

        if(username == "" )
            setUsernameValid(false);
        if(password == "")
            setPasswordValid(false);

        const loginEndpoint: string = `${endpoint}/auth/login`;
        const loginResponse = await fetch(loginEndpoint, {
            method: "POST",
            body: JSON.stringify({ "username": username, "password": password.split(``)}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if (loginResponse.status == 200) {
            loginResponse.json().then(data => setToken(data.response));
            console.log('got teh token');
            
            
            // if sign in is successful then send user to homepage
        }
        // else setStatus(`invalid`);
        else setPasswordValid(false);
    }
    const inputClasses : string= `${Styles.UsernameField} ${usernameValid ? `${Styles.shake}` : ``}` ;
    const inputClasses2 : string= `${Styles.PasswordField} ${passwordValid ? `${Styles.shake}` : ``}` ;
    return (
        <FormContainer>
            <>
                <h3 className={Styles.login_welcomefield}>Welcome!</h3>

                <div className={Styles.login_fieldBox}>
                    <input type="text" name='username' id='username' placeholder='Username' className={inputClasses} onChange={fieldChangeHandler} />
                    <input type="text" name='password' id='password' placeholder='Password' className={inputClasses2} onChange={fieldChangeHandler} />
                    <input type='button' value="Login" className={Styles.LoginButton} onClick={SignInFlow} />
                    {status == `invalid` ? invalidInfo : null}
                </div>
                <div className={Styles.register}>
                    <a href='' onClick={(ChangeEvent) => { ChangeEvent.preventDefault(); setRegister(true) }} className={Styles.register_button}>
                        <h3>Register Now!</h3>
                    </a>

                </div>
            </>
        </FormContainer>
    );
}
