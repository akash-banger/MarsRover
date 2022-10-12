import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom bg-dark text-white text-center apniCss'>
        <button className="btn btn-danger col-2" onClick={props.Reset}>Reset</button>
        <div className="col-8">{props.totalAmount}</div>
        <button className='btn btn-success col-2'>Pay</button>
    </div>
  )
}
