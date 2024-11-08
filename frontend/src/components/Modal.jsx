/* eslint-disable react/prop-types */


const Modal = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black font-bold text-xl"
        >
          ✖
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center">
          <img
            src={person.image}
            alt={person.name}
            className="w-24 h-24 mb-4 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-sm text-gray-500">{person.title}</p>
          <p className="text-sm text-gray-400">{person.company}</p>
          <p className="mt-4 text-sm text-gray-600">{person.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
