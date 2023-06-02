import React, { useEffect } from 'react'
import styled from 'styled-components'
import cool from './cool.jpg';
import { InnerLayout } from '../../styles/Layouts';

function Aboutus() {

    return (
        <AboutUsStyled>
            <InnerLayout>
                <h1>About</h1>
                <div class="intro-card">
                <img src={cool} alt="Image Description"/>
                <h1>Utsav Sinha</h1>
                <p>3rd Year ISE student at NMIT</p>
                <a href="https://www.linkedin.com/in/utsav-sinha-704a90216/" target='_blank'>LinkedIn</a>
                </div>
            </InnerLayout>
        </AboutUsStyled>
    )
}

const AboutUsStyled = styled.div`
    display: flex;
    overflow: auto;
    .intro-card {
        width: 280px;
        background-color: #fff;
        border-radius: 50px;
        border: 4px solid pink;
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        overflow: hidden;
      }
      
      .intro-card img {
        width: 100%;
        height: auto;
      }
      
      .intro-card h1 {
        font-size: 24px;
        color: #333;
        margin: 10px;
      }
      
      .intro-card p {
        font-size: 16px;
        color: #666;
        margin: 10px;
      }
      
      .intro-card a {
        display: block;
        text-align: center;
        padding: 10px 0;
        color: #fff;
        background-color: #F56692;
        text-decoration: none;
        transition: background-color 0.3s ease-in-out;
      }
      
      .intro-card a:hover {
        background-color: #009acd;
      }
`;

export default Aboutus