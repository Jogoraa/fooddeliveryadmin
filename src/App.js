
import AddFoodData from './components/AddFoodData';

import OrderSection from './components/OrderSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';
import AdminDashboard from '../src/components/screens/AdminDashboard';
import loginScreen from '../src/components/screens/loginScreen';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} />
        <Route path="/analytics" element={<analyticsService />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/orders" element={<OrderSection />} />
        <Route path="/login" element={<loginScreen />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
