import React, {useEffect, useState} from 'react';
import Paper from '../Paper/Paper.jsx';
import PaperForm from '../PaperForm/PaperForm.jsx';
import styles from './App.module.css';
import {getPapers, postPaper, postDeletePaper} from '../../utils/api';

function App() {
  
  const [papers, setPapers] = useState(null);
  useEffect(() => {
    getPapers()
      .then(data => {
        setPapers(data)
        console.log(data)
      })
  },[])

  const addPaper = (paper) => {
    postPaper(paper)
      .then(data => setPapers(data))
      .catch(err => console.log(err))
  }
  const handleDeletePaper = (id) => {
    postDeletePaper(id)
      .then(data => setPapers(data))
  }
  return (
    <>
      <PaperForm onAddPaper={addPaper}/>
      <div className={styles['papers-list']}>
        {papers && papers.map(paper => (
          <Paper 
            name={paper.name} 
            description={paper.description} 
            id={paper._id.toString()}
            key={paper._id.toString()} 
            deletePaper={handleDeletePaper}
          />
        ))}
      </div>
    </>
  );
}

export default App;
