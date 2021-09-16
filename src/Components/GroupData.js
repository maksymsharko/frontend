import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import GroupAddModal from "./GroupAddModal";


function Group() {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://0.0.0.0:8000/api/groups/'
        }).then(response => {
            setGroups(response.data)
        })
    }, [])
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
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {groups.map(group => (
                    <tr key={group.id}>
                        <th scope="row">{group.id}</th>
                        <td>{group.name}</td>
                        <td>{group.description}</td>
                        <td>
                            <button type="button" className="btn btn-outline-secondary">Edit</button>
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>

                ))}
                </tbody>
            </table>
            <div className="button">
                <GroupAddModal/>
            </div>
        </div>
    );
}

export default Group;



