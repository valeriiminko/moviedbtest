import React from 'react'

export default function PageSwitcher({page, onChangePage, setPage}) {
    return (
        <div className="btn-group mt-3" role="group" aria-label="Basic example">
            <button disabled={page === 1 ? true: false} type="button" className="btn btn-info" onClick={() => onChangePage(page - 1, setPage)}>Previous page</button>
            <button type="button" className="btn btn-info" onClick={() => onChangePage(page + 1, setPage)}>Next page</button>
        </div>
    )
}
