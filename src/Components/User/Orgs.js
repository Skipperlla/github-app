const Orgs = ({ userOrgs, userInfo }) => {
  const tf = userOrgs.map((c) => c.login !== typeof String);
  const twBoolean = userInfo.twitter_username !== null;
  return (
    <div className="uk-width-1-2@s uk-first-column">
      {tf[0] === true ? (
        <div>
          <h3 className="uk-margin-remove-top uk-text-center">Organizations</h3>
          <hr />
          <div className="uk-flex uk-flex-wrap uk-flex-left">
            {userOrgs.map((orgs) => (
              <div
                className="uk-card uk-card-default uk-margin-small-left uk-margin-small-right uk-margin-small-bottom uk-card-small"
                key={orgs.id}
              >
                <div className="uk-card-header">
                  <a
                    href={`https://github.com/${orgs.login}`}
                    className="uk-link-reset uk-margin-right"
                  >
                    <img
                      className="uk-margin-right"
                      src={orgs.avatar_url}
                      alt="org_image"
                      height="50"
                      width="50"
                    />
                    <span>{orgs.login}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {twBoolean ? (
        <div>
          <h3 className="uk-margin-remove-top uk-text-center">Twitter</h3>
          <hr />
          <div className="uk-flex uk-flex-wrap uk-flex-left">
            <div className="uk-card uk-card-default uk-margin-small-left uk-margin-small-right uk-margin-small-bottom uk-card-small">
              <a
                href={`https://twitter.com/${userInfo.twitter_username}`}
                className="uk-link-reset"
              >
                <div className="uk-card-header">
                  <img
                    className="uk-margin-right"
                    src="/images/twitter.png"
                    alt="org_image"
                    height="50"
                    width="50"
                    style={{ objectFit: "cover" }}
                  />
                  <span>{userInfo.twitter_username}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Orgs;
