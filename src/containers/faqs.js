import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {

    return(

        <Accordion>
            <Accordion.Title>Frequently asked questions</Accordion.Title>
                {faqsData.map(item =>(
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{ item.header }</Accordion.Header>
                        <Accordion.Body>{ item.body }</Accordion.Body>
                    </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to Watch? Enter your Email to create</OptForm.Text>
            </OptForm>
        </Accordion>
        
    );

}