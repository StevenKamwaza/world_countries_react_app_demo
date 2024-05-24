import React from 'react'

const Footer = () => {
    return (
        <div className=' border-t border-gray-800 bg-gray-600 h-[10vh] flex flex-row justify-center items-center'>
            <div class="text-center  max-w-2xl mx-auto  ">
                <span className="block text-lg text-center text-gray-200 ">
                WC © {new Date().getFullYear()}. All Rights Reserved.
                </span>
            </div>
        </div>
    )
}

export default Footer