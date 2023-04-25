import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [active, setActive] = useState('inbox');

    return (
        <header>
            <div className="logo">
                MailBox
            </div>
            <nav>
                <ul>
                    <li><Link style={(active === 'inbox')?{backgroundColor:"white"}:{backgroundColor:'orange'}} onClick={()=>{setActive('inbox')}} to='/inbox'><i class="fa-solid fa-inbox"></i> Inbox</Link></li>

                    <li><Link style={(active === 'spam')?{backgroundColor:"white"}:{backgroundColor:'orange'}} onClick={()=>{setActive('spam')}} to='/span'><i class="fa-solid fa-circle-exclamation"></i> Spam</Link></li>
                    
                    <li><Link style={(active === 'trash')?{backgroundColor:"white"}:{backgroundColor:'orange'}} onClick={()=>{setActive('trash')}} to='/trash'><i class="fa-solid fa-trash"></i> Trash</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar