import project1Img from '../assets/Project_1.png';
import project2Img from '../assets/Project_2.png';
import project3Img from '../assets/Project_3.png';

export const projects = [
  {
    id: 'campusmart',
    title: 'CampusMart',
    category: 'Full Stack Web App',
    description: 'A college campus marketplace app for NIT Warangal built on the MERN stack, with college email restricted signup and a seller arbitrated transaction system.',
    image: project1Img,
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'REST API'],
    githubLink: 'https://github.com/saiteja071/CampusMart'
  },
  {
    id: 'convoai',
    title: 'ConvoAI',
    category: 'AI Chat Application',
    description: 'An AI chat application powered by Google Gemini, featuring streaming responses, authenticated messaging, and rate limited API usage.',
    image: project2Img,
    techStack: ['React', 'Google Gemini API', 'Node.js', 'WebSockets'],
    githubLink: 'https://github.com/saiteja071/ConvoAI'
  },
  {
    id: 'bookmyslot',
    title: 'Booking & Ticketing System',
    category: 'DBMS Project',
    description: 'A DBMS focused booking and ticketing system handling seat concurrency safely through row level locking, designed to prevent double booking under load.',
    image: project3Img,
    techStack: ['PostgreSQL', 'Node.js', 'Express', 'Concurrency Control', 'SQL'],
    githubLink: 'https://github.com/saiteja071/BookMySlot'
  }
];
