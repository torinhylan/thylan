import React from 'react';
import './App.css';
import hearticon from './images/hearticon.png';
import commenticon from './images/commenticon.png';


function Tweet(props) {
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.tweet}</p>
            <h3>
                {props.likes}  <img className="hearticon" src={hearticon} alt="likes" />
                {props.comments}  <img className="commenticon" src={commenticon} alt="comments" />
            </h3>
        </div>
    );
}

export default Tweet;