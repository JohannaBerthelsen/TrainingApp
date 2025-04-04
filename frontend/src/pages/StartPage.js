import styled from "styled-components";
import logo from "../assets/logo.png";

function StartPage(){
    return(
        <Container>
            <Text>
                <h1>Welcome to Johanna's Training App</h1>
            </Text>
            <Image src={logo} />
        </Container>


    );
}

export default StartPage;


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

