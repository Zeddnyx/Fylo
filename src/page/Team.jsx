import Teamimg from '../asset/images/illustration-stay-productive.png'
import Arrow from '../asset/images/icon-arrow.svg'
import Pro1 from '../asset/images/profile-1.jpg'
import Pro2 from '../asset/images/profile-2.jpg'
import Pro3 from '../asset/images/profile-3.jpg'
import Quote from '../asset/images/bg-quotes.png'

export default function Team() {

  const Comment = props => {
    return <div className='bg-testi w-[370px] h-[200px] px-7 py-7'>
      <p>{props.title}</p>
      <div className='flex items-center gap-5 my-5 text-xs'>
        <img className='rounded-full w-10' src={props.img} alt={props.alt} />
        <div className='grid gap-1'>
          <h4 className='font-bold text-sm'>{props.name}</h4>
          <h5>{props.work}</h5>
        </div>
      </div>
    </div>
  }

  return  <div name='team' className='px-10 mt-28 grid grid-cols-1 place-items-center'>
    <div className='grid lg:grid-cols-2 place-items-center '>
      <div className='w-[340px]'>
        <img src={Teamimg} alt="team" />
      </div>

      <div className='flex flex-col gap-5 my-5 mt-20'>
        <h1 className='font-bold'>Stay productive, wherever you are</h1>
        <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your life storage needs.</p>
        <p>Securely share files and folders with freinds, family and colleagues for live collaboration. No email attachments required.</p>
        <div className='border-b-2 border-cyan text-cyan hover:text-white hover:border-white flex gap-2 w-60 items-center'>
          <p>See how Fylo works </p>
          <img src={Arrow} alt="arrow" className='w-5 h-5'/>
        </div>
      </div>

    <div className='absolute mt-[610px] lg:mt-[350px] lg:-mx-1 lg:w-20 mx-10 sm:mx-20 md:mx-36 w-10 z-10'>
      <img src={Quote} />
    </div>

    </div>
      <div className='mt-20 grid gap-5 lg:grid-cols-3 z-20'>
        <Comment img={Pro1} name='Satish Patel' 
          work='Founder & CEO, Huddle' alt='Satish Patel'
          title='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' 
        />
        <Comment img={Pro2} name='Bruce McKenzie' 
          work='Founder & CEO, Huddle' alt='Bruce Mckenzie'
          title='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' 
        />
        <Comment img={Pro3} name='Iva Boyd' 
          work='Founder & CEO, Huddle' alt='Iva Boyd'
          title='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' 
        />
      </div>
  </div>
}
