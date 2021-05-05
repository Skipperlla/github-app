import { DateFunction } from "../../utils/utils";

const LatestUpdates = ({ projectCommits }) => {
  return (
    <div className="uk-width-1-1">
      <table className="uk-table uk-table-divider ft">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              Last Commits
            </th>
          </tr>
        </thead>
        <tbody>
          {projectCommits.map((commit) => (
            <tr key={commit.node_id}>
              <td>
                <span uk-icon="icon: check; ratio: 1.5"></span>{" "}
                {commit.commit.message}
              </td>
              <td style={{ display: "flex", justifyContent: "flex-end" }}>
                {DateFunction(commit.commit.committer.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestUpdates;
