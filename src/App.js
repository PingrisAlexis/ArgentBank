import {Header, Footer} from './components';
import {HomePage, LoginPage} from './views';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {useState} from 'react';

function App() {




    return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes> s
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;