import styled from "styled-components"

export const FormStyle = styled.form`
font-size: 10px;
font-family: Merriweather;
align-items: center;
padding: 100px;
margin: 100px auto;
background-image: url(data:image/jpeg;base64,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);
width: 450px;
height: 200px;
background-size: contain;
justify-content: center;
margin-bottom: 0px;
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
    width: 150px;
    border-radius: 5px;
    height: 35px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
`


export const ContainerStyle = styled.div`
padding: 1rem;
margin: 0.5rem;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
border: 2px solid black;
border-radius: 3px;
max-width: 5000px;
max-height: 1000px;
boxSizing: border-box;
flex-direction: column;
background-color: gray;

`

export const DeleteButton = styled.button`
color: red;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 3px;
:hover{
  background-color: #FF99CC;
}
`

export const InputStyle = styled.input`
font-size: 4em;

`

export const ShowStyle = styled.div`
color: #FFFFFF;
background: black;
width: 400px;
text-align: center;
margin: 1em auto;
padding: 100px;
font-size: 1.5em;
font: Merriweather;
height: 600px;

`
