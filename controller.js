const fs = require("fs")

const addPerson = (fname, lname, age, city, id) => {
    const allData = loadData()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedData.length === 0) {

        allData.push({
            fname,
            lname,
            age,
            city,
            id
        })

        saveData(allData)

        console.log("Person added successfully")
    } else {
        console.log("ERROR: Duplicated Data")
    }
}


// Load Data
const loadData = () => {
    try {
        const dataJson = fs.readFileSync("data15.json").toString()

        return JSON.parse(dataJson)

    } catch (error) {
        return []
    }
}


// Save Data
const saveData = (allData) => {
    const allDataJson = JSON.stringify(allData, null, 2)

    fs.writeFileSync("data15.json", allDataJson)
}


// Delete
const deletePerson = (id) => {

    const allData = loadData()

    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })

    if (allData.length === dataToKeep.length) {
        console.log("Person not found")
    } else {
        saveData(dataToKeep)
        console.log("Person deleted successfully")
    }
}


// Read Person
const veiwPerson = (id) => {

    const allData = loadData()

    const person = allData.find((obj) => {
        return obj.id === id
    })

    if (person) {
        console.log(person.fname, person.lname)
        console.log("Age:", person.age)
        console.log("City:", person.city)
        console.log("ID:", person.id)
    } else {
        console.log("Person not found")
    }
}


// List
const veiwList = () => {

    const allData = loadData()

    if (allData.length === 0) {
        console.log("No data found")
        return
    }

    allData.forEach((obj) => {
        console.log(
            `ID: ${obj.id} | ${obj.fname} ${obj.lname} | Age: ${obj.age} | City: ${obj.city}`
        )
    })
}


module.exports = {
    addPerson,
    deletePerson,
    veiwPerson,
    veiwList
}