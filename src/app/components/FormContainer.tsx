import React from 'react';
import Styles from '../../styles/sources/formcontainer.module.scss';


export default function FormContainer({ children }: { children: React.ReactElement }) {
    return (
        <div className={Styles.PageContainer}>
            <div className={Styles.WrapperBox}>
                {children}
            </div>
        </div>
    )
}