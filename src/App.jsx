import './App.css';
import Sidehoved from "./components/Sidehoved";
import Footer from "./components/Footer";
import LoginPage from './pages/Login';
import InfoPage from './pages/InfoPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import Fejl from './pages/Fejl';

function App() {

  return (
    <div>
      <Sidehoved />
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/fejl" element={<Fejl />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>

  );
}

export default App;

