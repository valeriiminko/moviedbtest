import React from 'react';


export default function FiltersGenres({genreList, onSelectGenre, currentGengre}) {
    const GenresID = currentGengre.map(item => item.id);
    // console.log(GenresID)
const newGenres = genreList.map(genre => {
    const isActive = GenresID.indexOf(genre.id) !== -1;
    console.log(isActive)

    
    return (
    <button  type="button" className={isActive ? 'btn btn-secondary active' : 'btn' } id="custom-button" key={genre.id} onClick={(e) => {
        e.preventDefault();
        return onSelectGenre(genre)
    }}
    
    aria-pressed="true" >
        {genre.name}
        </button>
    )
})
    return (
        <div className="mt-3">
            <p>Select Genre:</p>
            <div className="row">
                    <div className="col-12">
                            {newGenres}
                    </div>
            </div>
        </div>
    )
}
