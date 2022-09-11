function hello(...data){
    let name,age,show
    for(let i=0;i<data.length;i++){
      let x=typeof data[i] ;
      console.log(x) 
      if(x==='string'){
        name=data[i];
        console.log(name)}
      if(x==='number'){
        age=data[i];
        console.log(age)}
      if(x==='boolean'){
        show=data[i];
        console.log(show)}


      
    
}
return `hello ${name} is ${age} show ${show}`
}
console.log(hello(false,50,'sharaf'))