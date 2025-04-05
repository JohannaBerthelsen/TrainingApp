import styled from "styled-components";
import logo from "../assets/logo.png";
import {useEffect, useState} from "react";
import axios from "axios";

export default function StartPage(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return(
        <Container>
            <Text>
                <h1>Welcome to Johanna's Training App</h1>
                <UserList>
                    {users.map((user, index) => (
                        <UserItem key={index}>
                            👤 {user.name} - {user.email}
                        </UserItem>
                    ))}
                </UserList>
            </Text>
            <Image src={logo} />
        </Container>
    );
}


const Text = styled.div`
    font-size: 12px;
    padding: 80px;
`;

const Image = styled.img`
    height: 400px;
    border-radius: 15px;
    
    
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const UserList = styled.ul`
    margin-top: 20px;
    list-style: none;
    padding: 0;
`;

const UserItem = styled.li`
    font-size: 16px;
    margin-bottom: 10px;
`;

