import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import PuzzleAnime from "../Lottie/HomeAnime.json";




const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items:center;
background:#48426d;
`;

const Container = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
height:100vh;
padding: 3rem calc((100vw - 1300px) / 2);

@media screen and (max-width: 768px){
    grid-grid-template-columns:1fr;
}
`;

const ColumnLeft = styled.div`
display:flex;
color:#f0c38e;
flex-direction:column;
justify-content:center;
align-items: flex-start;
padding: 5rem 2rem;

h1{
    margin-bottom: 0.5rem;
    fonst-size: 2rem;
}

p{
    margin: 2rem 0;
    font-size:4rem;
    line-height:1.1;
}
`;


const ColumnRight = styled.div`
display:flex;
 justify-content:center;
align-items:center;
padding:2 rem;
position:relative;


`;

export default function Home() {

    return (
        <motion.div animate={{opacity:1}} initial={{ opacity:0}}>
        <Section>
            <Container>
                <ColumnLeft>
                   <motion.h1
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   transition={{duration:1}}
                   >
                Welcome to ILLITRATE!  
                </motion.h1>
                    <motion.p
                    initial={{opacity:0, x:-100}}
                   animate={{opacity:1, x:0}}
                    transition={{ duration: 1}}
                    >
                    Visualizing Programming Conncepts !!
                    </motion.p>
                </ColumnLeft>
                <ColumnRight>
                    <Lottie options={{ animationData:PuzzleAnime,}} />
                </ColumnRight>
            </Container>
        </Section>
</motion.div>

    )
}


