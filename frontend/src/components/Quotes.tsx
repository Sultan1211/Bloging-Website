import React from 'react'

function Quotes() {
    return (
        <div className='bg-slate-200 h-screen flex justify-center items-center'>
            <div className='max-w-md'>
                <div className='font-bold text-3xl'>
                    "There is no greater agony than bearing an untold story inside you."

                </div>
                <div className='mt-3 font-semibold text-xl'>
                     — Maya Angelou
                </div>
                {/* <div className='text-slate-400 font-extralight'>
                    CEO | Acme corp
                </div> */}
            </div>
        </div>
    )
}

export default Quotes