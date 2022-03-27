const papersEndpoint = 'https://papers-mern-app.herokuapp.com/papers';

export const getPapers = async () => {
  const raw = await fetch(papersEndpoint);
  const papers = await raw.json()
  return papers;
};

export const postPaper = async (paper) => {
  const response = await fetch(papersEndpoint, {
    method: "POST",
    body: JSON.stringify(paper),
    headers: {
        "Content-type": "application/json"
    }
    })
    const updatedPapers = await response.json();
    return updatedPapers;
      
}