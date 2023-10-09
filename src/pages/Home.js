import React from 'react'
import './Home.css'
import House from '../House';
import styled from'styled-components'
import rental1 from "../images/rental4.jpg"
import rental2 from "../images/rental5.jpg"
import rental3 from "../images/rental7.jpg"



const Nav = styled.nav`
 padding: 3rem 4rem;
 background: lightblue;
 font-size: 40px;
 border-bottom: 2px solid lightgray;
`
const Home = () => {
    return (
        <div>
            
            <Nav>
                Buy House
            </Nav>





            <div className="rental__row">
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Buy " 
                    />
                    <House src={rental2} 
                    title="House in London" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$4,000,000"
                    Rent="Buy"
                    />
                    <House src={rental3} 
                    title="House in Nigeria" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$35,000,000"
                    Rent="Buy"
                    />

                    {/* house */}
                    {/* house */}
                    {/* house */}
                </div>
                
                <div className="rental__row">
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Buy"
                    />
                    <House src={rental2} 
                    title="House in London" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$4,000,000"
                    Rent="Buy"
                    />
                    <House src={rental3} 
                    title="House in Nigeria" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....." 
                    price="$35,000,000"
                    Rent="Buy"
                    />
                    <House src={rental1} 
                    title="House in bali" 
                    description="comfortable place, withh 4 bedrooms two, sitting rooms....."
                    price="$70,500,000"
                    Rent="Buy"
                    />
                      
                </div>
        </div>
    )
}

export default Home
