// src/components/RepoCard/RepoCard.js
import React, { useState } from 'react';
import styles from './RepoCardStyle.module.css';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { PiArrowFatLinesDownBold, PiArrowFatLinesUpBold  } from "react-icons/pi";
import { motion } from "framer-motion";

const RepoCard = ({ repo }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getDisplayedContent = () => {
    const words = repo.readme.split(' ');
    if (isExpanded) {
      return words.slice(0, 50).join(' ') + (words.length > 50 ? '...' : '');
    }
    return words.slice(0, 6).join(' ') + (words.length > 20 ? '...' : ''); // Adjust this slice for initial preview
  };

  return (
    <motion.div className={styles.card} whileInView={{opacity:1, y:0}} initial={{opacity: 0, y:50}} transition={{duration:0.5}}>
      <p className={styles.repohead}>Repository</p>
      <h2>{repo.name}</h2>
      <div className={styles.readmeContent}>
        <pre className={`${styles.content} ${isExpanded ? styles.expanded : styles.collapsed}`}>
          {getDisplayedContent()}
        </pre>
        <button onClick={toggleExpand} className={styles.toggleButton}>
          {isExpanded ? (<PiArrowFatLinesUpBold />) : ( <PiArrowFatLinesDownBold />)}
        </button>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.repoDetails}>
        <div className={styles.icons}>
        <p>⭐{repo.stargazers_count}</p>
        <p>🍴{repo.forks_count}</p>
        <p>👀{repo.watchers_count}</p>
        {repo.language && <p className={styles.tec}>🔧{repo.language}</p>}
        </div>
       
        <div className={styles.footer}>
        <div className={styles.author}>
        <img src={repo.owner.avatar_url} alt="Owner avatar" className={styles.avatar} />
        <p>🔄{new Date(repo.updated_at).toLocaleDateString()}</p>
        </div>
        < a href={repo.html_url} className={styles.link}><BsFillArrowRightSquareFill /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default RepoCard;