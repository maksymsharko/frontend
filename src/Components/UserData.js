import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

import UserAddModal from "./UserAddModal";

function MyUsers() {
    const [users, setUsers] = useState([]);
    // const [deleteUser, setdeleteUser] = useState([])

    useEffect(() => {
        // setUsers([{
        //     "id": 2,
        //     "username": "root",
        //     "email": "tredr02@gmail.com",
        //     "created": "2021-09-13T15:40:19.850064Z",
        //     "actions": "edit",
        //     "group": 2
        // }])
        axios({
            method: "GET",
            url: 'http://0.0.0.0:8000/api/users/'
        }).then(response => {
            setUsers(response.data)
        })
    }, [])

    // useEffect(() => {
    //     axios({
    //         method: "POST",
    //         url: 'http://0.0.0.0:/api/users/delete'
    //     })
    // })

    return (
        <div className="main">
            <header>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                         aria-labelledby="pills-home-tab">
                    </div>
                </div>
            </header>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created</th>
                    <th scope="col">Group</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.created}</td>
                        <td>{user.group}</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="button">
                <UserAddModal/>
            </div>
        </div>

    );
}

export default MyUsers;
