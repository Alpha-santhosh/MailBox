import React, { useContext, useEffect, useState } from 'react'
import { GLOBAL_DATA } from '../../App'
import { Link } from 'react-router-dom';

function Inbox() {
  const data = useContext(GLOBAL_DATA)
  const { inboxD, spanD, trash, setinboxD, setspanD, settrashD } = data;

  const [inboxData, setInboxData] = useState([]);
  useEffect(() => {
    setInboxData(inboxD);
  }, [inboxD])

  const trimString = (string) => {
    if (string.length > 150) {
      return string.substring(0, 120) + "...";
    }
    return string
  }

  const handleDelete = (para) => {
    const odata = [...inboxData]
    const result = odata.filter((e) => {
      return e.id === para
    })
    const resultD = odata.filter((e) => {
      return e.id !== para
    })
    settrashD((preData) => {
      return [...preData, ...result];
    })
    setinboxD(resultD)
  }

  const handleSpam = (para) => {
    const odata = [...inboxData]
    const result = odata.filter((e) => {
      return e.id === para
    })
    const resultD = odata.filter((e) => {
      return e.id !== para
    })
    setspanD((preData) => {
      return [...preData, ...result];
    })
    setinboxD(resultD)
  }

  return (
    <div className='inbox_container'>
      <div className="heading">Inbox</div>
      <div className="btns">
        <button type='button'>Delete</button>
        <button type='button'>Spam</button>
      </div>
      <div className="container">
        {inboxData.map((e) => {
          return <div className="mail_content">
            <input type="checkbox" />
            <Link to={`/view_content/${e.id}`}>
              <h2>{e.subject}</h2>
              <div className='email'>{e.email}</div>
              <p>{trimString(e.content)}</p>
            </Link>
            <button type='button' onClick={() => { handleDelete(e.id) }}>
              <i class="fa-solid fa-trash"></i>
            </button>
            <button type='button' style={{color:"red"}} onClick={() => { handleSpam(e.id) }}>
              <i class="fa-solid fa-circle-exclamation"></i>
            </button>
          </div>
        })}
      </div>
    </div >
  )
}

export default Inbox