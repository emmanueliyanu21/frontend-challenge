import styles from "./FinancialJourney.module.css";
import { FinancialCard } from "../../../component/FinancialCard";
import { JourneyLine } from "../../../component/JourneyLine/JourneyLine";
import {
  contributionData,
  debtData,
  emergencyFundData,
  familyData,
  holidayData,
  newHomeData,
  retirementData,
} from "./static-data";

const FinancialJourney = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperContainer}>
        <div className={styles.upperCard}>
          <div className={styles.cardItemOne}>
            <FinancialCard {...familyData} position="top" />
            <FinancialCard {...holidayData} position="top" />
          </div>
          <div className={styles.cardItemThree}>
            <FinancialCard {...retirementData} position="top" />
          </div>
        </div>
        <JourneyLine />
        <div className={styles.lowerCard}>
          <div className={styles.cardItemLowerOne}>
            <FinancialCard {...newHomeData} />
            <FinancialCard {...emergencyFundData} />
          </div>
          <div className={styles.cardItemLowerTwo}>
            <FinancialCard {...debtData} />
            <FinancialCard {...contributionData} type="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FinancialJourney };
