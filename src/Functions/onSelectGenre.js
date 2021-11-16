const onSelectGenre = (value, currentGengre, setcurrentGenre) => {
    const {id} = value;
   
    if(currentGengre.some(item => item.id === value.id)){
      setcurrentGenre((prev)=>{
        console.log(value)
          return prev.filter(item => item.id !== id)
      })
    }else{
      setcurrentGenre((prev) => {
        return [...prev, value];
      })
    }

  }

  export default onSelectGenre;