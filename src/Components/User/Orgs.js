const Orgs = ({ userOrgs, userInfo }) => {
  const tf = userOrgs.find((c) => c.login !== typeof String);
  const twBoolean = userInfo.twitter_username !== null;

  return (
    <>
      {tf !== undefined || false ? (
        <div className="uk-width-1-2@s uk-first-column">
          {tf !== undefined ? (
            <>
              <h3 className="uk-margin-remove-top uk-text-center">
                Organizations
              </h3>
              <hr />
              <div className="uk-flex uk-flex-wrap uk-flex-left">
                {userOrgs.map((orgs) => (
                  <div className="uk-card uk-card-default uk-margin-small-left uk-margin-small-right uk-margin-small-bottom uk-card-small">
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
            </>
          ) : null}
          {twBoolean === true ? (
            <>
              <h3 className="uk-margin-remove-top uk-text-center">Twitter</h3>
              <hr />
              <div className="uk-flex uk-flex-wrap uk-flex-left">
                <div className="uk-card uk-card-default uk-margin-small-left uk-margin-small-right uk-margin-small-bottom uk-card-small">
                  <a
                    href={`https://twitter.com/${userInfo.twitter_username}`}
                    className="uk-link-reset"
                  >
                    <div class="uk-card-header">
                      <img
                        class="uk-margin-right"
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
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Orgs;
