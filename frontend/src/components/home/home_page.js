import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';





class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }


  componentDidMount(){
    if (Object.entries(this.props.sports).length === 0) {
      this.props.mlbScheduleObj(this.getTodaysDate())
     }
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return today = yyyy + "/" + mm + "/" + dd;
  }

  
  render() {
    return (
      <>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
              user={this.props.user}
            />
            <div className="information-container">
<<<<<<< HEAD
              {/* <Article /> */}
              {/* {Object.entries(this.props.sports).length !== 0 ? (
                <Score data={this.props.sports.data} />
              ) : null} */}
              {/* <Score /> */}
=======
              <Article />

              {/* {Object.entries(this.props.sports).length !== 0 ? (
                <Score data={this.props.sports.data} />
              ) : null} */}
              <Score />

>>>>>>> 21c4bf0eabd7d3fc49516d34795b6496ca8bbde3
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;


