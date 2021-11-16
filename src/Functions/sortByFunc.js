const onChangeSortBy = (e, sortBy, setsortBy, setPage) => {
    let value = e.target.value;
    // const newsortBy = {
    //   ...sortBy,
    //   [e.target.name]: [e.target.value]
    // }
    if(value !== sortBy){
      setsortBy(value);
      setPage(1);
    }
    
  }

  export default onChangeSortBy;