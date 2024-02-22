import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Projects from './components/pages/Projects/Projects.jsx'
import Home from './components/pages/Home.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(   <RouterProvider router={router} />);
