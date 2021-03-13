import React from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Header }  from '../components';

export function HeaderContainer({ children }){
    return (

            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} alt="BeingEngineer" src={logo} />
                    <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> 
                </Header.Frame>
                { children }
            </Header>

    );
}