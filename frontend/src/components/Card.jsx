/* eslint-disable react/prop-types */


const Card = ({ person, onClick }) => {
  return (
    <div
      className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-200 cursor-pointer"
      onClick={() => onClick(person)}
    >
      <div className="w-24 h-24 mb-4">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold">{person.name}</h3>
      <p className="text-sm text-gray-500">{person.title}</p>
      <p className="text-sm text-gray-400">{person.company}</p>
    </div>
  );
};

export default Card;
