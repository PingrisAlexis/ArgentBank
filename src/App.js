import { Header, Footer } from './components'
import { HomePage, LoginPage, ProfilePage } from './views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { remember } from './store/actions/auth'

function App() {
    let dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(remember(token))
        }
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
