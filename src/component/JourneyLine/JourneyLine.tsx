import styles from "./JourneyLine.module.css";

const JourneyLine = () => {
  return (
    <>
      <div className={styles.Circle}></div>
      <div className={styles.Line}></div>
      <div className={styles.DottedLine}></div>
      <div className={styles.RightArrowHead}></div>
    </>
  );
};

export { JourneyLine };
