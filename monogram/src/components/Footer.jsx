import React from 'react'
import { Tooltip } from 'react-tooltip';
function Footer() {
  return (
    <footer className='bg-[#1a2456] text-[#efc2b3] w-full text-sm pt-10 pb-20 justify-center flex flex-wrap gap-y-10 gap-x-12 lg:gap-x-24 '>
        <div  className='order-2 lg:order-1 justify-center flex flex-wrap gap-y-10 gap-x-12 lg:gap-x-24'>
        <ul className='  space-y-6'>
            <li className='uppercase font-bold ' style={{fontSize : '12px'}}>Monogram</li>
            <ul  style={{fontSize : '14px'}} className='space-y-1'>
                <li>305 King St. W.</li>
                <li>Suite 502</li>
                <li>Kitchner ,ON</li>
                <li>Canada</li>
            </ul>   
        </ul>
        <ul className='  space-y-6'>
            <li style={{fontSize : '12px'}} className='uppercase font-bold'>Quick Links</li>
            <ul  style={{fontSize : '14px'}}  className='space-y-3 '>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="home"> Home</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="How It Works">How It Works</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Shop">Shop</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Download">Download</a></li>
            </ul>   
        </ul>
        <ul className='space-y-6'>
            <li style={{fontSize : '12px'}} className='uppercase font-bold'>Help</li>
            <ul  style={{fontSize : '14px'}}  className='space-y-3'>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="FAQs">FAQs</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Support Center">Support Center</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Shipping and Sales">Shipping and Sales</a></li>
            </ul>   
        </ul>
        <ul className='space-y-6'>
            <li style={{fontSize : '12px'}} className='uppercase font-bold'>Information</li>
            <ul  style={{fontSize : '14px'}}  className='space-y-3'>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="About Us">About Us</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Work with us">Work with us</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Privacy Policy">Privacy Policy</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Terms of Use">Terms of Use</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Terms of Sale">Terms of Sale</a></li>
                <li className='hover:text-[#ff8d6b] hover:underline'><a href="Press Kit">Press Kit</a></li>
            </ul>   
        </ul>
        </div>
        <div className='order-1 lg:order-2 justify-center flex flex-wrap gap-y-10 gap-x-12 lg:gap-x-24'>
        <ul className=' space-y-6'>
            <li style={{fontSize : '12px'}} className='uppercase font-bold'>Subscribe to monogram</li>
            <ul  style={{fontSize : '14px'}}  className='space-y-3'>
                <li className='w-[350px] '>Master productivity with Creative Console and get all the latest Monogram news.</li>
                <li>
                    <form action="" className='space-x-5'>
                        <input type="email" placeholder='Email Adress' className='bg-[#1a2456] border-[#efc2b3] border-2 pl-2 py-1' />
                        <button type="submit" className='bg-[#CCB2B2] text-[#1a2456] px-7 text-sm py-1.5 rounded-3xl font-bold' style={{fontSize : '12px'}} >SUBMIT</button>
                    </form>
                </li>
                <li>
                    <div className='flex space-x-4 h-8'>
                        <Tooltip id="my-tooltip" />
                        <img data-tooltip-id="my-tooltip" data-tooltip-content="Instagram" className=' bg-[#efc2b3] rounded-3xl p-3' src="/src/assets/instagram.svg" alt="" />
                        <img data-tooltip-id="my-tooltip" data-tooltip-content="Twitter" className='bg-[#efc2b3] rounded-3xl p-3' src="/src/assets/twitter.svg" alt="" />
                        <img data-tooltip-id="my-tooltip" data-tooltip-content="Facebook" className='bg-[#efc2b3] rounded-3xl px-3 py-2' src="/src/assets/facebook.svg" alt="" />
                        <img data-tooltip-id="my-tooltip" data-tooltip-content="YouTube" className='bg-[#efc2b3] rounded-3xl p-3' src="/src/assets/youtube.svg" alt="" />
                    </div>
                </li>
                <li>© Monogram 2025</li>
            </ul>   
        </ul>
        </div>
    </footer>
  )
}

export default Footer