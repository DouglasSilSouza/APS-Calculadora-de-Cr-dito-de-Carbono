import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '../src/assets/scss/styles.scss'

import * as bootstrap from 'bootstrap'

// Componentes
import Inicio from './contents/body/inicio/inicio.jsx'
import Dedicatoria from './contents/body/info/dedicatoria.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/APS-Calculadora-de-Cr-dito-de-Carbono', element: <Inicio /> },
      { path: '/APS-Calculadora-de-Cr-dito-de-Carbono/dedicatoria', element: <Dedicatoria />}
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
