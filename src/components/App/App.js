import React, {useEffect, useState} from 'react';
import Paper from '../Paper/Paper.jsx';

function App() {
  const [papers, setPapers] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4242/papers')
      .then(raw => raw.json())
      .then(data => {
        setPapers(data)
        console.log(data)
      })
  },[])
  return (
    <>
      <h1>MERN APP 🍎</h1>
      {papers && papers.map(paper => <Paper name={paper.name} key={paper._id.toString()} />)}
    </>
  );
}

export default App;
