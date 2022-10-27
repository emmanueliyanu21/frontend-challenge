import styles from "./FinancialCard.module.css";

type DisplayCircleType = "CircleBlock" | "CircleNone" | "CircleDown";
type DisplayHolder = "up" | "down";
type Displaycolor = "Blue" | "OpaqueBlue";

type FinancialCardProps = {
  cardImage: string;
  cardText: string;
  text?: string;
  DisplayCircle?: DisplayCircleType;
  DisplayHolder?: DisplayHolder;
  color?: Displaycolor;
};

const FinancialCard = ({
  text,
  cardImage,
  cardText,
  DisplayCircle = "CircleBlock",
  DisplayHolder = "up",
  color = "Blue",
}: FinancialCardProps): JSX.Element => (
  <div className={`${styles.FinancialCardWrapper} ${styles[color]}`}>
    <div className={`${styles.LineWrapper} ${styles[DisplayCircle]}`}>
      <div className={styles.CircleBall}></div>
    </div>
    <div className={`${styles.Wrapper} ${styles[DisplayHolder]}`}>
      <p className={styles.CardTextHeader}>{text}</p>
    </div>
    <div className={`${styles.LineWrapper} ${styles[DisplayHolder]}`}>
      <div className={styles.ShortLine}></div>
    </div>
    <div className={`${styles.LineWrapper} ${styles[DisplayHolder]}`}>
      <div className={`${styles.ArrowUp} `}></div>
      <div className={`${styles.ArrowDown}`}></div>
    </div>
    <div className={`${styles.FinancialCard} `}>
      <img src={cardImage} alt="Family" />
      <p style={{ textAlign: "center" }}>{cardText}</p>
    </div>
  </div>
);

export { FinancialCard };
