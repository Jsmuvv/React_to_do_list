// import  CardFooter  from 'react-bootstrap/CardFooter'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { ToDo } from '../types'







type ToDoCardProp = {
    TODO:ToDo
}

export default function TaskCard({TODO}: ToDoCardProp) {
    return (
        <Card border="primary">
            <Col xs = {12} md = {6} lg = {4}>
            <Card bg = {TODO.completed ? "secondary" : "info"} text = "white" className='my-3'>
                <Card.Header>{TODO.dateCreated.toString()}</Card.Header>
                    <Card.Body>
                        <Card.Title>{TODO.name}</Card.Title>
                        <Card.Text>{TODO.description}</Card.Text>
                    </Card.Body>
                    {TODO.dueDate && <Card.Footer><b>Due:</b>{TODO.dueDate.toString()}</Card.Footer>}
                </Card>
            </Col>
        </Card>
    )
}