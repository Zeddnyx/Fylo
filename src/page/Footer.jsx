import Fylo from '../asset/images/logo.svg'
import Email from '../asset/images/icon-email.svg'
import Loc from '../asset/images/icon-location.svg'
import Phone from '../asset/images/icon-phone.svg'

export default function Footer() {

  const LI = props => {
    return <li className='hover:text-white text-gray-300 text-xm'>
      {props.li}
    </li>
  }

  return <footer className='bg-footer -mt-60 z-10 w-full h-[900px] lg:h-[520px] py-60 lg:py-80 px-10 grid gap-10 lg:text-xs'>
    <div>
      <img src={Fylo} />
    </div>

    <div className='grid grid-cols-1 gap-10 lg:grid-cols-4'>
      <div className='grid gap-5 lg:w-[600px] lg:grid-cols-2 col-span-2'>
        <p className='flex gap-2 lg:w-96'>
          <img src={Loc} className='w-6 h-5 lg:w-5 lg:2'/> 
          <p className='pr-40'>dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatatqui minim labore adipisicing minim sint cillum sint consectetur cupidatat..</p>
        </p>
        <div className='grid gap-10'>
          <p className='flex gap-2'><img src={Phone} className='w-5 h-5 lg:w-3 lg:h-3'/>+1 666 666 666</p>
          <p className='flex gap-2'><img src={Email} className='w-5 h-5 lg:w-3 lg:h-3'/>@fylo.com</p>
        </div>
      </div>

      <div className='flex gap-10 flex-col lg:flex-row lg:gap-1'>
        <ul className='block lg:w-40 '>
          <li className='text-gray-300 hover:text-white'>About Us</li>
          <LI li='Jobs'/>
          <LI li='Press'/>
          <LI li='Blog'/>
        </ul>
        
        <ul className='w-20'>
          <li className='text-gray-300 hover:text-white'>Contact Us</li>
          <LI li='Terms'/>
          <LI li='Privacy'/>
        </ul>
      </div>

      <div className='flex gap-5 mx-auto col-span-2 lg:col-span-1'>
        <div className='w-10 h-10 rounded-full border-2 border-white hover:border-cyan'></div>
        <div className='w-10 h-10 rounded-full border-2 border-white hover:border-cyan'></div>
        <div className='w-10 h-10 rounded-full border-2 border-white hover:border-cyan'></div>
      </div>
    </div>

  </footer>
}
