import React from 'react'
import Aos from "aos";
import { Button } from './components/Button';
import "aos/dist/aos.css";
import styled from 'styled-components'
import { useEffect } from "react";



const Section = styled.section`
    background-color: rgb(3, 6, 26);
    height: 100%;
    position: static;
  `;
const New = styled.div`
    // padding: 3rem calc((10vw - 130px) / 2);
    display: flex;
    height: 50%;

    `;
const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 4rem;
    margin-top: -18rem;


    img {
        width: 100%;
        height: 55%;
        // padding-bottom: 10px;
        object-fit: cover;
    }`;


const ColumnLeft = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    // padding-right: 500px;
    margin-left: 30px;
    padding: 50px;
    height: 50%;
    width: 330%;
    margin-top: 12rem;
    

    h1{
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 2vw, 2rem);
    }

    p{
        margin-bottom: 1rem;
    }
    button{
        margin-bottom: 1rem;
    }
;`



const Latest = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image1 }) => {

    useEffect(() => {
        Aos.init({ duration: 1200});
    }, [])

    return (
        <Section>
            <New>
                <ColumnLeft data-aos="fade-right" >
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to="/interior" primary="true" >{buttonLabel}</Button>
                </ColumnLeft>
                
                <ColumnRight data-aos="fade-left">
                <img src= {image1} alt="home" />
                </ColumnRight>
            </New>
        </Section>
    )
}

export default Latest
