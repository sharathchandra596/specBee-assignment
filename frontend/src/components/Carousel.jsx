/* eslint-disable react/prop-types */
// Carousel.jsx
import  { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
      >
        ◀
      </button>
      <div className="flex space-x-4 overflow-hidden">
        {data.map((person, index) => (
          <div
            key={index}
            className={`transition-transform duration-500 ${
              index === currentIndex ? 'scale-105' : 'opacity-50'
            }`}
          >
            <Card person={person} onClick={handleCardClick} />
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
      >
        ▶
      </button>

      {/* Modal */}
      <Modal person={selectedPerson} onClose={handleCloseModal} />
    </div>
  );
};

export default Carousel;
