let task = JSON.parse(localStorage.getItem("task")) ||[];

let loadTasks = () => {

    let storedUsername = localStorage.getItem("username")

    if(storedUsername){
        storedUsername.value = storedUsername;
        displayWelcomeMessage(storedUsername);
        displayUserTask(storedUsername);
    }

};