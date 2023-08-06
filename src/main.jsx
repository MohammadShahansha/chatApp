import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home.jsx';
import Login from './pages/Login/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './pages/Register/Register/Register.jsx';
import Message from './pages/Messege/Message/Message.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "register",
    element:<Register></Register>
  },
  {
    path: "message",
    element: <Message></Message>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
