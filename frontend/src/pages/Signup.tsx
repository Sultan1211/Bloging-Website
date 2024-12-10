import React from 'react'
import Quotes from '../components/Quotes'
import Auth from '../components/Auth'
function Signup() {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <Auth type="signup" />
                </div>
                <div className='hidden lg:block'>
                    <Quotes />
                </div>

            </div>


        </div>
    )
}

export default Signup