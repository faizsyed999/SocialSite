import React from 'react';
import '../../styles/formcontainer.css';


const fieldChangeHandler = (ChangeEvent :  React.ChangeEvent<HTMLInputElement>) =>{
    const target = ChangeEvent.target;
    // todo
    
}
export default function FormContainer({children} : {children : React.ReactElement}) {
    return (
        <div className="PageContainer">
            <div className="LoginBox">
                <div className="LoginForm">
                   {children}
                </div>
            </div>
        </div>
    )
}