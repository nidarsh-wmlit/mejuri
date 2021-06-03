import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Demo from './components/Demo'
import Link from 'next/link'

export default function Home() {
  return (
    <>
   <Demo/>
   <div className="image">
      <img src = "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1622484375/homepage/hero/June%202021/SpringCampaign_HomepageHero_Desktop-Left_4" width="50%" height="50%"></img>
     <img src="https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_1200/v1622470820/homepage/hero/June%202021/SpringCampaign_HomepageHero_Desktop-Right_3" width="50%" height="50%"></img>
     
      <div class="caption-center">FINE JEWELLERY <br/>FOR EVERY DAY</div>
      
      <div className="shop-all-button">SHOP ALL</div>
      </div>
      {/* <div className="header" style={{fontFamily: 'Cantarell', sans-serif }}> */}
      <div className="header-shop">
        <h2>Shop Fine Jewelry For Every Day</h2>
        </div>  
        <div className="grid-shop-all">
          
          <Link href='/'><u>SHOP ALL</u></Link>
        </div>
      <div>
      <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p>
      <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p>
     <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p>
     <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p>
      <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p>
     <p>The font-weight property in CSS is used to set the weight or thickness of the font. It specifies how thin or thick the characters in a text. The font-weight property is either dependent on the weights specified by the browser or the available font faces in a font family. This CSS property defines thin to thick characters.</p> </div>
      </>
  )
}
