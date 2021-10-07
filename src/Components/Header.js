import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Header() {


    return (
        <HeaderContainer>
        <h1><Link to="/">Desserts On Us</Link></h1>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div `
    margin: 0;
    background: #32a89e;
    & a{
        text-decoration:none;
        color: black;
        font-family: 'Ephesis', cursive;
        font-size: 100px;
    }
    & h1{
        margin: 0;
        padding: 0;
    }

`