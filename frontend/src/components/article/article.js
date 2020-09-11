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
          <div key={idx} className="fetched-articles">
            <a className="article-title" href={article.url}>{article.title}</a>
            <img src={article.urlToImage} alt="" height='70%' width='100%'/>
            <p className="article-description">{article.description}</p>
          </div>
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