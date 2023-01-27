import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Index from './pages/Index';
import UseState from './pages/useState/useState';
import UseEffect from './pages/useEffect/useEffect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="*" element={<h1>No Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
