import React from 'react'
import Link from 'next/link'
import { FiSearch } from "react-icons/fi";
import { VscLock } from "react-icons/vsc";
// import Cart from '../icons/Cart'

export default function Demo() {
    return (
        <div style={{width:"100%", backgroundColor:"#f4f4f4",height:"60px",position:"fixed", zIndex:"1000"}}>
            <div className="nav-bar" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", padding:"0px 2%", position:"fixed", zIndex:"10"}}>
                <div className="nav-left" >
                    <ul style={{listStyle:"none",display:"flex", flexDirection:"row", justifyContent:"space-between",padding:"0px"}}>
                        <li className="nav-link"> <Link  href='/'><span className="nav-link-text">SHOP</span></Link></li>
                        <li className="nav-link"> <Link  href='/'><span className="nav-link-text">GIFT GUIDES</span></Link></li>
                        <li className="nav-link"> <Link  href='/about'><span className="nav-link-text">STYLE EDIT</span></Link></li>
                        <li className="nav-link"> <Link  href='/'><span className="nav-link-text"> ABOUT</span></Link></li>
                    </ul>
                </div>

                <div className="nav-title"  >   
                    <a  href="/"><svg class="styled__MejuriLogo-sc-16722op-0 kiWGXF" xmlns="http://www.w3.org/2000/svg" width="281.538" height="60.308" viewBox="0 0 281.538 92.308"><path d="M109.446 33.947v-4.602H87.983l.003 32.588h21.46v-4.546H92.852V48.04h14.202v-4.391H92.852v-9.702zM246.995 29.068V62.46h4.871V29.068h.25-5.37z"></path><g><path d="M184.359 29.409H179.5v19.232c0 5.436-3.628 9.232-8.823 9.232-5.134 0-8.72-3.838-8.72-9.333V29.41h-4.858v19.488c0 7.741 5.837 13.578 13.578 13.578 7.799 0 13.681-5.837 13.681-13.578V29.409zM222.103 61.965h5.863l-7.702-12.982.271-.109c4.769-1.919 7.395-5.285 7.395-9.478 0-5.694-4.675-9.987-10.874-9.987h-13.268v32.556h4.756v-12.65h6.773l6.786 12.65zm-13.457-28.107h8.001c3.691 0 6.475 2.425 6.475 5.641 0 3.891-3.257 5.927-6.475 5.927h-8.001V33.858z"></path></g><path d="M64.477 50.775v4.135c0 7.261 2.267 11.021 7.345 12.166l1.154-1.733c-3.12-1.581-3.58-5.203-3.587-8.913l-.003-.094-.07-26.957H65.71L49.986 53.17 34.903 29.377h-4.284v32.615h4.687l-.036-22.495L48.987 59.75h1.733l13.763-20.249v11.281l-.006-.007zM121.541 58.306c1.119 1.332 3.897 4.042 7.963 4.042 6.231 0 10.257-4.309 10.257-10.977V29.347h-4.83v22.079c0 4.633-2.726 6.707-5.427 6.707-1.926 0-4.25-1.812-5.22-2.817l-.449.438L122 57.743l-.459.563z"></path></svg></a>
                </div>

                <div className="nav-right" >
                    <ul style={{listStyle:"none",display:"flex", flexDirection:"row", justifyContent:"space-between",padding:"0px",alignItems:"center",position:"relative"}}>
                        <li className="nav-link" style={{cursor:"pointer"}}><span className="search"><FiSearch/> </span><span className="nav-link-text">SEARCH </span></li>
                        <li className="nav-link"><Link href='/'><span className="nav-link-text">STORES</span></Link></li>
                        <li className="nav-link"><Link href='/' ><span className="nav-link-text">SIGNIN</span></Link></li>
                        {/* <li className="nav-link"><Cart/></li> */}
                        <li className="nav-link"><span className="nav-link-text"><VscLock/></span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
