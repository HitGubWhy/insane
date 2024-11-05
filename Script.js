let cars = ["bmw", "tesla", "ford"]

let carsList = cars.filter((car) => car.length > 3)

console.log(carsList)

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true
        if (success) {
            resolve("OK!Status = 200")
        } else {
            reject("Error")
        }
    }, 2000)
})

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})




