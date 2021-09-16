import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Form, FormGroup, Label, Input, Row, Col} from "reactstrap";
import axios from "axios";


class FormAddingUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            email: props.email,
            group: props.group,
        }
        this.groupList = []

    }


    componentDidMount() {
        axios({
            method: "GET",
            url: 'http://0.0.0.0:8000/api/groups/'
        }).then(response => {
            this.groupList = response.data;
            console.log(response)
        })
    }

//     console.log(this.state)
//     axios.post('http://0.0.0.0:8000/api/groups/')
//         .then(groups => {
//             this.groupList = groups;
//             console.log(this.groupList)
//         })
// }


    handleAddNewUser = () => {
        console.log(this.state)
        axios.post('http://0.0.0.0:8000/api/users/', this.state,
            {headers: {'X-CSRFToken': 'y6m2cgmsqsGBKkNqpF5JSLRhQik8UrByloK3jm8IkJVPHmPv4KXHh8im19T3dgQA'}})
            .then(r => console.log(r))

    }

    render() {
        const {email, username, group} = this.state;
        return (
            <Form>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input value={email} onChange={(e) => this.setState({email: e.target.value})} type="email"
                                   name="email" id="exampleEmail" placeholder="Email"/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Username</Label>
                            <Input value={username} onChange={(e) => this.setState({username: e.target.value})}
                                   type="text" name="password" id="examplePassword" placeholder="username"/>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleSelect">Group</Label>
                    <Input value={group} type="select" name="select" id="exampleSelect">
                        {this.groupList.map(g => (
                            <option key={g.id}>{g.id}:{g.name}</option>
                        ))}
                    </Input>
                </FormGroup>
                <Button onClick={this.handleAddNewUser}>Add</Button>
            </Form>
        );
    }
}

export default FormAddingUser;