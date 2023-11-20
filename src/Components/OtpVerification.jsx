import React, { useContext, useRef, useState } from 'react'
import '../Styling/OtpVerification.css'
import { AppContext } from './AuthContext'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../Firebase/SetUp'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'

const OtpVerification = ({ onChange }) => {

    const { otp, setOtp, phone, user, setCheckOtp, verifyOtp, setVerifyOtp, } = useContext(AppContext)


    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];


    //The code is written again for the input verification...
    const handleChange = (e, index) => {
        let value = e.target.value;

        // Validate input to allow only numeric characters
        if (/[^0-9]/.test(value)) {
            return;
        }

        // Update the OTP state
        const newOtp = [...verifyOtp];
        newOtp[index] = value;
        setVerifyOtp(newOtp);

        // Move focus to the next input box
        if (index < 5 && value !== '') {
            inputRefs[index + 1].current.focus();
        }

        // Notify parent component of the OTP change
        onChange(newOtp.join(''));
    };

    const handleKeyDown = (e, index) => {
        // Handle backspace to move focus to the previous input box
        if (e.key === 'Backspace' && index > 0 && verifyOtp[index] === '') {
            inputRefs[index - 1].current.focus();
        }
    };




    // const handleOtpChange = (otp) => {
    //     console.log('OTP entered:', otp);
    //     // You can perform additional actions with the OTP, such as validation or submission.
    // };

    // const [verifyOtp, setVerifyOtp] = useState(Array(length).fill(''));
    // const inputRefs = useRef([])


    // const handleInputChange = (e, index) => {
    //     const value = e.target.value

    //     if (isNaN(value)) {
    //         return
    //     }

    //     const newVerifyOtp = [...verifyOtp];
    //     newVerifyOtp[index] = value;

    //     setVerifyOtp(newVerifyOtp);

    //     //how to move to the next box
    //     if (index < length - 1 && value !== '') {
    //         inputRefs.current[index + 1].focus();
    //     }
    // }

    // const handleInputKeyDown = (e, index) => {
    //     //move the previous input box on backspace
    //     if (e.key === 'Backspace' && index > 0 && verifyOtp[index] === '') {
    //         inputRefs.current[index - 1].focus();
    //     }
    // }

    const otpHandler = (e) => {
        setOtp(e.target.value)
    }

    const bothHandleFunction = (e, idx) => {
        e.preventDefault();
        handleChange(e, idx);
        otpHandler(e);
    }



    const navigate = useNavigate();

    const logo = require('../Images/Content(1).png')
    const circle_1 = require('../Images/sign-top-circle.png')
    const circle_2 = require('../Images/sign-2-circle.png')
    const circle_3 = require('../Images/sign-3-circle.png')
    const circle_4 = require('../Images/sign-4-circle.png')
    const circle_5 = require('../Images/sign-5-circle.png')


    const VerifyOtp = async () => {
        console.log("real otp entered is", otp)
        try {
            const otpData = await user.confirm(otp)
            console.log(otpData)
            setCheckOtp(otp)
        }
        catch (err) {
            console.log(err)
        }
        toast.success("Logged In successFully...")
        navigate('/')
    }


    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            console.log(confirmation)
        }
        catch (err) {
            console.log(err)
        }
        navigate('/otp')
    }



    return (
        <div className='otp-verification mb-10 mt-10'>
            <div className='flex gap-10 otp-content'>
                <div className='left w-[40vw] h-auto relative  '>

                    {/*Logo image is here */}
                    <div className="logo  top-[42%] absolute right-[42%]">
                        <img src={logo} alt="" className='h-[120px] w-[120px]' />
                    </div>

                    {/*Vaidik gyan and store para-- */}

                    <div className='vaidik-gyan-para '>
                        <p className='text-[28px] font-bold top-[60%] absolute right-[29%] text-white para-1'>Vaidik Gyan & Store</p>
                        <p className='top-[65%] absolute right-[30%] text-white text-[16px] para-2'>Discover your faith,Shop and Divine</p>
                    </div>

                    {/*top-1 circle image is here */}
                    <div className='circle-1 absolute top-[-50px] left-[72px]'>
                        <img src={circle_1} alt="" />
                    </div>

                    {/*top-2 circle image is here */}
                    <div className='circle-2 absolute top-[157px] left-[429px]'>
                        <img src={circle_2} alt="" />
                    </div>

                    {/*top-3 circle image is here */}
                    <div className='circle-3 absolute top-[390px] left-[52px]'>
                        <img src={circle_3} alt="" />
                    </div>

                    {/*top-4 circle image is here */}
                    <div className='circle-4 absolute top-[653px] left-[401px]'>
                        <img src={circle_4} alt="" />
                    </div>

                    {/*top-5 circle image is here */}
                    <div className='circle-5 absolute top-[693px] left-[170px]'>
                        <img src={circle_5} alt="" />
                    </div>
                </div>

                <div className="right mt-20">
                    <div className="top-para bg-white mt-10">
                        <p className='font-semibold text-[36px] para1'>Verify Mobile Number</p>
                        <p className='font-normal text-[20px] para2'>Please wait till we verify your number (907) 555-0101 &</p>
                        <p className='font-normal text-[20px] para3'> auto generate an OTP for you.</p>
                    </div>

                    <div className='flex gap-0 mt-10 ml-[-30px] main-otp-container'>
                        {/* <div className='h-[56px] w-[56px] box-1 flex justify-center items-center ml-20'>
                            <input
                                onChange={(e) => setOtp(e.target.value)}
                                type="text" placeholder='enter otp' /> <br />
                        </div> */}

                        {
                            verifyOtp.map((digit, index) => (
                                <input
                                    className='otp-container h-[56px] w-[56px] box-1 flex justify-center items-center ml-[30px] text-[20px]
                                    p-[10px]'
                                    key={index}
                                    ref={inputRefs[index]}
                                    // type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => bothHandleFunction(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}

                                // key={index}
                                // value={digit}
                                // // onChange={(e) => setOtp(e.target.value)}
                                // type="text"
                                // onChange={(e) => bothHandleFunction(e, index)}
                                // // onChange={(e) => handleInputChange(e, index)}
                                // onKeyDown={(e) => handleInputKeyDown(e, index)}
                                // maxLength="1"
                                // ref={(ref) => (inputRefs.current[index] = ref)}
                                />
                            ))
                        }

                        {/* <div className='h-[56px] w-[56px] box-1 flex justify-center items-center'>
                            <p>2</p>
                        </div>

                        <div className='h-[56px] w-[56px] box-1 flex justify-center items-center'>
                            <p>3</p>
                        </div>

                        <div className='h-[56px] w-[56px] box-1 flex justify-center items-center'>
                            <p>4</p>
                        </div>

                        <div className='h-[56px] w-[56px] box-1 flex justify-center items-center'>
                            <p>5</p>
                        </div>

                        <div className='h-[56px] w-[56px] box-1 flex justify-center items-center'>
                            <p>6</p>
                        </div> */}
                    </div>

                    <div className="auto-verify mt-3">
                        <p className='text-[16px] font-normal'>Auto verifying code in 3 minutes. <span className='time-verify'>02:10</span></p>
                    </div>

                    <div className="verify-btn mt-10">
                        <button onClick={VerifyOtp} className='btn flex justify-center items-center font-bold'>Submit & Verify</button>
                    </div>

                    <div className='didnt-rcv-otp'>
                        <button onClick={sendOtp}> <p className='ml-[90px]'>Didn't recieve the OTP? <span className='resend'>Resend</span> </p></button>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default OtpVerification