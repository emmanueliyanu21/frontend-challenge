import { FinancialCard } from "./component/FinancialCard";
import family from "./family.svg";
import holiday from "./going-holiday.svg";
import retire from "./retire.svg";
import home from "./home.svg";
import emergency from "./em-fund.svg";
import debt from "./debt.svg";
import vision from "./vision.svg";

const familyData = {
  cardImage: family,
  cardText: "Baby's birth",
};

const holidayData = {
  cardImage: holiday,
  cardText: "Holiday",
  text: 'In 3 years and 2 months'
};

const retirementData = {
  cardImage: retire,
  cardText: "Retire",
};

const newHomeData = {
  cardImage: home,
  cardText: "New Home",
  text: 'In 1 year and 9 months'
};

const emergencyFundData = {
  cardImage: emergency,
  cardText: "Emergency fund",
  text: 'In 4 years and 9 months'
};

const debtData = {
  cardImage: debt,
  cardText: "Debt free",
  text: 'In 8 years and 11 months'
};

const contributionData = {
  cardImage: vision,
  cardText: "Make a contribution to my community through philantrophy",
  text: 'Utimately'
};

function App() {
  return (
    <main>
      <div className="Wrapper">
        <div className="WrapperContainer">
          <div className="UpperCard">
            <div className="CardItemOne">
              <FinancialCard {...familyData} DisplayCircle='none' DisplayHolder = 'down' />
              <FinancialCard {...holidayData} DisplayCircle='downCircle' DisplayHolder = 'down' />
            </div>
            <div className="CardItemThree">
              <FinancialCard {...retirementData} DisplayCircle='none' DisplayHolder = 'down'   />
            </div>
          </div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="line2"></div>
          <div className="right"></div>
          <div className="LowerCard">
              <div className="CardItemLowerOne">
                <FinancialCard {...newHomeData} />
                <FinancialCard {...emergencyFundData} />
              </div>
              <div className="CardItemLowerTwo">
                  <FinancialCard {...debtData} />
                  <FinancialCard {...contributionData} color='opaqueBlue' DisplayCircle='none' />
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
