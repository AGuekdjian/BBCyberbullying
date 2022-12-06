import React from 'react'
import Footer from './pages/Footer'
import FormAside from './pages/FormAside'
import Header from './pages/Header'
import Main from './pages/Main'

const App = () => {
    return (
        <div>
            <Header />
            <div className='main-container'>
                <Main />
                <FormAside />
            </div>
            <Footer />
        </div>
    )
}

export default App
