import React from 'react'
import styles from './Card.module.css'

const Card = ({ id, title, price, description, category, image, rate, count }) => {

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img className={styles.CardImageSetting} src={image} alt="ProductImage" />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardPrice}>${price}</p>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardCategory}>Category: {category}</p>
        <div className={styles.rating}>
          <span className={styles.rate}>{rate}</span>
          <span className={styles.count}>({count} Reviews)</span>
        </div>
      </div>
    </div>
  )
}

export default Card
