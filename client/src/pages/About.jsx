import React from 'react';
import missionImage from '../assets/mission.png'; 
import visionImage from '../assets/vision.png'; 
import valuesImage from '../assets/values.jpg'; 

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">About Dream-Weaver</h2>
        <p className="text-lg md:text-md text-center max-w-3xl mx-auto mb-12">
          At Dream-Weaver, we believe that dreams hold the keys to understanding our deepest thoughts, fears, and aspirations. Our mission is to help you decode and interpret your dreams, unlocking the secrets of your subconscious mind.
        </p>
        <div className="flex flex-wrap justify-center items-start">
          <div className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center">
            <img src={missionImage} alt="Our Mission" className="rounded-lg shadow-md w-full h-48 object-contain"/>
            <h3 className="text-xl font-bold mt-4 mb-2 text-center">Our Mission</h3>
            <p className="text-center flex-grow">
              Our mission is to provide a comprehensive and insightful dream interpretation experience, offering a wealth of knowledge and tools to help you understand and explore your dreams.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center">
            <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-md w-full h-48 object-contain"/>
            <h3 className="text-xl font-bold mt-4 mb-2 text-center">Our Vision</h3>
            <p className="text-center flex-grow">
              We envision a world where dreams are recognized as valuable insights into our inner selves, guiding us towards greater self-awareness and personal growth.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 flex flex-col items-center">
            <img src={valuesImage} alt="Our Values" className="rounded-lg shadow-md w-full h-48 object-contain"/>
            <h3 className="text-xl font-bold mt-4 mb-2 text-center">Our Values</h3>
            <p className="text-center flex-grow">
              We value curiosity, intuition, and empathy, striving to create a platform that is informative, accessible, and supportive of your journey to understanding your dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
