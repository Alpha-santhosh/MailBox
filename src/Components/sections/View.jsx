import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Data } from '../../Data';

function View() {
  const tempdata = Data;

  const [email, setemail] = useState({});
  const { id } = useParams();
  const par = Number(id);

  useEffect(() => {
    const result = tempdata.find((e) => {
      return e.id === par;
    })
    setemail(result);
  }, [par, tempdata])

  return (
    <div className='inbox_container'>
      <div className="heading">View Content of Mail</div>
      <div className="btns">
        <button type='button'>Delete</button>
        <button type='button'>Spam</button>
      </div>
      <div className="view_layout">
        <h2>{email?.subject}-</h2>
        <span>Mail Id : {email.email}</span>
        <br />
        <br />
        <p>Content : {email.content}</p>
      </div>
    </div>
  )
}

export default View