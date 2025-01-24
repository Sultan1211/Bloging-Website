// @ts-ignore
import { TypewriterEffectSmooth } from "./ui/shooting-stars"

function Quotes() {
    return (
        <div className='bg-black h-screen flex justify-center items-center '>
            <div className='h-50'>
                <div className='font-bold text-3xl'>
                    <TypewriterEffectSmooth
                        words={[
                            { text: "Unleash your creativity one post at a time." , className: "text-3xl "}
                            

                        ]}
                    />

                </div>
            </div>
        </div>
    )
}

export default Quotes