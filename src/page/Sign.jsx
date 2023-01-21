export default function Sign() {
  return <div name='sign' className='mt-40 z-30 bg-testi w-[400px] lg:w-[800px] mx-auto rounded-md py-10 shadow-xl'>
    <div className='grid grid-cols-1 items-center px-10 lg:px-20 gap-10'>
      <div className='text-center grid gap-5 lg:px-5'>
        <h3 className='font-bold text-xl'>Get early access today</h3>
        <p className='text-sm'>it only takes a minute to sign and our free starter tier is extremly generous. If you have any questions. our supporter team would be happy to help you.</p>
      </div>
     
      <form className='grid lg:grid-cols-2 place-items-center gap-5'>
        <input className='bg-white  rounded-full px-5 lg:px-10 py-4 outline-none' type="email" placeholder='email@example.com' />
        <button className='rounded-full px-20 lg:px-10 py-4 button-started text-sm font-bold' type="submit">Get Started For Free</button>
      </form>
    </div>
  </div>
}
