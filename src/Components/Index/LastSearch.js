const LastSearch = () => {
  return (
    <div className="uk-width-1-1">
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan="2">
              Last Search
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span uk-icon="icon: check; ratio: 1.5"></span>s{" "}
            </td>
            <td style={{ display: "flex", justifyContent: "flex-end" }}>s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LastSearch;
