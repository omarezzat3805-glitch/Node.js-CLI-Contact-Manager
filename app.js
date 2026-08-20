const controller = require("./controller")
const yarg = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")

const { type } = require("os")
const yargs = yarg(hideBin(process.argv))

yargs.command({
    command: "add",
    describe: " To Add an items",
    builder: {
        fname: {
            describe: " ",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: " ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        controller.addPerson(x.fname, x.lname, x.age, x.city, x.id)
    }
}
)

yargs.command({
    command: "delete",
    describe: " To delete an item",
    builder: {
        id: {
            describe: "id for deleed item ",
            demandOption: true

        }
    },
    handler: (x) => {
        controller.deletePerson(x.id)
    }
})

yargs.command({
    command: "read",
    describe: " To read data by id",
    builder: {
        id: {
            describe: "id for person you want ",
            demandOption: true

        }
    },
    handler: (x) => {
        controller.veiwPerson(x.id)
    }
})
yargs.command({
    command: "list",
    describe: " To read data by id",
    handler: () => {
        controller.veiwList()
    }
})


yargs.parse()
// console.log(yargs.argv)


