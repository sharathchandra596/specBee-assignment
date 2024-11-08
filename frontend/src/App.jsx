// App.jsx
import React from 'react';
import Carousel from './components/Carousel';
import photo from './assets/Ellipse 24.png';

const data = [
  {
    name: 'John Doe',
    title: 'Chief Marketing Officer',
    company: 'Acme Corp',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Responsible for overseeing the planning and execution of marketing strategies.',
  },
  {
    name: 'sharath',
    title: 'project manager',
    company: 'Acquia',
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: 'Leads the customer engagement initiatives and ensures client satisfaction.',
  },
  {
    name: 'chandra',
    title: 'Chief Technical Developer',
    company: 'Pantheon',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Handles all technical aspects and leads the development team.',
  },
  {
    name: 'kitte',
    title: 'Chief Marketing Officer',
    company: 'Specbee',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Manages the marketing campaigns and brand strategy of the company.',
  },
];

function App() {
  return (
    <>
    <div className='text-center mt-8'>
    <h1 className='text-3xl'>View our Featured Speakers for the Event</h1>
    <p>Speakers are core contributors and industry thought leaders working at companies that push for innovation.</p>
    </div>
    <div className="min-h-screen flex items-center justify-center ">
      <Carousel data={data} />
    </div>
    </>
  );
}

export default App;
