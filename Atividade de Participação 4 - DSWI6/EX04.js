function firstPromise(numInt){
    return new Promise((resolve, reject) => {
        if(numInt > 2){
            resolve(numInt);
        }else{
            reject("Rejeitado na Promise 1");
        }
    });
}

function secondPromise(data){
    return new Promise((resolve, reject) => {
        if((data+1)%2 == 0){
            resolve(data)
        }else{
            reject("Rejeitado na Promise 2")
        }
    })
}

firstPromise(3)
    .then(data => secondPromise(data))
    .then(data =>{
        console.log(data)
    }).catch(e => {
        console.log(e)
    })
