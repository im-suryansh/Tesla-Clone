import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
        <ItemText>
            
            <h1>{title}</h1>
            <p>{description}</p>
            </ItemText>
            </Fade>
        <Buttons>
        <Fade bottom>
            <ButtonGroup>
        
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                { rightBtnText &&
                <RightButton>
                {rightBtnText}
            </RightButton>
                }
                
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
    </Wrap>
  
  )
}

export default Section

const Wrap = styled.div`
    color:rgb(23,26,32);
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    backgroudn-reapeat:no-repeat;
    background-image:url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    allign-item:center;
    background-image:${props =>`url("${props.bgImage}")`};


`
const ItemText= styled.div`
padding-top:15vh;

text-allign:center;
`

const ButtonGroup=styled.div`
display:flex;
justify-content:center;
margin-bottom:30px;
@media(max-width: 786px){
     align-items:center;
    flex-direction:column;
    
}
`
const LeftButton=styled.div`
 background-color:rgba(23,25,32,0.8);
 height:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items :center;
 border-radius:100px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:12px;
 cursor:pointer;
 margin:8px;
`
const RightButton=styled(LeftButton)`
background-color:white;
opacity:0.65;
color:rgb(23,26,32);
`
const DownArrow=styled.img`

height:40px;
overflow-x:hidden;
animation:animateDown infinite 1.5s
`


const Buttons= styled.div``