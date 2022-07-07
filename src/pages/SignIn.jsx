import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/apiCalls'
import { token } from '../Redux/requestMethods'

const Container = styled.div`
width: 100vw;
height:100vh ;

background:url(
    https://images.pexels.com/photos/10311627/pexels-photo-10311627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    ) center ;

display: flex;
justify-content: center;
align-items: center;
`

const Wrapper = styled.div`
width:40% ;
padding: 20px;
border-radius:5% ;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
color: #fff;
margin: 40px auto;
background-color: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 15px;
padding: 32px;
backdrop-filter: blur(10px);
`

const Title = styled.h1`
font-size: 24px;
font-weight: 400;
margin-bottom:20px ;
`

const Form = styled.form`
width:85% ;
display: flex;
flex-direction:column ;
align-items: center;
justify-content: center;
border: 0;
text-decoration: none;
border-radius: 15px;
background-color: rgba(255,255,255,0.1);
border: 1px solid rgba(255,255,255,0.1);
backdrop-filter: blur(30px);
color: rgba(255,255,255,0.8);
font-size: 14px;
padding: 30px 0px ;

`

const Input = styled.input`
width:85% ;
padding: 10px;
margin: 10px 0px ;
font-size: 16px;
border-radius:10px ;
border:none;
opacity: 60%;
&:focus{
    border-color:rgba(255,255,255,0.4) ;
}

`

const Button = styled.button`
font-size: 18px;
width:40% ;
height: 50px;
border:none ;
background-color:red ;
color:white ;
cursor: pointer;
border-radius:15px ;
margin-bottom:10px ;
`
const Link = styled.a`
margin-bottom:10px ;
&:hover{
    text-decoration:underline ;
    color:black ;
}
cursor: pointer;
`

const SignIn = () => {

    const [username, setUsername] = useState('');
    const [password , setPassword] = useState('');
    const dispatch = useDispatch()
    
    const handleClick = (e)=> {
        e.preventDefault();
        login(dispatch , {username , password})
    }


  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <Form>
                <Input placeholder='Username' onChange={(e)=> setUsername(e.target.value)} />
                <Input placeholder='Password' type='password' onChange={(e)=> setPassword(e.target.value)} />
                <Button onClick={handleClick}>Sign In</Button>
                <Link>forget password?</Link>
                <Link>Create A New Acount</Link>
            </Form>
        </Wrapper>
        
    </Container>
  )
}

export default SignIn