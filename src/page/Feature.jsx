import Acces from '../asset/images/icon-access-anywhere.svg'
import Secure from '../asset/images/icon-security.svg'
import File from '../asset/images/icon-any-file.svg'
import Collab from '../asset/images/icon-collaboration.svg'

export default function Feature() {

  const Feat = props => {
    return <div className='mx-auto flex flex-col justify-center items-center text-center gap-10'>
      <div>
        <img src={props.img} alt={props.alt} />
      </div>

      <div className='flex flex-col gap-3 sm:px-20 lg:px-10'>
        <h4 className='font-bold text-lg'>{props.title}</h4>
        <p>{props.lorem}</p>
      </div>
    </div>
  }

  return <div name='feature' className='mt-[450px] lg:mt-[200px] px-10'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-36'>
      <Feat
        img={Acces} alt='Acces Anywhere' 
        title='Acces your files, anywhere'
        lorem='The abillity to use a smartphone, table, or computer to access your account means your files follow you everywhere.'
      />
      <Feat
        img={Secure} alt='Security' 
        title='Security you can trust'
        lorem='2-factor authtentication and user controled encryption are just a couple of the security features we allow to help secure your files.'
       />
      <Feat
        img={Collab} alt='Collaboration' 
        title='Real-time ollaboration'
        lorem='Securely shares files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
      />
      <Feat
        img={File} alt='file' 
        title='Store any type of file'
        lorem="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
      />
    </div>
  </div>
}
