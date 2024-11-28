function fetchingUserData(user_id, callback) {
    console.log("Fetching data....");
    setTimeout(() => {
        const users = [{id:1, name:"John Doe"}, {id:2, name:"Will Smith"}]
        const user_data = users.find(user => user.id == user_id);
        try {
            if (!user_data){
                throw new Error("User Not Found");
            }
        }
        catch(err) {
            console.error(err.message);
        }
        callback(user_data)
    }
    ,1000)
}

function fetchingUserTasks(user_data) {
    try {
        console.log(`Fetching ${user_data.name}'s Tasks ...`);
        setTimeout(() => {
            const tasks=[{user_id:1, tasks:["Write Code", "Review PRs"]}, {user_id:2, tasks:[]}];
            const user_tasks = tasks.find(task => task.user_id == user_data.id);
            if (!user_tasks || user_tasks.tasks.length === 0) {
                console.error("No Tasks Found for this user");
                return;
            }
            console.log(`Tasks for ${user_data.name}:`, user_tasks.tasks);
        }
        ,1000);
    }
    catch(err) {
        console.error(err.message);
    }
}

const req_id = 1;
fetchingUserData(req_id, fetchingUserTasks);
