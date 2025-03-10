import React from 'react'

const Footer = () => {
    return (
        <div className='bottom-0 bg-white bg-opacity-50 border-t-2 border-gray-800  flex justify-between w-full p-4'>
            <div className="copy-rights w-1/2">
                <p className='text-sm font-light'>© 2025 Mogili Deepika. All rights reserved</p>
            </div>
            <div className=" w-1/2 flex justify-evenly text-sm font-light">
                <p>Terms and conditions</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    )
}

export default Footer