import React from 'react';
import { Footer } from '../components';

export function FooterContainer(){

    return(
        <Footer>
            
            <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">FAQs</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Testimonals</Footer.Link>
                    <Footer.Link href="#">Terms of service</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Support</Footer.Link>
                    <Footer.Link href="#">Advice</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title >Branches</Footer.Title>
                    <Footer.Link href="#">Computer</Footer.Link>
                    <Footer.Link href="#">Mechanical</Footer.Link>
                    <Footer.Link href="#">Electrical</Footer.Link>
                    <Footer.Link href="#">Electronics</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title >Social Media</Footer.Title>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                    <Footer.Link href="#">YouTube</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    );

}