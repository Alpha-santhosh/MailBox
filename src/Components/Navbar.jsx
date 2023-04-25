import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GLOBAL_DATA } from '../App'

function Navbar() {
    const [active, setActive] = useState('inbox');
    const data = useContext(GLOBAL_DATA)

    const { inboxD, spanD, trash, setinboxD, setspanD, settrashD } = data;
    return (
        <header>
            <div className="logo">
                MailBox
            </div>
            <nav>
                <ul>
                    <li><Link style={(active === 'inbox') ? { backgroundColor: "white" } : { backgroundColor: 'orange' }} onClick={() => { setActive('inbox') }} to='/inbox'><i class="fa-solid fa-inbox"></i> Inbox <span>{inboxD.length}</span></Link></li>

                    <li><Link style={(active === 'spam') ? { backgroundColor: "white" } : { backgroundColor: 'orange' }} onClick={() => { setActive('spam') }} to='/span'><i class="fa-solid fa-circle-exclamation"></i> Spam <span>{spanD.length}</span></Link></li>

                    <li><Link style={(active === 'trash') ? { backgroundColor: "white" } : { backgroundColor: 'orange' }} onClick={() => { setActive('trash') }} to='/trash'><i class="fa-solid fa-trash"></i> Trash <span>{trash.length}</span></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar