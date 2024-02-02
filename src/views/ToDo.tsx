import { useState }from 'react'
import ToDoDisplay from "../components/ToDoDisplay"
import ToDoForm from "../components/ToDoForm"
import { ToDo,ToDoFormObject } from '../types'



type Props = {}

export default function Todo({}: Props) {
    const [ ToDoDo,setToDos ] = useState<ToDo[]>([])

    const addNewTodo = (newTodoData:ToDoFormObject) => {
        let newToDo:ToDo = {
            id:ToDoDo.length + 1,
            name: newTodoData.name!,
            description:newTodoData.description!,
            dateCreated: new Date(),
            completed: true
        }
        if (newTodoData.dueDate){
            newToDo.dueDate = new Date(newTodoData.dueDate)
        }
        setToDos([...ToDoDo,newToDo])
    }

    return (
    <>
        <ToDoForm addNewToDos = {addNewTodo}/>
        <ToDoDisplay TODOs={ToDoDo} />
    </>
    )
}