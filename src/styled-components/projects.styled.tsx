import styled from 'styled-components';

// Project Elements, images, descriptions, inputs, buttons, links
export const ProjectElementModal = styled.div`
    display: flex;
    justify-content: space-between;
    float: right;
    padding: 30px;
    background-color: #353353;
    font-family: sans-serif;
    border-radius: 8px;
    min-height: 65vh;
`;

export const ProjectElementRightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    font-family: sans-serif;
    width: 28%;
    border-radius: 10px;
    min-height: 200px;
    position: relative;
`;

export const ProjectElementLeftSide = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    font-family: sans-serif;
    width: 69%;
    border-radius: 10px;
    min-height: 200px;
    position: relative;
`;


export const ProjectElementDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 30px;
    background-color: #353353;
    font-family: sans-serif;
    width: 80%;
    border-radius: 8px;
`;

export const ProjectElementCategory = styled.div`
    display: flex;
    padding: 10px;
    background-color: #fff;
    font-family: sans-serif;
    border-radius: 8px;
    color: #111;
    min-height: 34%;
`;

export const ProjectElementTechStack = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    font-family: sans-serif;
    border-radius: 8px;
    color: #111;
    min-height: 60%;
`;