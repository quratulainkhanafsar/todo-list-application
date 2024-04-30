#! usr/bin/env node 


import inquirer from "inquirer";

let todos: string [] = [];
let condition = true;

console.log("\n \t welcome to todo-list application\n");


let main = async () => {
    while (condition) {
let option = await inquirer.prompt(
[
    {
        name: "choices",
        type: "list",
        message: "select an option you want to do:",
        choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
    }
]);       
  
if (option.choices === "Add Task"){
    await addTask()
}
else if(option.choices === "Delete Task"){
    await deleteTask()
}
else if(option.choices === "Update Task"){
    await updateTask()
}
else if(option.choices === "View Todo-List"){
    await viewTask()
}
else if(option.choices === "Exit"){
    condition = false;
}

}
}

// function to add task in todo-list:
let addTask = async () => {
    let newTask = await inquirer.prompt(
    [
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);

    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfulyy in Todo-List.`);

}

// function to view all updated task in todo-list:
let viewTask = () => {
    console.log("\n your updated todo-list is:");
    todos.forEach((task,index) => {
    console.log(`${index + 1}: ${task}`);
    
    })
}

// fuction to delete a task from todo-list:
 let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt(
    [
        {
            name: "index",
            type: "number",
            message: "Enter the `index no.` of the task you want to delete :"

        } 
    ]
);
let deletedTask = todos.splice(taskIndex.index - 1, 1);
console.log(`\n ${deletedTask} this task has been deleted successfully from your todo-list.`);

 }

 // function to update a new task in todo-list:
let updateTask = async () => {
await viewTask ()
let update_task_index = await inquirer.prompt(
[
    {
        name: "index",
        type: "number",
        message: "Enter the `index no.` of the task you want to update :"
        
    },
    {
        name: "new_Task",
        type: "input",
        message: "Now enter the name of newTask:"
    }
    
]);
todos[update_task_index.index] = update_task_index.new_Task
console.log(`\n Task at index no. ${update_task_index.index} updated successfully: `);

}

main();
    
    


