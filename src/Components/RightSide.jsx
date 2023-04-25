import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inbox from './sections/Inbox'
import Span from './sections/Span'
import Trash from './sections/Trash'
import View from './sections/View'

function RightSide() {
    return (
        <div className="right_side">
            <div className="search_box">
                <form autoComplete='off'>
                    <input className='search_input' type="text" placeholder='Type here...' />
                </form>
            </div>
            <div className="view_selection">
                <Routes>
                    <Route index path='/inbox' element={<Inbox />} />
                    <Route path='/span' element={<Span />} />
                    <Route path='/trash' element={<Trash />} />
                    <Route path='/view_content/:id' element={<View />} />
                </Routes>
            </div>
        </div>
    )
}

export default RightSide