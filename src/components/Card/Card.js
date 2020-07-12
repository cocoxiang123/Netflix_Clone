import React from 'react'
import styled from 'styled-components'
import './Card.css'

function Card(props) {
    const { title, subtitle, image, animation } = props.cardContent;
    const CardContainer = styled.div`
        border-bottom:8px solid #222;
        min-height:60vh;
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        @media (max-width: 949px){
            min-height:100vh;
        }
        @media(max-width:549px){
            min-height:50vh;
        }
    `;
    const CardWrap = styled.div`
        display:flex;
        text-align:center;
        padding:50px 5%;
        flex-direction:column;       
        @media (min-width: 949px){
           flex-direction:row;
           ${props => props.right && "flex-direction: row-reverse;"}
           padding:70px 45px;
        }
      
    `;
    return (
        <CardContainer>
            <CardWrap right={props.right}>
                <div className="cardText">
                    <div >
                        <h1 id="cardTitle">{title}</h1>
                    </div>
                    <div >
                        <h2 id="cardSubtitle">{subtitle}</h2>
                    </div>
                </div>
                <div className="cardImageContainer ">
                    <img id="cardImg" src={image} alt="img" />

                    <div className="cardAnimation">
                        <video autoPlay loop muted className="w-100">
                            <source src={animation} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </CardWrap>
        </CardContainer >
    )
}

export default Card
