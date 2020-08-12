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
                {this.props.data.game.away.name}
            </div>
        )
    }
}

export default Score;