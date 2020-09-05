import React from 'react'
import '../Footer.css'
import {Row,Col} from 'reactstrap'
const Footer = () =>
{
    return(
    <>
    <div className='footer-back '>
        <Row xs='4'>
            <Col sm={{ size: 2, order: 1, offset: 1 }}>
            <ul>
                <li><h3>Categories</h3></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Privacy Policy</a></li>

            </ul>

            </Col>
            <Col  sm={{ size: 2, order: 1, offset: 2 }}>
            <ul>
                <li><h3>Partners</h3></li>
                <li>Support</li>
                <li>Shipping & Returns</li>
                <li>Size Guide</li>
                <li>Product Care</li>
            </ul>

            </Col>
            <Col  sm={{ size: 2, order: 1, offset: 3}}>
            <ul>
                <li><h3>Contact us</h3></li>
                <li>26A Pagoda St,TANGS,</li>
                <li>Singapore,068758</li>
                <li></li>
                <li>+9167564739</li>
            </ul>

            </Col>
        </Row>
    <hr/>
    <div className='footer-bottom'>
        &copy;Copyright XYZ.ltd {new Date().getFullYear()}
    </div>
    </div>
    </>
    );
}
export default Footer;