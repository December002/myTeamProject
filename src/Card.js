import React from 'react';
import './card.css';

function Card() {
    return (
        <div className="card">
            <div className="wrapper">
                <div className="header">
                    <div className="date">
                        <span className="day">12</span>
                        <span className="month">Aug</span>
                        <span className="year">2016</span>
                    </div>
                    <ul className="menu-content">
                        <li>
                            <span> </span>
                        </li>
                        <li>
                            <span>18</span>
                        </li>
                        <li>
                            <span>3</span>
                        </li>
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">hyeongeun</span>
                        <h1 className="title">
                            <span>Test 중입니당...</span>
                        </h1>
                        <p className="text">잘 작동하는감?</p>
                        <span>더보기</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
