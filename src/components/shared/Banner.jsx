import { RiAppleFill } from 'react-icons/ri';
import bannerImage from '../../assets/banner2.jpeg';
import { BiLogoPlayStore } from 'react-icons/bi';

export const Banner = () => {
  return (
    <div className="relative w-full flex items-center justify-center lg:mt-60 lg:absolute">
      <div className="relative bg-cover bg-center h-56 rounded-3xl lg:h-[300px] lg:w-[900px]" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-start px-10 lg:px-20 lg:rounded-2xl">
          <h1 className="text-white lg:text-4xl mb-4">
            Encuentra Las Mejores <br />
            Recetas Para Ti Y <br />
            Tu Familia
          </h1>
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center">
              <RiAppleFill className="mr-2" />
              Apple
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg flex items-center">
              <BiLogoPlayStore className="mr-2" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

  
