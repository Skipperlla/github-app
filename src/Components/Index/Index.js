/* eslint-disable jsx-a11y/anchor-is-valid */
import CardBodyForm from "./CardBodyForm";
import CardBodyPreview from "./CardBodyPreview";
import CardBodyHeader from "./CardBodyHeader.js";
import LatestUpdates from "./LatestUpdates.js";
import { useEffect,useState } from "react";
import {GetCommits} from "../../utils/utils"
const Index = () => {
  const [projectCommits,setprojectCommits]= useState([])
  useEffect(()=>{
    GetCommits(setprojectCommits)
    
  },[])
  return (
    <div className="uk-container uk-padding">
      <div className="uk-card uk-card-default">
        <CardBodyHeader />
        <div className="uk-card-body">
          <div className="uk-grid uk-grid-divider uk-flex" uk-grid="true">
            <CardBodyForm />
            <CardBodyPreview />
            <LatestUpdates projectCommits={projectCommits}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
