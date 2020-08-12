import React from 'react';
import './App.css';
import {UserList} from "./Users/UserList";
import Test from "./Users/test";
import {UserContextProvider} from "./Users/UserContext";

function App() {
    return (
        <div className="App">
            {/*<Test/>*/}
            <UserContextProvider>
                <UserList/>
            </UserContextProvider>
        </div>
    );
}

export default App;
