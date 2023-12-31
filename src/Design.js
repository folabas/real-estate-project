import React, { useEffect }  from 'react'
import Aos from "aos";
import { Button } from './components/Button';
import "aos/dist/aos.css";
import styled from 'styled-components'





// const Section = styled.section`
//     background-color: red;
//     height: 100%;
//     margin-bottom: 2rem;
//     position: static;
//   `;
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

const New = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};

  h1{
      margin-bottom: 1rem;
      font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p{
      margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
      order: ${({reverse}) => (reverse ? '2' : '1')};
  }
  img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
      @media screen and (max-width: 768px) {
          width: 90%;
          height: 90%;
          }
  }
`;


const Design = ({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image }) => {

    useEffect(() => {
        Aos.init({ duration: 1400});
    }, [])


    return (
        <Section>
            <New>
                <ColumnRight reverse={reverse} data-aos="flip-left">
                <img src= {image} alt="home" />
                </ColumnRight>

                <ColumnLeft data-aos="flip-right" >
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to="/modern" primary="true" >{buttonLabel}</Button>
                </ColumnLeft>
            </New>
            
        </Section>
    )
}

export default Design
