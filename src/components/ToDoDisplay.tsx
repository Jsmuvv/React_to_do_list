import Row from "react-bootstrap/Row"
import  Col from "react-bootstrap/Col"
import ToDoCard from "./TaskCard"
import { ToDo } from "../types"






type ToDoDisplayProps = {
    TODOs: ToDo[]
}


export default function ToDoDisplay({ TODOs }: ToDoDisplayProps) {
    const completedTodos = TODOs.filter(t => t.completed)
    const pendingTodos = TODOs.filter(t => !t.completed)
    return (
        <>
            <Row>
                <Col xs = {12}>
                <h2 className="text-center">Pending Todos</h2>
                </Col>
                {pendingTodos.map( t => <ToDoCard TODO ={t} key = {t.id} /> )}
            </Row>
            <Row>
                <Col xs = {12}>
                <h2 className="text-center">Completed Todos</h2>
                </Col>
                {completedTodos.map( t => <ToDoCard TODO ={t} key = {t.id} /> )}
            </Row>
        </>
    )
}
