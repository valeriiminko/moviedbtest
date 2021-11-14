import React from 'react'

export default function MovieItem({item}) {

    // const {title, vote_average, poster_path, backdrop_path } = item; 
    
    return (
        <div className="card" style={{ width: "100%" }}>
            <img
            className="card-img-top card-img--height"
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
            alt=""
            />
            <div className="card-body">
                <h6 className="card-title">{item.title}</h6>
                <div className="card-text">Popularity: {item.vote_average}</div>
            </div>
      </div>
    )
}
