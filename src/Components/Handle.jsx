import React from 'react'
import { Link } from 'react-router-dom'
import Deposite from './DepositePAge/Deposite'

function Handle({Doc, Method1}) {
  return (
    <div className=' bg-light vh-100 d-flex flex-column  overflow-auto'>
          <div className='text-light col-md-12 p-3 d-flex gap-5 h-auto' style={{backgroundColor:'#8a4e00'}}>

            {/* Deposite button */}
           
                <Link to='/deposite/page' className='d-flex rounded gap-2 text-light text-decoration-none justify-content-center align-items-center' style={{backgroundColor:'green',width:'200px',height:'6vh'}}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/2721/2721122.png" alt="" />
                    <span>DEPOSITE</span>
                </Link>

             {/* withdrawal button */}
             <Link to='/withdrawal/page' className='d-flex rounded gap-2 text-light text-decoration-none justify-content-center align-items-center' style={{backgroundColor:'#8b0808',width:'200px',height:'6vh'}}>
                <img width='30px' src="https://cdn-icons-png.flaticon.com/128/9590/9590117.png" alt="" />
                    <span>Withdrawal</span>
                </Link>
          </div>

          {Doc ? <Doc Method1={Method1}/> : <h1 className='text-light text-center'>.......</h1>}
    </div>
  )
}

export default Handle