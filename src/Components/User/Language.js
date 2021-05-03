import { getLangColorsMap } from "../../utils/utils";
import { Bar } from "react-chartjs-2";
import Orgs from "./Orgs";
const Language = ({ userRepo, userOrgs, userInfo }) => {
  const LanguageLabel = [];
  const LanguageValue = [];
  const LanguageColor = [];
  // eslint-disable-next-line array-callback-return
  let languages = userRepo.reduce((total, item) => {
    const { language } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  languages = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });

  // eslint-disable-next-line array-callback-return
  languages.map((datas) => {
    LanguageLabel.push(datas.label);
    LanguageValue.push(datas.value);
  });

  // eslint-disable-next-line array-callback-return
  LanguageLabel.map((datas) => {
    LanguageColor.push(getLangColorsMap(1)[datas]);
  });
  return (
    <div uk-grid="true" className="uk-grid">
      <div className="uk-width-1-2@s uk-first-column">
        <h3 className="uk-margin-remove-top uk-text-center">
          Most Used Languages
        </h3>
        <hr />
        <div>
          <Bar
            data={{
              labels: LanguageLabel,
              datasets: [
                {
                  label: "Languages (%)",
                  data: LanguageValue,
                  backgroundColor: LanguageColor,
                  borderColor: LanguageColor,
                  borderWidth: 1,
                },
              ],
            }}
            height={400}
            width={600}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
            
          />
        </div>
      </div>
      <Orgs userOrgs={userOrgs} userInfo={userInfo} />
    </div>
  );
};

export default Language;
