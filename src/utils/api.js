const api = 'https://papers-mern-app.herokuapp.com'
const papersEndpoint = `${api}/papers`;
const deletePaperEndPoint = `${api}/papers/delete`;

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

export const postDeletePaper = async (paperId) => {
  const response = await fetch(deletePaperEndPoint,{
    method: "POST",
    body: JSON.stringify({id: paperId}),
    headers: {
        "Content-type": "application/json"
    }
  })
  const updatedPapers = await response.json();
  return updatedPapers;
}