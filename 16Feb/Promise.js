const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5; 
        if (success) {
            resolve("Promise resolved successfully!");  
        } else {
            reject(new Error("Promise rejected!"));

        }
    }, 1000); 
});

mypromise
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error); 
    });