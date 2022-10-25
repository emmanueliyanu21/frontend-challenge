import { FinancialCard } from './component/FinancialCard';
import family from './family.svg';
import holiday from './going-holiday.svg';
import retire from './retire.svg';
import home from './home.svg';
import emergency from './em-fund.svg';
import debt from './debt.svg';
import vision from './vision.svg';

const familyData = {
  cardImage: family,
  cardText: "Baby's birth"
}

const holidayData = {
  cardImage: holiday,
  cardText: "Holiday"
}

const retirementData = {
  cardImage: retire,
  cardText: "Retire"
}

const newHomeData = {
  cardImage: home,
  cardText: "New Home"
}

const emergencyFundData = {
  cardImage: emergency,
  cardText: "Emergency fund"
}

const debtData = {
  cardImage: debt,
  cardText: "Debt free"
}

const contributionData = {
  cardImage: vision,
  cardText: "Make a contribution to my community through philantrophy"
}

function App() {
  return (
    <main>
      
     <FinancialCard {...familyData} />
     <br />
     <FinancialCard {...holidayData} />
     <br />
     <FinancialCard {...retirementData} />
     <br />
     <div className="line"></div>
     <FinancialCard {...newHomeData} />
     <br />
     <FinancialCard {...emergencyFundData} />
     <br />
     <FinancialCard {...debtData} />
     <br />
     <FinancialCard {...contributionData} />
    </main>
  );
}

export default App;
