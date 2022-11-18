import {browserRouter, Routes, Route} from 'react-router-dom'
import GlobalStyle from './assets/GlobalStyle.js'
import SignIn from './pages/SignIn'

export default function App(){
    return(
        <>
        <GlobalStyle />
        <SignIn />
        </>
    )
}