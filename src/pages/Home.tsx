import React from 'react';
import { Sparkles, Brain, Shield, Zap } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import newsData from '../data/news.json';

const Home = () => {
  const [displayCount] = React.useState(3);
  const { news } = newsData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-2xl overflow-hidden mb-16 animate-fade-in">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
          alt="Lab team"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/90 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-8 sm:p-12">
        <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Welcome to the Starlight Lab
        </h1>
        <p className="text-lg sm:text-xl text-amber-50 max-w-3xl mx-auto leading-relaxed">
          Advancing the frontiers of AI through rigorous evaluation, ethical considerations, 
          and innovative solutions in Large Language Models and Retrieval-Augmented Generation.
        </p>
        </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-block p-3 bg-amber-100 rounded-lg mb-4">
            <Sparkles className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">LLM Evaluation</h3>
          <p className="text-gray-700">
            Developing comprehensive frameworks to assess LLM capabilities and limitations.
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block p-3 bg-orange-100 rounded-lg mb-4">
            <Brain className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">RAG Systems</h3>
          <p className="text-gray-700">
            Advancing retrieval-augmented generation for more accurate and reliable AI systems.
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="inline-block p-3 bg-yellow-100 rounded-lg mb-4">
            <Shield className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI Ethics</h3>
          <p className="text-gray-700">
            Ensuring fairness and ethical considerations in AI development and deployment.
          </p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block p-3 bg-amber-100 rounded-lg mb-4">
            <Zap className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-700">
            Pushing boundaries in AI research with novel approaches and methodologies.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.slice(0, displayCount).map((item, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <NewsCard
                date={item.date}
                title={item.title}
                content={item.content}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;