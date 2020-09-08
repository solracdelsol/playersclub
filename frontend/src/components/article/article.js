import React from 'react';
import './article.css';
import '../../reset.css';

class Article extends React.Component {

  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    if (Object.entries(this.props.articles).length === 0) 
    { return null 
    } else {
      const articleCard = this.props.articles.map((article,idx) => {
        return (
          <>
            <img src={article.urlToImage} height='320' width='480'/>
            <a href={article.url}>{article.title}</a>
            <p>{article.description}</p>
          </>
        );
      })
    return (
      
      <div className="article-container">
        <div className="articles">
          <p className="article-header">Latest Article</p>
          {articleCard}
        </div>
      </div>
    );
    }
  }
}

export default Article;