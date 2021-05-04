import { StarsFiltering, getLangColorsMap } from "../../utils/utils";

const UserBody = ({ userRepo }) => {
  const tf = userRepo.map((c) => c.name !== typeof String);

  return (
    tf[0] === true ?
    <div className="uk-card-body">
      <div uk-grid="true" className="uk-grid">
        <div className="uk-width-expand@m uk-grid-margin uk-first-column">
        
            <>
              <h3>Most Stars Repository</h3>
              <hr />
              {userRepo
                .sort((a, b) => StarsFiltering(a, b))
                .slice(0, 4)
                .map((repos) =>
                  repos ? (
                    // eslint-disable-next-line react/jsx-no-target-blank
                    <a
                      className="card-link uk-link-reset"
                      href={repos.html_url}
                      target="_blank"
                      key={repos.id}
                    >
                      <div className="uk-card uk-card-default uk-margin-small card-hover ">
                        <div className="uk-card-body">
                          <div className="uk-flex uk-grid" uk-grid="true">
                            <div className="uk-width-expand uk-first-column">
                              <h4 className="uk-margin-remove-bottom">
                                {repos.name}
                              </h4>
                              <p className="uk-text-muted uk-margin-remove-top">
                                {repos.description}
                              </p>
                            </div>
                            <div className="uk-width-auto">
                              <span uk-icon="star" className="uk-icon">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-svg="star"
                                >
                                  <polygon
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="1.01"
                                    points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"
                                  ></polygon>
                                </svg>
                              </span>{" "}
                              {repos.stargazers_count}
                            </div>
                          </div>
                          <span
                            className="uk-badge"
                            style={{
                              backgroundColor: getLangColorsMap(1)[
                                repos.language
                              ],
                            }}
                          >
                            {repos.language}
                          </span>
                        </div>
                      </div>
                    </a>
                  ) : null
                )}
            </>
        </div>
      </div>
    </div>
    :null
  );
};

export default UserBody;
