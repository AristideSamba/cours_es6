(()=>{
    console.log("Hello")
    const langs = ["html" , "Css", "Js", true]
    console.table(langs)
    const user = {
        nom: "Joe",
        prenom: "John",
        age: 30,
        ville: "NY",
        pays: "USA",
    }
    console.log(user)
    console.log(`${user.nom} : ${user.prenom}`)
    console.log(langs.length)
   /* for(let i = 0; i<langs.length; i++){
        console.log(langs[i])
    } */
    let i =0;
    while(i < langs.length){
        console.log(`Index ${i} : ${langs[i]}`)
        i++
    }
    
})()