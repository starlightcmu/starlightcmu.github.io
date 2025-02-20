import React from 'react';
import { Github, Globe, BookOpen, Twitter, Mail, Linkedin } from 'lucide-react';
import teamData from '../data/team.json';

const About = () => {
  const { labMembers } = teamData;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-4">Our Team</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Meet the researchers and students working at the forefront of AI innovation
          at Carnegie Mellon University.
        </p>
      </div>

      {/* PI Section */}
      <div className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={labMembers[0].image}
            alt={labMembers[0].name}
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover ring-4 ring-amber-200"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{labMembers[0].name}</h2>
          <p className="text-lg text-amber-700 mb-4">{labMembers[0].role}</p>
          <p className="text-gray-600 mb-6">{labMembers[0].bio}</p>
          <div className="flex justify-center space-x-4">
            {labMembers[0].links?.google_scholar && (
              <a href={labMembers[0].links.google_scholar} className="text-gray-600 hover:text-amber-600">
                <BookOpen className="w-6 h-6" />
              </a>
            )}
            {labMembers[0].links?.github && (
              <a href={labMembers[0].links.github} className="text-gray-600 hover:text-amber-600">
                <Github className="w-6 h-6" />
              </a>
            )}
            {labMembers[0].links?.website && (
              <a href={labMembers[0].links.website} className="text-gray-600 hover:text-amber-600">
                <Globe className="w-6 h-6" />
              </a>
            )}
            {labMembers[0].links?.twitter && (
              <a href={labMembers[0].links.twitter} className="text-gray-600 hover:text-amber-600">
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {labMembers[0].links?.email && (
              <a href={`mailto:${labMembers[0].links.email}`} className="text-gray-600 hover:text-amber-600">
                <Mail className="w-6 h-6" />
              </a>
            )}
            {labMembers[0].links?.linkedin && (
              <a href={labMembers[0].links.linkedin} className="text-gray-600 hover:text-amber-600">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labMembers.slice(1).map((member, index) => (
          <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 text-center transform transition-all hover:scale-105 hover:shadow-xl">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-2 ring-amber-200"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
            <p className="text-amber-700 mb-3">{member.role}</p>
            <p className="text-gray-600 mb-4">{member.bio}</p>
            <div className="flex justify-center space-x-3">
              {member.links?.google_scholar && (
                <a href={member.links.google_scholar} className="text-gray-600 hover:text-amber-600">
                  <BookOpen className="w-5 h-5" />
                </a>
              )}
              {member.links?.github && (
                <a href={member.links.github} className="text-gray-600 hover:text-amber-600">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {member.links?.website && (
                <a href={member.links.website} className="text-gray-600 hover:text-amber-600">
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {member.links?.email && (
                <a href={`mailto:${member.links.email}`} className="text-gray-600 hover:text-amber-600">
                  <Mail className="w-5 h-5" />
                </a>
              )}
              {member.links?.linkedin && (
                <a href={member.links.linkedin} className="text-gray-600 hover:text-amber-600">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;