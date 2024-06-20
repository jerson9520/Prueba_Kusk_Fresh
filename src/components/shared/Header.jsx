import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [selected, setSelected] = useState('Home');

  return (
    <div className="border-b-2 border-gray-300 mb-5">
      <div className="flex justify-between p-4 flex-col lg:flex lg:justify-between lg:items-center lg:flex-row">
        <div>
          <h1 className="text-xl flex justify-center lg:text-2xl lg:ml-28">KUKS FRESH</h1>
        </div>
        <div className="flex items-center justify-center pt-4 gap-4 lg:flex lg:space-x-8">
          <Link
            to="/"
            className={`text-lg py-2 ${selected === 'Home' ? 'border-b-4 border-primary' : ''}`}
            onClick={() => setSelected('Home')}
          >
            Home
          </Link>
          <Link
            to="/#recipes"
            className={`text-lg py-2 ${selected === 'Nosotros' ? 'border-b-4 border-primary' : ''}`}
            onClick={() => setSelected('Nosotros')}
          >
            Nosotros
          </Link>
          <Link
            to="/"
            className={`text-lg py-2 ${selected === 'Video' ? 'border-b-4 border-primary' : ''}`}
            onClick={() => setSelected('Video')}
          >
            Video
          </Link>
        </div>
        
        <div>
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="rounded-full lg:w-10 lg:h-10"
          />
        </div>
      </div>
    </div>
  );
};
