import Link from 'next/link'
import navStyles from '../../styles/Nav.module.css'
import { FiSearch } from "react-icons/fi";
import { VscLock } from "react-icons/vsc";


const Nav = () => {
  return (
    <div>
    <nav className={navStyles.nav}>
      <div>
        
      </div>
      <ul>
        <li className={navStyles.nav} >
          <Link href='/'>SHOP</Link>
        </li>
        <li className={navStyles.nav}>
          <Link href='/'>GIFT GUIDES</Link>
        </li>
        <li className={navStyles.nav}>
          <Link href='/about'>STYLE EDIT</Link>
        </li>
        <li className={navStyles.nav}>
          <Link href='/'>ABOUT</Link>
        </li>
        <li>
        <div className="logoss" style={{fontSize:"2.9rem",fontWeight:"900px", textAlign:"center",letterSpacing:"2px",lineHeight:"1.5"}}>
          <a href="/">MEJURI</a>
            </div>

        </li>
        <li className={navStyles.nav} style={{cursor:"pointer"}}><FiSearch/>SEARCH</li>
        <li>
          <Link href='/'>STORES</Link>
        </li>
        <li className={navStyles.nav}><button type="submit" >SIGNIN</button></li>  
                  <li className={navStyles.nav}><VscLock/></li>
      </ul>
     
    
          
            </nav>
            </div>



            )
}

export default Nav
