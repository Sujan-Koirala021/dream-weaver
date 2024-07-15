import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from '../assets/hero.png';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 ">
            <div className="w-full md:w-1/2 md:pr-8 lg:pr-16 flex-shrink-0 flex flex-col justify-center mb-8 md:mb-0">
                <div className="max-w-lg mx-auto md:mx-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-300 leading-tight mb-4 md:mb-6">
                        <div className='pb-3'>
                        Dream Weaver<br />
                        </div>
                        Unveil Your Dreams
                    </h1>
                    <p className="text-lg md:text-xl text-green-200 mb-6 md:mb-8">
                        Decode the secrets of your subconscious
                    </p>
                    <div className="pt-4 md:pt-6 lg:pt-8">
                        <Link to= "/interpret">
                        <button onClick={goToLogin} className="button text-white py-3 px-6 rounded-lg text-base hover:bg-pink-600 transition-colors duration-300">
                            Get Started
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={HeroImg}
                    alt="Dream Interpretation"
                    className="w-full max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover rounded-lg"
                />
            </div>
        </div>
    );
}