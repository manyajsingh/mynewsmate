import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const topics = [
  'Sports', 'Bollywood', 'Politics', 'Crime', 'Arts', 'Tech', 'Olympics', 
  'Paralympics', 'Weather', 'International', 'Entertainment', 'Finance',
  'Business', 'Economics', 'Geopolitics', 'Israel-Hamas War', 
  'Russia-Ukraine War', 'Emerging Entrepreneurs', 'College Admissions',
  'Exam Results', 'Latest Updates', 'Climate Change', 'Sustainability', 'Green Tech'
];

const News = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopic = (topic) => {
    setSelectedTopics((prevTopics) =>
      prevTopics.includes(topic)
        ? prevTopics.filter((t) => t !== topic)
        : [...prevTopics, topic]
    );
  };

  return (
    <div className="news-container">
      <h2>Filter Out Your Topics!</h2>
      <div className="topics-list">
        {topics.map((topic, index) => (
          <button
            key={index}
            className={`topic-btn ${selectedTopics.includes(topic) ? 'active' : ''}`}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <Link to="/avatar">
        <button className="proceed-btn">Proceed to Choose Your Avatar</button>
      </Link>
    </div>
  );
};

export default News;
