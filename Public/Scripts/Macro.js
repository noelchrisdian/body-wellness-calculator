//DOM
let buttonMan = document.querySelector(`.b1`)
let buttonWoman = document.querySelector(`.b2`)
let heightInput = document.querySelector(`.input1`)
let weightInput = document.querySelector(`.input2`)
let ageInput = document.querySelector(`.input3`)
let button = document.querySelector(`.calculate`)
let resultCard = document.querySelector(`.result-card`)
let buttonManclick = false
let buttonWomanclick = false

//BMR Pria
let getManBMR = function () {
    let height = parseFloat(heightInput.value)
    let weight = parseFloat(weightInput.value)
    let age = parseFloat(ageInput.value)

    let bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    return bmr
}

//BMR Wanita
let getWomanBMR = function () {
    let height = parseFloat(heightInput.value)
    let weight = parseFloat(weightInput.value)
    let age = parseFloat(ageInput.value)

    let bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
    return bmr
}

//Tingkat Aktivitas
let getPAL = function () {
    let activityInput = document.querySelector(`.input4`)
    let activityLevel = parseFloat(activityInput.value)

    if (activityLevel === 0) {
        alert('Please select activity level before calculating')
        resultCard.style.display = 'none'
        return false
    }

    resultCard.style.display = 'block'
    return activityLevel
}

//Kalori Harian
let getDailyCal = function (bmr, activityLevel) {
    return bmr * activityLevel
}

buttonMan.addEventListener(`click`, function () {
    buttonManclick = true
    buttonWomanclick = false
    if (buttonManclick) {
        resultCard.style.display = `none`
        buttonMan.style.backgroundColor = `white`
        buttonMan.style.color = `#5D1BF7`
        buttonWoman.style.backgroundColor = `#E0E0E0`
        buttonWoman.style.color = `#000000`
    } else { }
})

buttonWoman.addEventListener(`click`, function () {
    buttonManclick = false
    buttonWomanclick = true
    if (buttonWomanclick) {
        resultCard.style.display = `none`
        buttonWoman.style.backgroundColor = `white`
        buttonWoman.style.color = `#5D1BF7`
        buttonMan.style.backgroundColor = `#E0E0E0`
        buttonMan.style.color = `#000000`
    } else { }
})

button.addEventListener(`click`, (event) => {
    event.preventDefault()

    //Total Kalori Harian
    resultCard.style.display = `block`
    let bmr, result

    if (buttonManclick) {
        bmr = getManBMR()
    } else if (buttonWomanclick) {
        bmr = getWomanBMR()
    } else {
        alert(`Please select gender before calculating`)
        resultCard.style.display = `none`
        return
    }

    if (isNaN(bmr)) {
        alert(`Invalid input for height, weight, or age`)
        resultCard.style.display = `none`
        window.location.reload()
        return
    } else { }

    result = getDailyCal(bmr, getPAL())
    result = Math.round(result)
    let total = document.querySelector(`.total-calories`)
    total.innerHTML = `Your daily total calories are ${result} calories`

    //Makronutrien
    let preset = document.querySelector('.preset').value
    let fat, protein, carbo

    switch (preset) {
        case 'Gain':
            fat = Math.round((result * 0.35) / 9)
            protein = Math.round((result * 0.25) / 4)
            carbo = Math.round((result * 0.65) / 4)
            break;
        case 'Lose':
            fat = Math.round((result * 0.2) / 9)
            protein = Math.round((result * 0.3) / 4)
            carbo = Math.round((result * 0.45) / 4)
            break
        case 'Maintain':
            fat = Math.round((result * 0.25) / 9)
            protein = Math.round((result * 0.30) / 4)
            carbo = Math.round((result * 0.55) / 4)
            break
        default:
            alert('Please select preset before calculating')
            resultCard.style.display = 'none'
            break;
    }

    let fatOutput = document.querySelector(`.fat`)
    fatOutput.innerHTML = `Fat : ${fat} grams`

    let proteinOutput = document.querySelector(`.protein`)
    proteinOutput.innerHTML = `Protein : ${protein} grams`

    let carboOutput = document.querySelector(`.carbo`)
    carboOutput.innerHTML = `Carbohydrates : ${carbo} grams`
})