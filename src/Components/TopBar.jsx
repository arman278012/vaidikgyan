import React, { useContext, useEffect } from 'react'
import '../Styling/TopBar.css'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AppContext } from './AuthContext'

const TopBar = () => {

    const { otp, checkOtp, verifyOtp, setVerifyOtp, } = useContext(AppContext)


    // const handleScroll = () => {
    //     setSticky(window.scrollY > 0);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    //     const [isMobile, setIsMobile] = useState(false);

    //   const handleToggle = () => {
    //     setIsMobile(!isMobile);
    //   };



    const logo = require('../Images/Content.png')
    const vaidikGyan = require('../Images/Vaidik Gyan & Store.png')
    const discoverFaith = require('../Images/Discover Your Faith, Shop Divine.png')


    return (
        <div className='top-bar bg-cover h-[84px]  w-[100vw] p-5 mx-auto'>
            <div className='flex justify-around'>

                {/*TopBar logo and quote*/}
                <div className='flex gap-3 w-[20vw] top-bar-left '>
                    <div className='company-logo'>
                        <Link to={'/'}><img src={logo} alt="" className='company-logo' /></Link>
                    </div>
                    <div className='flex flex-col company-text'>
                        <div><p className='text-[18px] font-extrabold text-white Vaidik-Gyan'>Vaidik Gyan and Store</p></div>
                        <div><p className='text-[10px] text-white Discover-Faith'>Discover Your Faith, Shop Divine</p></div>
                    </div>
                </div>

                {/*Input Search bar */}
                <div className='search-bar w-[40vw]'>
                    <input
                        type="text"
                        placeholder='Search product name, temples, categories...'
                        className='search-input w-[507px] rounded-[10px] h-[48px] p-5 font-normal text-[16px] hover:border-none'
                    />
                </div>

                {/*signup,signIn and cart */}

                <div className='flex gap-2 w-[20vw] mt-2 signup-details'>
                    <div > <AiOutlineUser className='text-white font-medium text-[16px] mt-[6px]' /></div>
                    {
                        checkOtp == verifyOtp ? (<p className='text-white font-semibold text-[16px] signup-signin'>Arman Ali</p>) : (<div className='flex'>
                            <Link to={'/signup'}><p className='text-white font-semibold text-[16px] signup-signin'>SignUp/</p></Link>
                            <Link to={'/signin'}><p className='text-white font-semibold text-[16px] signup-signin'>SignIn</p></Link>
                        </div>)
                    }


                    <div className='text-white font-semibold text-[16px]'>|</div>

                    <div className='text-white font-semibold text-[16px] mt-[6px]'><AiOutlineShoppingCart /></div>
                    <p className='text-white font-semibold text-[16px] ml-[-2px] cart'>Cart</p>
                </div>



            </div>
        </div >
    )
}

export default TopBar