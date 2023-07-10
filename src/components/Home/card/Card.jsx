import React from "react";
import "./Card.css";

function Card1(props) {
    return (
        <div className="card1-main">
            <div className="card">
                <div className="icon">
                    <i className="material-icons md-36">face</i>
                </div>
                <a className="title">{props.title}</a>
                <a className="text">{props.text}</a>
            </div>
        </div>
    );
}

function Card2(props) {
    return (
        <div className="container">
            <a className="card2" href="#">
                <h3>{props.title}</h3>
                <p className="small">{props.text}</p>
                <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                </div>
            </a>
        </div>
    );
}

function Card3(props) {
    return (
        <div className="container">
            <a className="card3" href={props.href}>
                <h3>{props.title}</h3>
                <p className="small">{props.text}</p>
                <div className="dimmer"></div>
                <div className="go-corner" href="#">
                    <div className="go-arrow">→</div>
                </div>
            </a>
        </div>
    );
}

export { Card1, Card2, Card3 };
