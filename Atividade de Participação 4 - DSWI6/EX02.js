function doAction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Olá mundo!")
        }, 2000);
    });
}

doAction().then(result=> {
    console.log(result)
}) 

