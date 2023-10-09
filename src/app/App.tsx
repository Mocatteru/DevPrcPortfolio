import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuitarScreen from '../pages/guitar/guitar-screen';
import HomeScreen from '../pages/home/home-screen';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/guitar' element={<GuitarScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
reportWebVitals;

export default App;
