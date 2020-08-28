import React from 'react';
import './article.css';
import '../../reset.css';

class Article extends React.Component {
    render() {
        return (
          <div className="article-container">
            <div className="articles">
              <p className="article-header">Latest Article</p>
              <object
                className="article"
                type="text/html"
                data="https://theathletic.com/mlb/#game-59835">
              </object>
              {/* <object
                className="article"
                type="text/html"
                data="https://theathletic.com/1992551/2020/08/13/intel-sharing-what-our-insiders-hear-about-the-pelicans-wizards-and-kings/#holiday-banner">
              </object>
              <object
                className="article"
                type="text/html"
                data="https://theathletic.com/1993180/2020/08/13/its-surreal-why-trevor-rosenthals-success-with-the-royals-is-so-profound/#holiday-banner">
              </object> */}
            </div>
          </div>
        );
    }
}

export default Article;