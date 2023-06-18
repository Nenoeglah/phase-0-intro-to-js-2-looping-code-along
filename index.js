// Code your solutions in this file
function writeCards(names, surprise){
    let newArr = []
    names.forEach(element =>{
        newArr.push(`Thank you, ${element}, for the wonderful ${surprise} gift!`)

    });
    return newArr
}


