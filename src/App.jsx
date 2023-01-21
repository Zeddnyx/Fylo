import Nav from './page/Nav'
import Home from './page/Home'
import Feature from './page/Feature'
import Team from './page/Team'
import Sign from './page/Sign'
import Footer from './page/Footer'
function App() {

  return (
    <div className='text-white grid gap-10'>
      <Nav />
      <Home />
      <Feature />
      <Team />
      <Sign />
      <Footer />
    </div>
  )
}

export default App
