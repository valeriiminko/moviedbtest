import React from 'react'

export default function PageSwitcher({page, onSwitchPage}) {
    return (
        <div className="btn-group mt-3" role="group" aria-label="Basic example">
            <button disabled={page === 1 ? true: false} type="button" className="btn btn-info" onClick={() => onSwitchPage(page - 1)}>Previous page</button>
            <button type="button" className="btn btn-info" onClick={() => onSwitchPage(page + 1)}>Naxt page</button>
        </div>
    )
}
