import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/' >
            <a> <img src='/logoMaruvas.png' alt='Maruvas' /> </a>
          </Link>
          <div className={styles.titulo}> Maruva's Batata Gourmet </div>
        </div>
      </div>
      <div className='bg-neutral-900 p-3 shadow-md text-center'>
        <Link href='/sobre' >
          <a className='px-2 hover:underline text-white'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline text-white'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline text-white'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>

  )
}
export default Header