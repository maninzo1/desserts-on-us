import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Header() {


    return (
        <HeaderContainer>
        <h2><Link to="/">Desserts On Us</Link></h2>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div `
    & a{
        text-decoration:none;
        color: black;
    }

`