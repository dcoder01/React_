import React from 'react'

const Cards = ({username, btntext="go somewhere"}) => {
    
    return (
        <div className="card mid" style={{ width: '18rem' }}>
            <img src="/pic.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{username}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">{btntext}</a>
            </div>
        </div>
    )
}

export default Cards;
