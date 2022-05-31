import '../styles/globals.css'
import './app.css'
import Link from 'next/link'

function MyNFT({Component, pageProps}) {
  return (
    <div >
      <nav className='  border-b ' style={{backgroundColor:'black'}}>
       <p className=' text-4xl font-bold text-white'>NFT Display</p>
       <p className=' text-1xl  text-white'>Maketplace for our NFT</p>

        <div className='flex mt-4 justify-center'>
          <Link href='/'>
            <a className='mr-4'>
              Shop
            </a>
          </Link>
          <Link href='/mint-item'>
            <a className='mr-6'>
              Mint Tokens
            </a>
          </Link>
          <Link href='/my-nfts'>
            <a className='mr-6'>
              My NFTs
            </a>
          </Link>
          <Link href='/account-dashboard'>
            <a className='mr-6'>
              Account Dashboard
            </a>
          </Link>
          <Link href='/about'>
            <a className='mr-6'>
              About

            </a>
          </Link>
          
          
          </div>
          <div>

          
          </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyNFT 