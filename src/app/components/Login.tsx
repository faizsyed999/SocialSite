
import styles from '../../../styles/login.module.scss';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("pending");

    const router = useRouter();


    const invalidInfo = <p className={styles.ErrorMessage}>Invalid username or password!</p>;
    const fieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.name == `username`)
            setUsername(e.target.value)
        else
            setPassword(e.target.value);

        setStatus(`pending`);
    };

    const SignInFlow = async () => {
        const endpointBE : string = `${process.env.NEXT_PUBLIC_endpoint}/auth/login/`;
        const loginResponse = await fetch(endpointBE, {
            method: "POST",
            body: JSON.stringify({ "username": username, "password": password }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        if(loginResponse.status == 200) {
            loginResponse.json().then(data => localStorage.setItem(`token`, data.signInToken));
           
            router.push(`${process.env.NEXT_PUBLIC_endpoint}\home`, {scroll : false});
            // if sign in is successful then send user to homepage
        }
        else setStatus(`invalid`);
    }
    
    return (
        <div className={styles.PageContainer}>
            <div className={styles.LoginBox}>
                <div className={styles.LoginForm}>
                    <h3 className={styles.WelcomeField}>Welcome</h3>
                    <div className={styles.FieldBox}>
                        <input type="text" name='username' id='username' placeholder='Username' className={styles.UserNameField} onChange={fieldChangeHandler}/>
                        <input type="text" name='password' id='password' placeholder='Password' className={styles.PasswordField} onChange={fieldChangeHandler}/>
                        <input type="button" value="Login" className={styles.LoginButton} onClick={SignInFlow} />
                        {status==`invalid` ? invalidInfo : null}
                    </div>
                    <div className={styles.register}>
                        <a href="" className={styles.register_button}>
                            <h3>Register Now!</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
