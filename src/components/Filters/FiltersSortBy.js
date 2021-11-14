import React from 'react'

export default function FiltersSortBy({sortBy, onChangeFilters}) {
    return (
        <div className="form-group">
            <label htmlFor="sort_by">Sort by:</label>
            <select  className="form-select" id="sort_by" value={sortBy} name="sort_by" onChange={onChangeFilters}>
                <option value="popularity.desc">Popular by descending</option>
                <option value="popularity.asc">Popular by ascending</option>
                <option value="vote_average.desc">Raiting by descending</option>
                <option value="vote_average.asc">Raiting by ascending</option>
                </select>
         </div>
    )
}
