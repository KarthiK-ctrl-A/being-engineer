import React from 'react';
import { Feature,OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer }  from '../containers/header';
import {JumbotronContainer} from '../containers/jumbotron';

export default function Home() {
    return(
    <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited Content,Contests and more
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere, anytime
                    </Feature.SubTitle>
                    <OptForm>
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                </OptForm>
                </Feature>
                
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer  />
                <FooterContainer />
            
            
    </>
    );
};