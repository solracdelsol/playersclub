import React from 'react';
import './article.css';
import '../../reset.css';

class Article extends React.Component {
    render() {
        return (
          <div className="article-container">
            <p>ARTICLES POPULATED HERE</p>
            <div>
              <object
                type="text/html"
                data="https://theathletic.com/mlb/#game-59835"
                width="400px"
                height="80px"
              ></object>
            </div>
            <div>
              <object
                type="text/html"
                data="https://theathletic.com/1992551/2020/08/13/intel-sharing-what-our-insiders-hear-about-the-pelicans-wizards-and-kings/#holiday-banner"
                width="400px"
                height="200px"
              ></object>
            </div>
            <br></br>
            <div>
              <object
                type="text/html"
                data="https://theathletic.com/1993180/2020/08/13/its-surreal-why-trevor-rosenthals-success-with-the-royals-is-so-profound/#holiday-banner"
                width="400px"
                height="200px"
              ></object>
            </div>
          </div>
        );
    }
}

export default Article;