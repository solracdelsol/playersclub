import React from 'react';
import './score.css';
import '../../reset.css';

class Score extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        //array which we need to interpolate what we are trying to get
    //     const all = () => { 
    //         const values = Object.values(this.props.data.game);
    //         return values.map(value => {
    //         return (
    //           <>
    //             <li>
    //               {value[0]}
    //               {value[1]}
    //             </li>
    //             <li>
    //               {value[2]}
    //               {value[3]}
    //             </li>
    //           </>
    //         );});
    // }

        return (
            <div className="score-container">
                <div className="scores">
                    <p className="score-header">Latest Scores</p>
                    <object
                        className="score"
                        type="text/html"
                        data="https://www.scoreboard.com/en/#live-table">
                    </object>
                </div>
                {/* <p>Players: 10 App Academy: -10</p> */}
                {/* {this.props.data.game.away.name} */}
            </div>
        )
    }
}

export default Score;