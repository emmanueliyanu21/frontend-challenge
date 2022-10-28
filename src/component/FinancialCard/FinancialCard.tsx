import styles from "./FinancialCard.module.css";

type positionProp = "top" | "bottom";
type typeProp = "primary" | "secondary";

type FinancialCardProps = {
  cardImage: string;
  cardText: string;
  position?: positionProp;
  type?: typeProp;
};

const FinancialCard = ({
  cardImage,
  cardText,
  position = "bottom",
  type = "primary",
}: FinancialCardProps): JSX.Element => (
  <div className={`${styles[position]} ${styles[type]}`}>
    <div className={styles.lineWrapper}>
      <div className={styles.shortLine}></div>
    </div>
    <div className={styles.financialCard}>
      <img src={cardImage} alt={cardText} />
      <p>{cardText}</p>
    </div>
  </div>
);

export { FinancialCard };
