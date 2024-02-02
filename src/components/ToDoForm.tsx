import { useState} from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { ToDoFormObject } from '../types'



type TaskFormProps = {
    addNewToDos: (newTodoObject:ToDoFormObject) => void
}

export default function ToDoForm({ addNewToDos }: TaskFormProps) {
    const [showForm, setShowForm] = useState(false)
    const [newToDo,setNewToDo] = useState<ToDoFormObject>({name:'',description:'',dueDate:''})

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewToDo({...newToDo, [event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        addNewToDos(newToDo);

        setShowForm(false);
        setNewToDo({name:'',description:'',dueDate:''})
    }

    return (
        <>
            <Row>
                <Col xs = {12}>
                    <Button variant = {showForm ? 'danger' : 'primary'} className='w-100 my-5' onClick = {() => setShowForm(!showForm)}>{ showForm ? "Close form" : "Add task + " }</Button>
                </Col>
            </Row>
            {showForm && (
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                                <Form onSubmit = {handleFormSubmit}>
                                        <Form.Group className ='mb-3'>
                                            <Form.Label>ToDo Name</Form.Label>
                                                <Form.Control 
                                                type= 'text' 
                                                name = 'name' 
                                                placeholder = 'Enter ToDo name' 
                                                required value = {newToDo.name} 
                                                onChange = {handleInputChange}/>
                                            <Form.Label>ToDo Description</Form.Label>
                                                <Form.Control 
                                                type= 'text' 
                                                name = 'description' 
                                                placeholder = 'Enter ToDo Description' 
                                                required value = {newToDo.description} 
                                                onChange = {handleInputChange}/>
                                            <Form.Label>Due Date</Form.Label>
                                                <Form.Control 
                                                type= 'text' 
                                                name = 'dueDate' 
                                                placeholder = 'Enter ToDo DueDate' 
                                                value = {newToDo.dueDate} 
                                                onChange = {handleInputChange}/>
                                            <Form.Text className = 'text-muted'> Please enter due date in the form of YYYY-MM-DD-SS</Form.Text>
                                        </Form.Group>
                                    <Button variant = "outline-success" className='w-100' type='submit'>Create Task</Button>
                                </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            )}
        </>
    )
}