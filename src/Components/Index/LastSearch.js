import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const LastSearch = () => {
  const { lastSearchText, setlastSearchText } = useContext(UserContext);
  let Users = JSON.parse(localStorage.getItem("Users"));
  return (
    <>
      {Users && (
        <>
          <div
            className="uk-width-1-1"
            style={{ height: "20rem", overflow: "auto" }}
          >
            <table className="uk-table uk-table-divider">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }} colSpan="2">
                    Last Search
                  </th>
                </tr>
              </thead>

              <tbody>
                {Users.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span uk-icon="icon: check; ratio: 1.5"></span>
                        <span
                          style={{ width: "76%" }}
                          className="uk-text-truncate"
                        >
                          {data}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button
            className="uk-button uk-button-primary uk-margin-top"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Listeyi Temizle
          </button>
        </>
      )}
    </>
  );
};

export default LastSearch;
