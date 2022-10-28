import styles from "./JourneyLine.module.css";

const JourneyLine = () => {

  const progressStepTexts = [
    "You are here",
    "In 1 year and 9 months",
    "In 3 years and 2 months",
    "In 4 years and 9 months",
    "In 8 years and 11 months"
  ];

  return (
    <div className={styles.journeyWrap}>
      <div className={styles.line}>
        {progressStepTexts.map((text) => (
          <div className={styles.wrap}>
            <div className={styles.progressPoint}></div>
            <div className={styles.progressStepText}>{text}</div>
          </div>
        ))}
      </div>
      <div className={styles.dottedLine}></div>
      <div className={styles.progressStepEnd}>
        <div className={styles.rightArrowHead}></div>
        <div className={styles.progressStepText}>Utimately</div>
      </div>
    </div>
  );
};

export { JourneyLine };
