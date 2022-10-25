import React from 'react'

import styles from './FinancialCard.module.css'

type FinancialCardProps = {
    cardImage: string
    cardText: string
  }

const FinancialCard = ({cardImage,cardText}: FinancialCardProps): JSX.Element => 
  (
    <>
        <div className={styles.FinancialCard}>
          <img src={cardImage} alt="Family" />
          <p style={{textAlign: "center"}}>{cardText}</p>
     </div>
    </>
  )

export { FinancialCard }