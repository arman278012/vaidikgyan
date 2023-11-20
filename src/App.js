import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import OtpVerification from './Components/OtpVerification';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mathura from './Components/Mathura';

function App(verifyOtp) {
  const handleOtpChange = (verifyOtp) => {
    console.log('OTP entered:', verifyOtp);
    // You can perform additional actions with the OTP, such as validation or submission.
  };
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar></TopBar>
        <Navbar></Navbar>
        {/* <Hero></Hero> */}
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/otp' element={<OtpVerification onChange={handleOtpChange} />} />
          <Route path='/mathura' element={<Mathura />}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>



      {/* <SignUp></SignUp>
      <Login></Login> */}
      {/* <OtpVerification></OtpVerification> */}
    </div>
  );
}

export default App;
