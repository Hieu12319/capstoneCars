import { Link } from "react-router-dom"
// import styled from "styled-components"

// const nav = styled


export default function Header(props) {

    return (
        <nav className="header">
            <Link to="/">
                <div> Sell Your Cars!! </div>
            </Link>
            <Link to="/create" className="createBtn"><button>Create Post</button></Link>
        </nav>
    )
}