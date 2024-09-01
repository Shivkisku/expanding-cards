import { useState } from 'react';
import styles from '../styles/Home.module.css';

const panelsData = [
  {
    backgroundImage: 'https://images.unsplash.com/photo-1610212570473-6015f631ae96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore the world'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1606838830438-5f380a664a4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore the world'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1606059100151-b09b22709477?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
    title: 'Explore the world'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1603048675767-6e79ff5b8fc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore the world'
  },
  {
    backgroundImage: 'https://images.unsplash.com/photo-1595433502559-d8f05e6a1041?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore the world'
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.container}>
      {panelsData.map((panel, index) => (
        <div
          key={index}
          className={`${styles.panel} ${activeIndex === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${panel.backgroundImage})` }}
          onClick={() => handleClick(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}
