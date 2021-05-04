/* eslint-disable jsx-a11y/anchor-is-valid */
import CardBodyForm from "./CardBodyForm";
import CardBodyPreview from "./CardBodyPreview";
import CardBodyHeader from "./CardBodyHeader.js";
import LatestUpdates from "./LatestUpdates.js";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="uk-container uk-padding">
        <div className="uk-card uk-card-default">
          <CardBodyHeader/>
          <div className="uk-card-body">
            <div className="uk-grid uk-grid-divider uk-flex" uk-grid="true">
              <CardBodyForm />
              <CardBodyPreview />
              <LatestUpdates />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Index;
