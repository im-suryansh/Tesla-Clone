import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const[ burgerStatus,setBurgerStatus]=useState(false);
  
  const cars = useSelector(selectCars)
  console.log(cars);
    return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt='Tesla'/>
      </a>
      <Menu>
      {cars && cars.map((car,index)=>
       ( <a key={index} href='#'>{car}</a>)
      )}
 
        

      </Menu>
        
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}></CustomMenu>
        </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
        <Close onClick={()=>setBurgerStatus(false)}></Close>
        </CloseWrap>
        {cars && cars.map((car,index)=>
       <li key={index}><a href='#'>{car}</a></li>
      )}
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        
      </BurgerNav>
      </Container>
  )
}

export default Header
const Container=styled.div`
z-index:10;
top:0;
left:0;
right:0;
min-height:60px;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 20px;
img{
  width:120px;
  height:15px;
}

`

const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;

a {
  
  font-weight:500;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}
`

const RightMenu= styled.div`
display:flex;
justify-content:center;
align-items:center;
align-text:center;

a {
  font-weight:500;
  text-transform:uppercase;
  margin-right:20px;
  flex-wrap:no-wrap;
}

`
const CustomMenu=styled(MenuIcon)`

cursor:pointer;

`
const BurgerNav= styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
list-style:none;
padding:20px;
z-index:1000;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ;
li {
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
  a{
    font-weight:500;
  }
}
`
const Close=styled(CloseIcon)`
cursor:pointer;


`
const CloseWrap=styled.div`
display:flex;
justify-content:flex-end;
`