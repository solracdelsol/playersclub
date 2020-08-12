import React from 'react';
// import { withRouter } from "react-router-dom";

class PreferencesForm extends React.Component{
  constructor(props){
    super(props)
  }


  render(){

    return (
        <main className="fancy">
          <div className="box">
            <h3 className="subscribe-caption">
              Subscribe to Sports Feeds
            </h3>
            <p>
              <label htmlFor="MLB">
                <input
                  id="MLB"
                  type="checkbox"
                  value="NBA"
                />
                <span>MLB</span>
              </label>
            </p>
            <p>
              <label htmlFor="NBA">
                <input id="NBA" type="checkbox" value="NBA" />
                <span>NBA</span>
              </label>
            </p>

            <p>
              <label htmlFor="Other">
                <input
                  id="NFL"
                  type="checkbox"
                  value="NFL"
                />
                <span>
                  NFL
                </span>
              </label>
            </p>
          </div>
        </main>
    );
  }
}

export default PreferencesForm;