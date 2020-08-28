import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';



<<<<<<< HEAD:frontend/src/components/home/home_page.jsx
export default class HomePage extends React.Component {
=======


class HomePage extends React.Component {
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b:frontend/src/components/home/home_page.js
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

    const sportCard = () => {if (Object.entries(this.props.sports).length !== 0){ // gather all games and return them in SportsCard components
                Object.entries(this.props.sports).map( sport => {
                  return (<Score sports={sport}  />) })}}

    return (
      <div>
        <div className="homepage-container">
          <div className="homepage-background">
<<<<<<< HEAD:frontend/src/components/home/home_page.jsx
            <PlayersBar openModal={this.props.openModal} logout={this.props.logout}/>
          <div className="information-container">
              
                  
                  
                {/* // <Article />, */}
          </div>
=======
            <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
            />
            <div className="information-container">
              <Article />

              {/* {Object.entries(this.props.sports).length !== 0 ? (
                <Score data={this.props.sports.data} />
              ) : null} */}
              <Score />

            </div>
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b:frontend/src/components/home/home_page.js
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

// export default HomePage;