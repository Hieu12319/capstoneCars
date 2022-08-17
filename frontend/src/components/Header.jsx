import { Link } from "react-router-dom"
 import styled from "styled-components"

 const NavStyle = styled.nav`
    display: inline-block;
    font-size: 3em;
    margin: 0 auto;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
    background-color: #1AB8C0;
    max-width: 500px;
    text-align: center;
    font-family: 'Merriweather';
    

 `


export default function Header(props) {

    return (
        <NavStyle>
        <nav className="header">
                <div> Sell Your Cars!! </div>
             <br/>
           <Link to='/'>
            <div> Back to Main Page</div>
           </Link>

        </nav></NavStyle>
    )
}