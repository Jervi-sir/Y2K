import LogoAsset from './assets/LogoAsset'

export const TopNav = () => {
  return (
    <nav className='h-[7vh] font-mono flex justify-between items-center gap-8 bg-[#E7DED5] border-2 border-black'>
      {/* Left */}
      <div className='flex justify-between items-center gap-8 '>
        {/* logo */}
        <div className='border-r-2 border-black px-5'>
          <LogoAsset size={80} />
        </div>
        {/* Windows */}
        <div className='flex justify-between items-center gap-8'>
          <div>
            <span>Men</span>
          </div>
          <div>
            <span>Women</span>
          </div>
          <div>
            <span>About Us</span>
          </div>
          <div>
            <span>3D Car</span>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='flex justify-between items-center' style={{ height: 80 / 2}}>
        <div className='flex items-center px-6 border-l-2 border-black' style={{ height: 80 / 2}}>
          <span>Cart</span>
        </div>
        <div className='flex items-center px-6 border-l-2  border-black' style={{ height: 80 / 2}}>
          <span>Sing in</span>
        </div>
        <div className='flex items-center px-6 border-l-2  border-black' style={{ height: 80 / 2}}>
          <span>07:00 AM - Thu 18 Apr 2024</span>
        </div>
      </div>
    </nav>
  )
}