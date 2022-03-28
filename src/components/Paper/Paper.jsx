import React from 'react'
import styles from './Paper.module.css';

const Paper = ({name, description, id, deletePaper}) => {

  const handleDelete = () => {
    deletePaper(id)
  }

  return (
    <div className={styles.paper}>
      <div className={styles.delete} onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FF6B6B" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Paper