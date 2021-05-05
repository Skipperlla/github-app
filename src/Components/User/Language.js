import { CalculateLang } from "../../utils/utils";
import { Bar } from "react-chartjs-2";
import Orgs from "./Orgs";

import { useEffect } from "react";

const Language = ({ LanguageRepo, OrgsRepo, userInfo }) => {
  useEffect(() => {
    CalculateLang(LanguageRepo);
  }, [LanguageRepo]);
  let LanguageLabel = CalculateLang(LanguageRepo).LanguageLabel;
  let LanguageColor = CalculateLang(LanguageRepo).LanguageColor;
  let LanguageValue = CalculateLang(LanguageRepo).LanguageValue;

  const tf = LanguageRepo.map((c) => c.language !== typeof String);
  return (
    <div uk-grid="true" className="uk-grid">
      {tf[0] &&
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
     }
      <Orgs userOrgs={OrgsRepo} userInfo={userInfo} />
    </div>
  );
};

export default Language;
