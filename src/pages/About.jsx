import React from 'react';
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVite, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { HiSparkles, HiPuzzle } from 'react-icons/hi';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Springfield Chronicles</h1>
        <p className="text-xl text-gray-600">A passionate project by <strong>BoliDev</strong> to explore The Simpsons API</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg border-4 border-yellow-400 p-8 shadow-lg">
          <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
            About This Project
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Springfield Chronicles is a full-featured web application crafted by <strong>BoliDev</strong> to demonstrate modern React development practices. It consumes The Simpsons public API to display comprehensive information about characters, episodes, and locations from the beloved animated series.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project showcases best practices in API integration, state management, responsive design, and user experience optimization. Every component has been carefully crafted to provide a professional, intuitive interface.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is more than just a portfolio piece—it's a testament to the power of combining creativity with clean, efficient code.
          </p>
        </div>

        <div className="bg-white rounded-lg border-4 border-blue-400 p-8 shadow-lg">
          <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
            BoliDev's Learning Journey
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Purpose:</strong> This project serves as a practical demonstration of API consumption, real-time data handling, and building scalable React applications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>What I'm Learning:</strong>
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>Advanced React patterns and hooks optimization</li>
            <li>RESTful API integration and data management</li>
            <li>Responsive design and mobile-first development</li>
            <li>Performance optimization and lazy loading</li>
            <li>Building professional user interfaces</li>
            <li>I improve my skills daily</li>
          </ul>
        </div>
      </div>

      {/* Tecnologías */}
      <div className="bg-white rounded-lg border-4 border-purple-400 p-8 shadow-lg mb-16">
        <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-2">
        Technologies Used
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* React */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-300 text-center hover:shadow-lg transition-shadow">
            <FaReact className="text-4xl mx-auto mb-2 text-blue-500" />
            <h3 className="font-bold text-gray-900 mb-2">React</h3>
            <p className="text-sm text-gray-600">UI library with hooks and modern patterns</p>
          </div>

          {/* Vite */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300 text-center hover:shadow-lg transition-shadow">
            <SiVite className="text-4xl mx-auto mb-2 text-purple-500" />
            <h3 className="font-bold text-gray-900 mb-2">Vite</h3>
            <p className="text-sm text-gray-600">Next generation build tool</p>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-300 text-center hover:shadow-lg transition-shadow">
            <SiTailwindcss className="text-4xl mx-auto mb-2 text-cyan-500" />
            <h3 className="font-bold text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600">Utility-first CSS framework</p>
          </div>

          {/* API */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg border-2 border-yellow-300 text-center hover:shadow-lg transition-shadow">
            <HiPuzzle className="text-4xl mx-auto mb-2 text-yellow-500" />
            <h3 className="font-bold text-gray-900 mb-2">The Simpsons API</h3>
            <p className="text-sm text-gray-600">Public RESTful API data source</p>
          </div>

          {/* JavaScript ES6+ */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg border-2 border-yellow-300 text-center hover:shadow-lg transition-shadow">
            <SiJavascript className="text-4xl mx-auto mb-2 text-amber-500" />
            <h3 className="font-bold text-gray-900 mb-2">JavaScript ES6+</h3>
            <p className="text-sm text-gray-600">Modern JavaScript features</p>
          </div>

          {/* Responsive Design */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-300 text-center hover:shadow-lg transition-shadow">
            <HiSparkles className="text-4xl mx-auto mb-2 text-green-500" />
            <h3 className="font-bold text-gray-900 mb-2">Responsive</h3>
            <p className="text-sm text-gray-600">Mobile-first design approach</p>
          </div>

          {/* Performance */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-300 text-center hover:shadow-lg transition-shadow">
            <HiSparkles className="text-4xl mx-auto mb-2 text-orange-500" />
            <h3 className="font-bold text-gray-900 mb-2">Performance</h3>
            <p className="text-sm text-gray-600">Optimized with lazy loading</p>
          </div>

          {/* Git */}
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-lg border-2 border-gray-300 text-center hover:shadow-lg transition-shadow">
            <FaGithub className="text-4xl mx-auto mb-2 text-gray-700" />
            <h3 className="font-bold text-gray-900 mb-2">Git</h3>
            <p className="text-sm text-gray-600">Version control & collaboration</p>
          </div>
        </div>
      </div>

        <div className="bg-gradient-to-r from-sky-300 to-sky-100 rounded-lg border-4 border-gray-900 p-12 text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center justify-center gap-2">
            Connect with BoliDev
          </h2>
          <p className="text-gray-900 mb-8 text-lg font-semibold">
            Always excited to collaborate, learn, and grow, feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => window.open("https://github.com/BolivarJ", "_blank")}
              className="bg-gray-900 hover:bg-gray-800 text-white cursor-pointer font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FaGithub className="text-xl" />
              GitHub
            </button>
            <button 
              onClick={() => window.open("https://www.linkedin.com/in/jhorman-bolívar-cañaveral-1578a4277/", "_blank")}
              className="bg-blue-700 hover:bg-blue-600 text-white cursor-pointer font-semibold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </button>
          </div>
        </div>

      <div className="bg-white rounded-lg border-4 border-green-400 p-8 shadow-lg">
        <h2 className="text-3xl font-black text-gray-900 mb-4 flex items-center gap-2">
          API Information
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This project utilizes <strong>The Simpsons API</strong>, a free, publicly available RESTful API that provides comprehensive data about The Simpsons universe.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The API includes detailed information about:
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-gray-900 mb-2">Characters</p>
            <p className="text-sm text-gray-600">Detailed profiles with bios, appearances, and relationships</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
            <p className="font-bold text-gray-900 mb-2">Episodes</p>
            <p className="text-sm text-gray-600">Complete episode listings with synopses and air dates</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-gray-900 mb-2">Locations</p>
            <p className="text-sm text-gray-600">All iconic places from Springfield and beyond</p>
          </div>
        </div>
        <p className="text-gray-700 text-sm italic">
          API Endpoint: <code className="bg-gray-100 px-2 py-1 rounded">https://thesimpsonsapi.com/api</code>
        </p>
      </div>
    </div>
  );
};

export default About;
