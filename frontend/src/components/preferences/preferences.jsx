import React from 'react';
import './preferences.css'
import '../../reset.css';
// import { withRouter } from "react-router-dom";

class PreferencesForm extends React.Component{
  constructor(props){
    super(props)
  }


  render(){

    return (
      <>
      <div onClick={this.props.closeModal} className="close-x">
        X
      </div>
        <div className="fancy">
          <div className="box">
            <h3 className="subscribe-caption">
              Subscribe to Sport Feeds
            </h3>
            <div className="preference-check">
            <p className="check-box">
              <label htmlFor="MLB">
                <input
                  id="MLB"
                  type="checkbox"
                  value="MLB"
                />
                <span>MLB</span>
              </label>
            </p>
            <p className="check-box">
              <label htmlFor="NBA">
                <input 
                  id="NBA" 
                  type="checkbox" 
                  value="NBA"
                />
                <span>NBA</span>
              </label>
            </p>

            <p className="check-box">
              <label htmlFor="NHL">
                <input
                  id="NHL"
                  type="checkbox"
                  value="NHL"
                />
                <span>
                  NHL
                </span>
              </label>
            </p>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
        </>
    );
  }
}

export default PreferencesForm;