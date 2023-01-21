// by Zedd
//
import { Link } from 'react-scroll'
import Fylo from '../asset/images/logo.svg'

export default function Nav() { 
  const Li = props => { 
    return <li className='text-gray-600 hover:text-white cursor-pointer'> <Link to={props.name} smooth={true} duration={800} > {props.li} </Link> </li>
  } 
  return <nav className='nav-parent'> 
    <div className='nav'> 
      <div className='nav-logo cursor-pointer'>
        <Link to='home' smooth={true} duration={800}><img src={Fylo} alt="fylo" /></Link>
      </div>

      <ul className='nav-list'>
        <Li name='feature' li='Feature' />
        <Li name='team' li='Team' />
        <Li name='sign' li='Sign In' />
      </ul>
    </div> 
  </nav>
}
