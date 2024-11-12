import './App.css'

import { Outlet } from 'react-router-dom'

import NavBar from './contents/header/navBar';

function App() {

  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default App
