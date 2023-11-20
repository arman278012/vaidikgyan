import React from 'react'
import '../Styling/Mathura.css'
import { AiOutlineHeart } from 'react-icons/ai'

const Mathura = () => {

    const mathura_banner = require('../Images/mathura-category.png')
    const vertlicle_line = require('../Images/mathura-line.png')
    const worship_items = require('../Images/worshipItems.png')
    const rahda_krishna = require('../Images/brass-murthi.png')
    const religious_books = require('../Images/religiousBooks.png')
    const religious_jap_malas = require('../Images/religious-jap-malas.png')
    const clothings = require('../Images/clothing.png')
    const others = require('../Images/others.png')
    const rahda_krishna_2 = require('../Images/radha-krishna.png')
    const unknown_god = require('../Images/radha-banner.png')
    const ramayana = require('../Images/ramayan.png')
    const mala = require('../Images/mala.png')
    const peacock = require('../Images/peacock.png')
    const om_girl = require('../Images/om ldki.png')
    const mala2 = require('../Images/mala2.png')
    const agarbatti = require('../Images/agarbatti.png')
    const laddu_Store = require('../Images/ladduRakhneWala.png')
    const ramanayan = require('../Images/ramayan.png')
    const Sandalwood = require('../Images/chandanKilakdi.png')
    const shankh = require('../Images/shankh.png')



    return (
        <div className='mathura-category w-[100%] mt-10'>

            {/*Section-1 Banner-section */}
            <div className='mathura-banner'>
                <img src={mathura_banner} alt="" className='w-[100%]' />
            </div>


            {/*Section-2  location-section */}
            <div className="location flex flex-col w-[80vw] justify-center mx-auto mt-[30px] mb-[20px] gap-[20px]">
                <div className='mathura-UP'>
                    <p className='text-[24px] text-[#FF5D00] font-normal leading-[30px]'>Mathura,Uttar Pradesh,India</p>
                </div>

                <div className="mathura-vrindavan">
                    <p className='font-bold text-[44px] leading-[42px]'>Mathura Vrindavan</p>
                </div>

                <div className="discription">
                    <p className='font-normal text-[24px] leading-[38px] text-[#120904]'>Mathura and Vrindavan are twin cities in the Braj Bhoomi region of Uttar Pradesh, India. Mathura is said to be the birthplace of Lord Krishna, while Vrindavan is the small town where he spent his childhood.
                        Vrindavan is one of the most sacred places for the Vaishnavism tradition.</p>
                </div>
            </div>

            {/*Section-3  vertical-line-section */}

            <div className='vertlicle-line mt-[30px] '>
                <img src={vertlicle_line} alt="" className='w-[100%] ' />
            </div>

            {/*Section-4  shop-by-categories-section */}
            <div className="shop-by-categories w-[80vw] flex flex-col justify-start mx-auto mt-[30px] mb-[30px] gap-[24px]">
                <div>
                    <p className='font-semibold text-[28px] leading-[28px] text-[#120904]'>Shop By Categories</p>
                </div>

                <div className="shopping-items flex justify-center items-center gap-[48px]">
                    <div className="worship-items text-center gap-[13px]">
                        <img src={worship_items} alt="" className='' />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Worship Items</p>
                    </div>

                    <div className="worship-items  text-center gap-[13px]">
                        <img src={rahda_krishna} alt="" />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Brass Murthi</p>
                    </div>

                    <div className="worship-items  text-center gap-[13px]">
                        <img src={religious_books} alt="" />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Religious Books</p>
                    </div>

                    <div className="worship-items  text-center gap-[13px]">
                        <img src={religious_jap_malas} alt="" />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Religious jap Mala</p>
                    </div>

                    <div className="worship-items  text-center gap-[13px]">
                        <img src={clothings} alt="" />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Clothings</p>
                    </div>

                    <div className="worship-items  text-center gap-[13px]">
                        <img src={others} alt="" />
                        <p className='font-medium text-[20px] leading-[30px] text-[#120904]'>Others</p>
                    </div>
                </div>
            </div>

            {/*Section-5 all-products-section-section */}

            <div className='all-products w-[80vw] mx-auto mt-[30px]'>
                <div className="top-line flex justify-between mx-auto text-center">
                    <p className='font-semibold text-[28px] leading-[30px] text-[#120904] All-Products'>All Products</p>
                    <p className='font-normal text-[20px] leading-[30px] text-[#120904] View-All'>View All</p>
                </div>

                <div className='all-products-nav mt-[24px]'>
                    <div className='nav-links flex gap-[30px] w-[80vw] justify-center mx-auto'>
                        <div className='all w-[61px] h-[52px]  rounded-[24px]
                        flex justify-center items-center'>
                            <p className='text-white font-semibold leading-[36px] text-[24px]'>All</p>
                        </div>

                        <div className='Murti flex  justify-center items-center w-[97px] h-[52px]  border-[1px] border-gray-400  rounded-[24px] '>
                            <p className='leading-[36px] text-[24px]'>Murti</p>
                        </div>

                        <div className='Beads Mala flex  justify-center items-center w-[165px] h-[52px]  border-[1px] border-gray-400  rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'>Beads Mala</p>
                        </div>

                        <div className='Clothings flex justify-center items-center w-[140px] h-[52px]  border-[1px] border-gray-400  rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'>Clothings</p>
                        </div>

                        <div className='Incense flex justify-center items-center w-[120px] h-[52px]  border-[1px] border-gray-400  rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'> Incense</p>
                        </div>

                        <div className='Books flex justify-center items-center  w-[104px] h-[52px]  border-[1px] border-gray-400  rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'>Books</p>
                        </div>

                        <div className='Deity-Clothes flex justify-center items-center  w-[183px] h-[52px]  border-[1px] border-gray-400  rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'>Deity Clothes</p>
                        </div>

                        <div className='Chandan-Tilak flex justify-center items-center  w-[195px] h-[52px]  border-[1px] border-gray-400 rounded-[24px]'>
                            <p className='leading-[36px] text-[24px]'>Chandan Tilak</p>
                        </div>
                    </div>
                </div>


                <div className='most-selling-products w-[80vw] mx-auto mt-[24px]'>
                    <div className='flex gap-10 mt-[10px] cards'>
                        <div className='relative'>
                            <img src={rahda_krishna_2} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Fine Brass Radha Krishna Murt...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={unknown_god} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Pure Fine Brass Tara statue Sto....</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={ramayana} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Original Shrimadbhagwat Gee...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={mala} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Rudraksha Mala Round Breads...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='most-selling-products w-[80vw] mx-auto mt-[24px] '>
                    <div className='flex gap-10 mt-[10px] cards'>
                        <div className='relative'>
                            <img src={laddu_Store} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Fine Brass Radha Krishna Murt...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={ramanayan} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Pure Fine Brass Tara statue Sto....</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={Sandalwood} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Original Shrimadbhagwat Gee...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={shankh} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Rudraksha Mala Round Breads...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='most-selling-products w-[80vw] mx-auto mt-[24px] mb-10'>
                    <div className='flex gap-10 mt-[10px] cards'>
                        <div className='relative'>
                            <img src={peacock} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Fine Brass Radha Krishna Murt...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={om_girl} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Pure Fine Brass Tara statue Sto....</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={mala2} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Original Shrimadbhagwat Gee...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src={agarbatti} alt="" className='w-[290px] h-[276px]' />
                            <div className='absolute top-4 right-2 bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full'>
                                <AiOutlineHeart className='text-red-700 text-[20px]' />
                            </div>
                            <p className='font-semibold text-[17px]'>Rudraksha Mala Round Breads...</p>
                            <div className='flex gap-4'>
                                <p className='font-medium text-[17px]'>$100.00</p>
                                <p className='font-medium text-[17px] line-through opacity-50'>$500.00</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Mathura