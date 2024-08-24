import { useState } from "react";
import FormContainer from "./FormContainer";
const fieldChangeHandler = (ChangeEvent :  React.ChangeEvent<HTMLInputElement>) =>{
    const target = ChangeEvent.target;
    target.id;
    
    // todo
    
}

const buttonHandler = (ChangeE :  React.MouseEvent<HTMLInputElement>) =>{
    const tt = ChangeE.target as HTMLInputElement;
    
    
    // todo
    
}
export default function Register() {
    const [username, setUsername]= useState(``)
    const [password, setPassword]= useState(``)

    return (
    <FormContainer>
        <>
            <h3 className="WelcomeField">Welcome!</h3>

            <div className="FieldBox">
                <input type="text" name="username" id="username" placeholder='Username' className='UserNameField' onChange={e => setUsername(e.target.value)} />
                <input type="password" name="password" id='password' placeholder='Password' className='PasswordField' onChange={e => setPassword(e.target.value)} />
                <input type="password" name='password' id='confirmpassword' placeholder='Reenter Password' className='PasswordField' onChange={fieldChangeHandler} />
                <input type="button" name='button' id='registerbutton' className='PasswordField' onClick={buttonHandler} />
            </div>
        </>
    </FormContainer>
    );
}