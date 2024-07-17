import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
            <img className='w-[70px] rounded-full ' src='https://imgproxy.epicpxls.com/xTa1al8CTjsgjNrV2EBRRhOCOdqD2WH6O985A920uzQ/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by83MWIxMTYw/NjNlN2ZjOGJiODdi/ZGJjYjJkN2VhZGQ4/Mw.jpg' alt='logo'/>
            </div>
            <nav className="hidden md:flex space-x-6">
                <div className="hover:text-gray-400"> <Link to="/">Home</Link></div>
                <div className="hover:text-gray-400"><Link to="/add">Add Todo</Link></div>
                <div className="hover:text-gray-400"><Link to="/">All Todo</Link></div>
                <div className="hover:text-gray-400">Contact</div>
            </nav>
           
        </div>
    </header>
    </div>
  )
}

export default Header;