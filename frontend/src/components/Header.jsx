import { Link } from "react-router-dom"
 import styled from "styled-components"

 const NavStyle = styled.nav`
 display: inline-block;
 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid palevioletred;
 border-radius: 3px;
 display: block;
background-color: pink;
 `


export default function Header(props) {

    return (
        <NavStyle>
        <nav className="header">
            <Link style={{color: 'black', hover: 'green'}} to="/">
                <div> Sell Your Cars!! </div>
            </Link>
           
        </nav></NavStyle>
    )
}