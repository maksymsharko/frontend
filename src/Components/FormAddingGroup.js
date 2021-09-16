import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import axios from "axios";


class FormAddingGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
        }
    }

    handleAddNewGroup = () => {
        console.log(this.state)
        axios.post('http://0.0.0.0:8000/api/groups/', this.state,
            {headers: {'X-CSRFToken': 'y6m2cgmsqsGBKkNqpF5JSLRhQik8UrByloK3jm8IkJVPHmPv4KXHh8im19T3dgQA'}})
            .then(r => console.log(r))

    }

    render() {
        const {name, description} = this.state;
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Name</Label>
                            <Input value={name} onChange={(e) => this.setState({username: e.target.value})}
                                   type="text" name="password" id="examplePassword" placeholder="name"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Label for="exampleForm.ControlTextarea1">Description</Label>
                            <Input value={description} onChange={(e) => this.setState({description: e.target.value})}
                                   type="text" placeholder="description"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button onClick={this.handleAddNewGroup}>Add</Button>
            </Form>
        );
    }
}

export default FormAddingGroup;








