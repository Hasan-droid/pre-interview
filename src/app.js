import React from 'react'
import Header from './components/header'
import Login from './components/Login';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <Header/>
            <Login/>
          
           <Footer/>
        </div>
    )
}
