import { FaXTwitter } from 'react-icons/fa6';
import image from './assets/TORO.png'
import { FaTelegram } from "react-icons/fa";


const Header = () => {
  return (
    <div className=" header mt-10 flex justify-between w-full">
        <div>
            <img src={image} alt="" className='image' />
        </div>
        <div className='body-flex flex justify-between'> 
        <div className='icon-bg rounded-full w-[36px] h-[36px] flex justify-center items-center border-2 bg-white'><FaXTwitter className='icon text-4xl outline-slate-200' /></div>
        <div className='icon-bg rounded-full w-[36px] h-[36px] flex justify-center items-center border-2 bg-white'><FaTelegram className='icont text-4xl outline-slate-200' /></div>

        </div>
    </div>
  )
}

export default Header