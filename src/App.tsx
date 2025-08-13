import React from 'react';
import { ArrowUpRight, Users, TrendingUp, Calendar, Clock, MapPin } from 'lucide-react';

interface JobRole {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  deadline: string;
  applicants: number;
  formUrl: string;
}

const jobRoles: JobRole[] = [
  {
    id: '1',
    title: 'Research Analyst',
    department: 'Research',
    type: 'Full-time',
    location: 'Remote',
    deadline: '15 AUG',
    applicants: 24,
    formUrl: 'https://tally.so/r/3qvNRY'
  },
  {
    id: '2',
    title: 'Content Writer',
    department: 'Media',
    type: 'Part-time',
    location: 'Remote',
    deadline: '18 AUG',
    applicants: 31,
    formUrl: 'https://tally.so/r/3qvNRY'
  },
  {
    id: '3',
    title: 'Frontend/Backend Developer',
    department: 'Tech',
    type: 'Night-Shift',
    location: 'Remote',
    deadline: '22 AUG',
    applicants: 18,
    formUrl: 'https://tally.so/r/3qvNRY'
  },
  {
    id: '4',
    title: 'Social Media Manager',
    department: 'Media',
    type: 'Part-Time',
    location: 'Remote',
    deadline: '25 AUG',
    applicants: 42,
    formUrl: 'https://tally.so/r/3qvNRY'
  },
  {
    id: '5',
    title: 'HR Intern',
    department: 'Human Resource',
    type: 'Part-time',
    location: 'Remote',
    deadline: '28 AUG',
    applicants: 15,
    formUrl: 'https://tally.so/r/3qvNRY'
  },
  {
    id: '6',
    title: 'FinTIES Application',
    department: 'FinTech',
    type: 'Part-time',
    location: 'Remote',
    deadline: '30 AUG',
    applicants: 5,
    formUrl: 'https://tally.so/r/w5AoMo'
  }
];

function App() {
  const handleRoleClick = (formUrl: string) => {
    window.open(formUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Column - Main Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    NOW HIRING FOR 2025
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Shape the future{' '}
                    <span className="relative">
                      <TrendingUp className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500 mb-2" />
                    </span>{' '}
                    with TIES India
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md">
                    Join India's leading youth-led organization driving innovation in research, media, and technology. Build your career while making a meaningful impact.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.open('https://www.instagram.com/ties.in/', '_blank')}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    View All Positions
                  </button>
                  <button 
                    onClick={() => window.open('https://tiesverse.com/', '_blank')}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <span>Learn about TIES</span>
                  </button>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-600 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-white"></div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 border-2 border-white flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">+560</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="flex text-yellow-400 space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <span>Loved by candidates from India's best colleges</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Job Roles */}
            <div className="bg-gray-50 p-6 sm:p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Open Positions</h3>
                  <p className="text-gray-600">Click on any role to apply via our Application Form</p>
                </div>

                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {jobRoles.map((role, index) => (
                    <div
                      key={role.id}
                      onClick={() => handleRoleClick(role.formUrl)}
                      className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-200 hover:border-blue-200"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                              {role.deadline}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {role.type}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {role.title}
                          </h4>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{role.department}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{role.location}</span>
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors ml-3 flex-shrink-0" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{role.applicants} applicants</span>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Don't see your role?</h4>
                        <p className="text-sm text-gray-600">Reach out to us at hello@tiesverse.com od DM on LinkedIn or Instagram, We're always looking for talented individuals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            © 2025 TIES India. Built with ❤ by Tech Team at TIES.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;