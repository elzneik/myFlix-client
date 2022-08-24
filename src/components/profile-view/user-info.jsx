import React from "react";

export function UserInfo ({ name, email }) {
    return (
        <>
            <h4>Your info</h4>
            <p>Name: {name}</p>
            <p>e-mail: {email}</p>
        </> 
    )
}