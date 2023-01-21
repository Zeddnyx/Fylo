import Hero from   '../asset/images/illustration-intro.png'
import CurvyM from '../asset/images/bg-curvy-mobile.svg'
import CurvyD from '../asset/images/bg-curvy-desktop.svg'

export default function Home() {
  return <div name='home' className='w-full z-30 relative -my-10 bg-intro'>
    <div className=' h-[500px] lg:h-[1000px] grid place-items-center gap-10 mx-auto '>
      <div className='z-20 w-[400px] px-10 mt-40 lg:mt-[100px] lg:w-[600px]'>
        <img src={Hero} alt="intro" />
      </div>

      <div className='lg:hidden z-10 -my-12 w-[380px] ml-10'>
        <img className='w-full' src={CurvyM} />
      </div>

      <div className='z-20 text-center lg:-mt-20 -my-20 px-10 grid gap-5'>
        <h2 className='text-3xl font-extrabold lg:px-56'>All your files in one secure location, accessible anywhere.</h2>
        <p className='px-8 lg:px-80'>Fylo stores all your most importan files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <button className='button-started w-[250px] h-[50px] rounded-full mx-auto my-2 font-bold text-sm' type="button">Get Started</button>
      </div>

      <div className='hidden lg:grid place-items-center z-10 -my-12 w-[880px] ml-10'>
        <img className='w-full' src={CurvyD} />
      </div>
    </div>
  </div>
}
