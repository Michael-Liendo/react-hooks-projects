import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Index from './pages/Index';
import UseCallback from './pages/useCallback';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/useCallback" element={<UseCallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
