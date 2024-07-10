import owbLogo from '../assets/owb/logo-no-background.svg'
import owbGlobe from '../assets/owb/logo-globe-color.svg'
import assocLogo from '../assets/assoc_logo.jpg'
import NavBar from './NavBar'

function Header() {

    return (
        <header>
            <div className='flex items-start justify-between w-full sm:items-center'>
    
                <div className='flex justify-center w-1/3 sm:hidden'><img src={owbGlobe} loading="lazy" alt="Oran Web Brains Logo" className="flex justify-center w-1/2" /></div>
    
                <div className='flex justify-center w-1/3 max-sm:hidden'><img src={owbLogo} loading="lazy" alt="Oran Web Brains Logo" className="w-1/2 " /></div>
    
                <div className='flex flex-col justify-center sm:text-3xl'>
                    <h1 className='text-[#04ffff] font-Press_Start_2P'>HACKATH<span className='text-[#00b8fd] '>ORAN</span></h1>
                    <h2 className='date 
                    invisible
                    text-center font-extrabold tracking-widest font-["Vibur"]'>March 9 مارس</h2>
                </div>
    
                <div className='flex justify-center w-1/3'><img className='w-1/2 rounded-full sm:w-1/5' src={assocLogo} alt="Logo Assoc. Khatawat Moustakbal" /></div>
    
            </div>
            <NavBar/>
        </header>
    )
}

export default Header