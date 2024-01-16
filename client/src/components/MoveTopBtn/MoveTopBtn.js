import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'


const MoveTopBtn = () => {
    const [btn, setBtn] = useState(false)
    const setDisplay = () => {
        // console.log(window.scrollY)
        if (window.scrollY >= 500) {
            setBtn(true)
        } else {
            setBtn(false)
        }
    }
    useEffect(() => {
        setDisplay()
        // adding the event when scroll change background
        window.addEventListener("scroll", setDisplay)
    })

    const handleClick =() =>{
        const scrollStep = -window.scrollY / (500 / 15); // Adjust scroll speed here
        const scrollAnimation = requestAnimationFrame(handleClick);

        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            cancelAnimationFrame(scrollAnimation);
        }
    }

    return (
        btn && <button onClick={handleClick} data-aos="zoom-in" data-aos-duration="1000" className='fixed bottom-10 right-10 bg-blue-600 p-2 rounded-full z-50 text-white text-2xl'>
            <BiArrowFromBottom />
        </button>
    )
}

export default MoveTopBtn