function fetchingUserData(user_id) {
    console.log("Fetching data....")
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const users = [{id:1, name:"John Doe"}, {id:2, name:"Will Smith"}]
            const user_data = users.find(user => user.id == user_id);
            if (!user_data){
                reject("User Not Found");
            }
            resolve(user_data);
        }
        ,1000)
    );
}

function fetchingUserTasks(user_data) {
    console.log(`Fetching user Tasks ...`);
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const tasks=[{user_id:1, tasks:["Write Code", "Review PRs"]}, {user_id:2, tasks:[]}];
            const user_tasks = tasks.find(task => task.user_id == user_data.id);
            if (!user_tasks || user_tasks.tasks.length === 0) {
                reject("No Tasks Found for this user");
            }
            resolve(user_tasks.tasks);
        }
        ,1000)
    );
}

const req_id = 1;
fetchingUserData(req_id)
  .then(fetchingUserTasks)
  .then(tasks => console.log("All tasks fetched successfully:", tasks))
  .catch((error) => console.error(error.message));
