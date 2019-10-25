import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { identifier } from '@babel/types';

const PEEPS : any = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
  ];

const find = (id: any) =>{
    return PEEPS.find(p => p.id === id);
}

const Person = (props: any) => {
    let { url } = useRouteMatch();
    let { id } = useParams();
    let person = find(parseInt(id));
    
    return (
        <div>
            <h3>{person.name}'s Friends</h3>

            <ul>
                {person.friends.map(() => (
                    <li key={id}>
                        <Link to={`${url}/${id}`}>{find(id).name}</Link>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route path={`${url}/:id`}>
                    <Person />
                </Route>
            </Switch>
        </div>
    );
}