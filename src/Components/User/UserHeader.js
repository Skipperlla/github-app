const UserHeader = ({ userInfo }) => {
  const {
    avatar_url,
    bio,
    blog,
    company,
    email,
    followers,
    following,
    location,
    name,
    login,
    public_repos,
  } = userInfo;
  const tfFollowing = userInfo.following !== 0
  const tfFollowers = userInfo.followers !== 0
  const tfRepos = userInfo.public_repos !== 0

  return (
    <div className="uk-card-header">
      <div className="uk-child-width-expand@s uk-grid" uk-grid="true">
        <div className="uk-width-1-6@m uk-first-column">
          <img src={avatar_url} alt="profile-img" uk-img="true" />
        </div>
        <div className="uk-width-expand@m">
          <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
          <p className="uk-text-muted uk-margin-remove-top">{bio}</p>
          <div>
            <ul className="uk-list">
              {blog &&
                <li className="uk-align-center uk-margin-remove-bottom">
                  <span uk-icon="home" className="uk-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="home"
                    >
                      <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"></polygon>
                      <polygon points="15 4 18 4 18 7 17 7 17 5 15 5"></polygon>
                      <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"></polygon>
                    </svg>
                  </span>{" "}
                  Website:{" "}
                  <a href={blog} className="uk-link-text uk-link-reset">
                    <b>{blog}</b>
                  </a>
                </li>
               }
              {email &&
                <li className="uk-align-center uk-margin-remove-bottom">
                  <span uk-icon="mail" className="uk-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="mail"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="1.4,6.5 10,11 18.6,6.5"
                      ></polyline>
                      <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path>
                    </svg>
                  </span>{" "}
                  Mail:{" "}
                  <a className="uk-link-reset" href={`mailto:${email}`}>
                    <b>{email}</b>
                  </a>
                </li>
              }
              {location &&
                <li className="uk-align-center uk-margin-remove-bottom">
                  <span uk-icon="location" className="uk-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="location"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.01"
                        d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"
                      ></path>
                      <circle
                        fill="none"
                        stroke="#000"
                        cx="10"
                        cy="6.8"
                        r="2.3"
                      ></circle>
                    </svg>
                  </span>{" "}
                  Location:{" "}<b>{location}</b>
                </li>
              }

              {company &&
                <li className="uk-align-center uk-margin-remove-bottom">
                  <span uk-icon="bolt" className="uk-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="bolt"
                    >
                      <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"></path>
                    </svg>
                  </span>{" "}
                  Company:{" "}<b>{company}</b>
                </li>
              }
            </ul>
          </div>
        </div>
        <div className="uk-width-auto@m">
          <ul className="uk-list">
            {tfRepos &&
              <li className="uk-align-center uk-margin-remove-bottom">
                <span uk-icon="code" className="uk-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="code"
                  >
                    <polyline
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.01"
                      points="13,4 19,10 13,16"
                    ></polyline>
                    <polyline
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.01"
                      points="7,4 1,10 7,16"
                    ></polyline>
                  </svg>
                </span>{" "}
                Total Repositories:{" "}
                <a
                  href={`https://github.com/${login}?tab=repositories`}
                  className="uk-link-text uk-link-reset"
                >
                  <b>{public_repos}</b>
                </a>
              </li>
            }
            {tfFollowers &&
              <li className="uk-align-center uk-margin-remove-bottom">
                <span uk-icon="users" className="uk-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="users"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      cx="7.7"
                      cy="8.6"
                      r="3.5"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"
                    ></path>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"
                    ></path>
                  </svg>
                </span>{" "}
                Followers:{" "}
                <a
                  href={`https://github.com/${login}?tab=followers`}
                  className="uk-link-text uk-link-reset"
                >
                  <b>{followers}</b>
                </a>
              </li>
            }
            {tfFollowing &&
              <li className="uk-align-center uk-margin-remove-bottom">
                <span uk-icon="users" className="uk-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    data-svg="users"
                  >
                    <circle
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      cx="7.7"
                      cy="8.6"
                      r="3.5"
                    ></circle>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"
                    ></path>
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.1"
                      d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"
                    ></path>
                  </svg>
                </span>{" "}
                Following:{" "}
                <a
                  href={`https://github.com/${login}?tab=following`}
                  className="uk-link-text uk-link-reset"
                >
                  <b>{following}</b>
                </a>
              </li>
            }
            {/* <li className="uk-align-center uk-margin-remove-bottom">
              <button
                type="submit"
                className="uk-button hidden-print uk-button-primary uk-margin-top"
              >
                Print CV
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
