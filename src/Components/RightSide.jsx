import React, { useContext, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Inbox from './sections/Inbox'
import Span from './sections/Span'
import Trash from './sections/Trash'
import View from './sections/View'
import SearchView from './SearchView'
import { GLOBAL_DATA } from '../App'

function RightSide() {
    const data = useContext(GLOBAL_DATA)
    const { inboxD, spanD, trash, key, setinboxD, setspanD, settrashD, setKey } = data;

    const inputRef = useRef('');

    const navigate = useNavigate();
    const handleSearch = () => {
        console.log(inputRef.current.value);
        navigate('/inbox/search');
        setKey(inputRef.current.value);
        inputRef.current.value = ''
    }

    return (
        <div className="right_side">
            <div className="search_box">
                <form autoComplete='off'>
                    <input ref={inputRef} className='search_input' type="text" placeholder='Search here by Subject...' />
                    <button type='button' onClick={() => { handleSearch() }}> <i class="fa-solid fa-magnifying-glass"></i> </button>
                </form>
            </div>
            <div className="view_selection">
                <Routes>
                    <Route index path='/inbox' element={<Inbox />} />
                    <Route path='/span' element={<Span />} />
                    <Route path='/trash' element={<Trash />} />
                    <Route path='/inbox/search' element={<SearchView />} />
                    <Route path='/view_content/:id' element={<View />} />
                </Routes>
            </div>
        </div>
    )
}

export default RightSide