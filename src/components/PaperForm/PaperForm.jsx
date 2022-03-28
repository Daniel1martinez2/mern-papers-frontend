import React from 'react';
import styles from './PaperForm.module.css';

const PaperForm = ({onAddPaper}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {title, description} = e.target;
    console.log(title.value, description.value);
    onAddPaper({
      name: title.value,
      description: description.value,
      tags: ['nice', 'good']
    })

    title.value = '';
    description.value = '';
  }
  return (
    <div className={styles['form-wrapper']}>  
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <p>Title</p>
          <input type="text" name="title"/>
        </label>
        <label>
          <p>Description</p>
          <input type="text" name="description"/>
        </label>
        <button type="submit">✏️ Add paper</button>
      </form>
    </div>
  )
}

export default PaperForm