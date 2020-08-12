import React from 'react';



class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.openModal('signup');
  }
  
  render() {
    return (
      <div>
        <h1>PlayersClub</h1>
        <footer>Copyright 2020</footer>
      </div>
    );
  }
}

export default HomePage;


