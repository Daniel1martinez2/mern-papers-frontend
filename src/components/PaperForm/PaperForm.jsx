import React from 'react';
import styles from './PaperForm.module.css';

const PaperForm = ({onAddPaper}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {title, description, link} = e.target;
    console.log(title.value, description.value);
    onAddPaper({
      name: title.value,
      description: description.value,
      tags: ['nice', 'good'],
      link: link.value
    })

    title.value = '';
    description.value = '';
    link.value = '';
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
        <label>
          <p>Link</p>
          <input type="text" name="link"/>
        </label>
        <button type="submit">✏️ Add paper</button>
      </form>
    </div>
  )
}

export default PaperForm