import styled from "styled-components"

export const FormStyle = styled.form`
color:white;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
margin: 10px;
&:hover,
&:focus{
   color: blue;
}
&:active{
   color: red;
};
}

    
input[type='submit'] {
    background: #00aec9;
    color: #fff;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 0;
    
    text-transform: uppercase;
    width: 100%;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
`


export const ContainerStyle = styled.div`
padding: 5px 10px 5px 10px;
margin: 10px auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
border: 2px solid black;
border-radius: 3px;
`

export const DeleteButton = styled.button`
color: red;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 3px;
:hover{
  background-color: pink;
}
`

export const InputStyle = styled.input`


`

