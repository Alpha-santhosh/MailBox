import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GLOBAL_DATA } from '../../App';

function View() {
  const data = useContext(GLOBAL_DATA)
  const { inboxD, spanD, trash, setinboxD, setspanD, settrashD } = data;

  const tempdata = useMemo(() => {
    return [...inboxD];
  }, [inboxD])

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
      <div className="heading">View_Content_Mail</div>
      <h2>{email?.subject}-<span>{email.email}</span></h2>
      <br />
      <p>{email.content}</p>
    </div>
  )
}

export default View