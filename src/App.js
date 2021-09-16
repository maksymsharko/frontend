import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import GroupData from "./Components/GroupData";
import UserData from "./Components/UserData";
import {Tabs} from "element-react";
import "element-theme-default"



function App() {


    return (
        <div className="App">
            <Tabs type="card" value={"1"} activeName="1">
                <Tabs.Pane label="Users" name="1">
                    <UserData/>
                </Tabs.Pane>
                <Tabs.Pane label="Groups" name="2">
                    <GroupData/>
                </Tabs.Pane>
            </Tabs>
        </div>
    );
}

export default App;


