import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
function App() {
    return (
        <main className=''>
            <Header />
            <main className='min-h-[78vh]'>
                <Outlet />
            </main>
            <Footer />
        </main>
    );
}

export default App;
