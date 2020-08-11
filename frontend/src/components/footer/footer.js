import React from 'react';
import './footer.css';
import '../../reset.css';

class Footer extends React.Component {
    render() {
        return (
          <div className="footer-bar">
            <a className="github" href="https://github.com/keychained/">
              <i className="fa fa-github fa-lg"></i>
              Kihoon
            </a>
            <a className="github" href="https://github.com/solracdelsol/">
              <i className="fa fa-github fa-lg"></i>
              Carlos
            </a>
            <a className="github" href="https://github.com/mjfung1">
              <i className="fa fa-github fa-lg"></i>
              Miguel
            </a>
            <a className="github" href="https://github.com/espinalk212">
              <i className="fa fa-github fa-lg"></i>
              Kevin
            </a>
          </div>
        );
    }
}

export default Footer;