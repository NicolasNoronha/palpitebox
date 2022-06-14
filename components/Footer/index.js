import React from 'react'


const Footer = () => {
  return (
    <div className='bg-gray-300 p-1'>
      <div className='container mx-auto text-center font-bold'>
        Projeto desenvolvido por:
        <a className='hover:underline' href='http://nicolascv.surge.sh/' > Nicolas Noronha</a> / {' '}
        <a className='hover:underline' href=''> Facebook</a> / {' '}
        <a className='hover:underline' href='' >Instagram</a>
        <div className='mt-1'></div>
        <img className='inline p-4' src='/logo_pe.png' />
      </div>

    </div>


  )
}
export default Footer