import React from 'react';
import Styles from '../../styles/formcontainer.module.scss';


export default function FormContainer({ children }: { children: React.ReactElement }) {
    return (
        <div className={Styles.PageContainer}>
            <div className={Styles.WrapperBox}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}