import React from 'react'
import FiltersSortBy from './FiltersSortBy';
import PageSwitcher from './PageSwitcher';
import FiltersLanguages from './FiltersLanguages';
import FiltersGenres from './FiltersGenres';
import './Filters.scss';

export default function Filters({sortBy, page, onChangeFilters, onSwitchPage, languageList, currentLanguage, onChangeLanguage, genreList, onSelectGenre, currentGengre}) {
    // const {sortBy :{sort_by}, onChangeFilters, onSwitchPage} = sortBy;
    
    console.log(page);
    return (
        <form>
            <FiltersSortBy  sortBy={sortBy} onChangeFilters={onChangeFilters} />
            <PageSwitcher   page={page} onSwitchPage={onSwitchPage}/>
            <FiltersLanguages languageList={languageList} currentLanguage={currentLanguage}
            onChangeLanguage={onChangeLanguage}
            />
            <FiltersGenres genreList={genreList} onSelectGenre={onSelectGenre} currentGengre={currentGengre}/>
            {/* <div className="form-group">
                <label htmlFor="sort_by">Sort by:</label>
                <select  className="form-control" id="sort_by" value={sortBy} name="sort_by" onChange={onChangeFilters}>
                    <option value="popularity.desc">Popular by descending</option>
                    <option value="popularity.asc">Popular by ascending</option>
                    <option value="vote_average.desc">Raiting by descending</option>
                    <option value="vote_average.asc">Raiting by ascending</option>
                    </select>
            </div> */}
            {/* <div className="btn-group" role="group" aria-label="Basic example">
                <button disabled={page === 1 ? true: false} type="button" className="btn btn-info" onClick={() => onSwitchPage(page - 1)}>Previous page</button>
                <button type="button" className="btn btn-info" onClick={() => onSwitchPage(page + 1)}>Naxt page</button>
            </div> */}

        </form>
    )
}
