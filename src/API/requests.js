import axios from 'axios';

export const getTasks = async () => {
    const request = axios.get("http://localhost:3000/tasks");
    return await request
    .then((response) => response.data)
    .catch((error) => error)
}

export const postTasksInDB = async (task) => {
    await axios.post("http://localhost:3000/tasks", task)
}

export const alreadyInDB = (task) => {
    return getTasks().then((result) => {

        const tasksToCompare = result.map((item) => {
            return item.title
        })

        return tasksToCompare.includes(task) ? true : false
    })
    .catch((error) => {
        console.log(error)
    })
}
