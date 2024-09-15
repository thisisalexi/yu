import { FaTelegram} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import imagenew1 from './assets/Screenshot_14-9-2024_201950_www.instagram.com.jpeg'
import imagenew2 from './assets/Screen2.jpeg'
import imagenew3 from './assets/Screen3.jpeg'
import imagenew4 from './assets/Screen4.jpeg'
import image from './assets/TORO.png'

const Boiler = () => {
  return (
    <div>
        <h2 className="yu">$Yu</h2>
        <div className='yumage-cont'>
          <img className='yumage' src={image} alt="" />
        </div>
        <div className='text-bg'>
          <p>$YU is the real name of $DOGE. $DOGE is the biggest meme coin in the history of crypto, and we found its real name - $YU. We are so fuckin early on this . This is gonna be a huge memplay of this season. We have all the proof pinned. Even 0.1% supply will make you a millionaire on this. LFG chads</p>
        </div>
        <p className='center'>The Realest Dog on the ETH Network</p>
        <p className='center1'>CA: to be announced</p>
        <p className='buynow'>BUY NOW</p>
        <div className='body-flex1 flex justify-between'> 
          <div className='icon-bg rounded-full w-[36px] h-[36px] flex justify-center items-center border-2 bg-white'><FaXTwitter className='icon text-4xl outline-slate-200' /></div>
          <div className='icon-bg rounded-full w-[36px] h-[36px] flex justify-center items-center border-2 bg-white'><FaTelegram className='icont text-4xl outline-slate-200' /></div>

        </div>

        <h3 className='yumemes'>$Yu memes</h3>
        <div className='image-folder'>
          <img className='yumage1' src={imagenew1} alt="" />
          <img className='yumage1' src={imagenew2} alt="" />
          <img className='yumage1' src={imagenew3} alt="" />
          <img className='yumage1' src={imagenew4} alt="" />

        </div>
        <p className="copyright">
          (c) $yu team 2024
        </p>

    </div>
  )
}

export default Boiler