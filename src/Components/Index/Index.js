/* eslint-disable jsx-a11y/anchor-is-valid */
import CardBodyForm from "./CardBodyForm";
import CardBodyPreview from "./CardBodyPreview";
import CardBodyHeader from "./CardBodyHeader.js";
import LatestUpdates from "./LatestUpdates.js";

const Index = () => {
  return (
    <div className="uk-container uk-padding">
      <div className="uk-card uk-card-default">
        <CardBodyHeader />
        <div className="uk-card-body">
          <div className="uk-grid uk-grid-divider uk-flex" uk-grid="true">
            <CardBodyForm />
            <CardBodyPreview />
            <LatestUpdates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
