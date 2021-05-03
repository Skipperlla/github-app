import { DateFunction } from "../../utils/utils";
const LatestUpdates = () => {
  return (
    <div className="uk-width-1-1">
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              Latest Updates
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span uk-icon="icon: check; ratio: 1.5"></span> Released
            </td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              28.04.2021
            </td>
          </tr>
          <tr>
            <td>
              <span uk-icon="icon: check; ratio: 1.5"></span> Repository stars
              filtered from large to small
            </td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              02.05.2021
            </td>
          </tr>
          <tr>
            <td>
              <span uk-icon="icon: check; ratio: 1.5"></span> Most used languages,Organizations and Twitter added
            </td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>
              {DateFunction(1)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LatestUpdates;
