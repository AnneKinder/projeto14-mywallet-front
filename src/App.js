import {browserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle.js'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp.js'

export default function App(){
    return(
        <>
        <GlobalStyle />
        {/* <SignIn /> */}
        <SignUp />
        </>
    )
}