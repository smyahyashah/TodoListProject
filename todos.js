const userList = []

let getUserInput = prompt('What would you like to do?:')
getUserInput = getUserInput.toLowerCase()

//The main Logic, taking user input based on conditions
while (getUserInput !== 'quit' && getUserInput !== 'q') {
    //listing the exisiting items in list
    if (getUserInput === 'list') {
        console.log("*************************")
        for (let i = 0; i < userList.length; i++) {
            console.log(`${i} : ${userList[i]}`)
        }
        console.log("*************************")
    }
    //if new is given as input user should be able to add items to list
    else if (getUserInput === 'new') {
        console.log("Making a new List")

        let userAddList = prompt('Enter your task')
        userAddList = userAddList.toLowerCase()

        while (userAddList !== 'end') {
            userList.push(userAddList)
            userAddList = prompt('Enter your next task or write "end":')
        }
    }
    //if delete is given as input, user should be able to give the index number and delete the items from list
    else if (getUserInput === 'del' || getUserInput === 'delete') {
        let indexToDelet = parseInt(prompt('Enter the index from the list you wish to delete'));
        if (!isNaN(indexToDelet)) {
            let deleted = userList.splice(indexToDelet, 1)

            console.log(`OK! Deleted ${deleted[0]}`)
        } else {
            console.log("Unknown Number")
        }
    }
    console.log("Select what you want to do?")
    getUserInput = prompt('What would you like to do? Write "List" to display your list, "New" to add new tasks in list, & "Quit" to Exit.')
}

//Quiting Msg
if (getUserInput === 'quit' || getUserInput === 'q') {
    console.log("Ok Bye! You just QUIT!")
}

