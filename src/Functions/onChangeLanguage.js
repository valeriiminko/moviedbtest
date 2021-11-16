const onChangeLanguage = (e, currentLanguage, setcurrentLanguage, setPage) => {
    let value = e.target.value;
    if(value !== currentLanguage){
         setcurrentLanguage(value)
         setPage(1);
      }
    }

    export default onChangeLanguage;