import React from 'react';
import { FileText, Code, ExternalLink } from 'lucide-react';
import publicationsData from '../data/publications.json';

const Publications = () => {
  const { publications } = publicationsData;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-4">Publications</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Our research contributions in LLM evaluation, RAG systems, and AI ethics.
        </p>
      </div>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold text-amber-900 mb-2">{pub.title}</h2>
            <p className="text-gray-600 mb-3">{pub.authors.join(', ')}</p>
            <p className="text-amber-700 mb-4">
              {pub.venue} {pub.year}
            </p>
            <p className="text-gray-600 mb-4">{pub.abstract}</p>
            <div className="flex space-x-4">
              {pub.pdf && (
                <a
                  href={pub.pdf}
                  className="inline-flex items-center text-amber-600 hover:text-amber-800"
                >
                  <FileText className="w-4 h-4 mr-1" />
                  PDF
                </a>
              )}
              {pub.code && (
                <a
                  href={pub.code}
                  className="inline-flex items-center text-amber-600 hover:text-amber-800"
                >
                  <Code className="w-4 h-4 mr-1" />
                  Code
                </a>
              )}
              {pub.demo && (
                <a
                  href={pub.demo}
                  className="inline-flex items-center text-amber-600 hover:text-amber-800"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;