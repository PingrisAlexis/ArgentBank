import { Header, Footer } from './components'
import { HomePage, LoginPage, ProfilePage } from './views'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {
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
