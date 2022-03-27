import React from 'react'
import styles from './Paper.module.css';

const Paper = ({name, description}) => {
  return (
    <div className={styles.paper}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Paper