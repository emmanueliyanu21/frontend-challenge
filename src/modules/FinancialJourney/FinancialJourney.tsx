import styles from './FinancialJourney.module.css'

import { FinancialCard } from "../../component/FinancialCard"

import { JourneyLine } from "../../component/JourneyLine/JourneyLine"

import { contributionData, debtData, emergencyFundData, familyData, holidayData, newHomeData, retirementData } from "./static-data"

const FinancialJourney = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.WrapperContainer}>
          <div className={styles.UpperCard}>
            <div className={styles.CardItemOne}>
              <FinancialCard {...familyData} DisplayCircle='CircleNone' DisplayHolder = 'down' />
              <FinancialCard {...holidayData} DisplayCircle='CircleDown' DisplayHolder = 'down' />
            </div>
            <div className={styles.CardItemThree}>
              <FinancialCard {...retirementData} DisplayCircle='CircleNone' DisplayHolder = 'down'   />
            </div>
          </div>
          <JourneyLine />
          <div className={styles.LowerCard}>
              <div className={styles.CardItemLowerOne}>
                <FinancialCard {...newHomeData} />
                <FinancialCard {...emergencyFundData} />
              </div>
              <div className={styles.CardItemLowerTwo}>
                  <FinancialCard {...debtData} />
                  <FinancialCard {...contributionData} color='OpaqueBlue' DisplayCircle='CircleNone' />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { FinancialJourney }
