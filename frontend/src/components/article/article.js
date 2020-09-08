import React from 'react';
import './article.css';
import '../../reset.css';

class Article extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchArticles();
  }
  render() {
    if (Object.entries(this.props.articles).length === 0) 
    { return null 
    } else {
      const articleCard = this.props.articles.data.articles.map((article,idx) => {
        return (
          <>
          <a href={article.url} >{article.title}</a>
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