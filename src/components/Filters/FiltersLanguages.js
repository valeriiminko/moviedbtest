import React from 'react'

export default function FiltersLanguages({languageList, currentLanguage, onChangeLanguage}) {

    // const [{}: iso_639_1, english_name] = languageList;

    const optionList =languageList.map(list => {
        const {iso_639_1, english_name} =  list;
        return <option key={iso_639_1}  value={iso_639_1}>{english_name}</option>
    }).sort((a,b) => {
        // console.log(a.props.children)
        return a.props.children.localeCompare(b.props.children);
    })
    return (
        <div className="form-group mt-3">
             <label htmlFor="currentLanguage">Select Language:</label>
             <select  className="form-select" id={currentLanguage} value={currentLanguage} name={currentLanguage} onChange={onChangeLanguage}>
            {optionList}
            </select>
        </div>
    )
}
