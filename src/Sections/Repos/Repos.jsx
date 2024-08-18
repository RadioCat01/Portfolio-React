import React, { useEffect, useState } from 'react';
import styles from './ReposStyles.module.css';
import RepoCard from './RepoCard/RepoCard';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const localStorageKey = 'githubRepos'; // Key for storing data in localStorage

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust threshold as needed
  });

  const fetchRepos = async () => {
    console.log("fetched");
    try {
      const response = await fetch('https://api.github.com/users/RadioCat01/repos');
      if (!response.ok) {
        throw new Error('Too Many Requests :(');
      }
      console.log(response);
      const reposData = await response.json();
      console.log(reposData);
      // Fetch README files for each repository
      const reposWithReadme = await Promise.all(
        reposData.map(async (repo) => {
          try {
            const readmeResponse = await fetch(`https://api.github.com/repos/RadioCat01/${repo.name}/readme`, {
              headers: {
                Accept: 'application/vnd.github.v3.raw',
              },
            });
            if (!readmeResponse.ok) {
              throw new Error('Could not fetch README');
            }
            const readmeContent = await readmeResponse.text();
            return { ...repo, readme: readmeContent };
          } catch {
            return { ...repo, readme: 'README not available' };
          }
        })
      );
      
      // Save to localStorage
      localStorage.setItem(localStorageKey, JSON.stringify(reposWithReadme));
      console.log(reposWithReadme);
      setRepos(reposWithReadme);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load from localStorage if available
    const savedRepos = localStorage.getItem(localStorageKey);
    if (savedRepos) {
      setRepos(JSON.parse(savedRepos));
      setLoading(false);
    } else {
      fetchRepos();
    }

  }, []);

  const handleRefresh = () => {
    localStorage.removeItem(localStorageKey);
    setLoading(true);
    fetchRepos();
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section id='projects' className={styles.container} ref={ref}>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 50 }} 
        transition={{ delay: 0 }}  
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      >
        Projects
      </motion.h1>
      <ul className={styles.repoList}>
        {repos.map(repo => (
          <li key={repo.id} className={styles.repoItem}>
            <RepoCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GitHubRepos;
