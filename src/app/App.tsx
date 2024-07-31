import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuitarScreen from '../pages/guitar-screen/guitar-screen';
import HomeScreen from '../pages/home/home-screen';
import UserInfoScreen from '../pages/userInfo-screen/userInfo-screen';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/guitar' element={<GuitarScreen />} />
        <Route path='/userInfo' element={<UserInfoScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
reportWebVitals;

export default App;
