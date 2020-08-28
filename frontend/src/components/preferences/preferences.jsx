<<<<<<< HEAD
import React from "react";
=======
import React from 'react';
import './preferences.css'
import '../../reset.css';
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b
// import { withRouter } from "react-router-dom";

class PreferencesForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<<<<<<< HEAD
      <main className="fancy">
        <div className="box">
          <h3 className="subscribe-caption">Subscribe to Sports Feeds</h3>
          <p>
            <label htmlFor="MLB">
              <input id="MLB" type="checkbox" value="NBA" />
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
              <input id="NFL" type="checkbox" value="NFL" />
              <span>NFL</span>
            </label>
          </p>
        </div>
      </main>
=======
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
            <button onClick={this.props.closeModal} className="subscribe">Subscribe</button>
          </div>
        </div>
        </>
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b
    );
  }
}

export default PreferencesForm;
