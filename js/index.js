const firstName = document.querySelector(".form-wrapper .input.first-name .name")
const lastName = document.querySelector(".form-wrapper .input.last-name .name")
const age = document.querySelector(".form-wrapper .input.age .age")
const submit = document.querySelector(".form-wrapper .submit input")
const clear = document.querySelector(".form-wrapper .clear input")
const lastData = document.querySelector(".form-wrapper .last-data input")

const datas = []


submit.addEventListener("click", function () {
    const data = {}
    if (
        !firstName.value == "" &&
        !lastName.value == "" &&
        !age.value == ""
    ) {
        data.firstName = firstName.value
        data.lastName = lastName.value
        data.age = age.value

        collectData(data)
        setItem(datas)
    } else {
        console.log("gagal");
    }
})

clear.addEventListener("click", function () {
    firstName.value = ""
    lastName.value = ""
    age.value = ""
})

lastData.addEventListener("click", function () {
    let datas = getItem()
    let data = datas[datas.length - 1]
    firstName.value = data.firstName
    lastName.value = data.lastName
    age.value = data.age
})


function setItem(data) {
    data = JSON.stringify(data);
    localStorage.setItem("data", data)
}

export function getItem() {
    let data = localStorage.getItem("data")
    data = JSON.parse(data)
    return data
}

function collectData(data) {
    datas.push(data)
    return datas
}