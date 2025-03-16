import styled from "styled-components";

function StartPage(){
    return(
        <StyledText>
            <h1>Welcome to Johanna's Training App</h1>
        </StyledText>
    );
}

export default StartPage;


const StyledText = styled.div`
    text-align: center;
`;