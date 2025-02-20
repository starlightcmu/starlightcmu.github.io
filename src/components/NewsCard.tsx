import React from 'react';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  date: string;
  title: string;
  content: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ date, title, content }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:scale-105">
      <div className="flex items-center text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <h3 className="text-lg font-semibold text-amber-900 mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default NewsCard;