import styled from 'styled-components';

// Project Elements, images, descriptions, inputs, buttons, links
export const ProjectElementModal = styled.div<{isPortrait: boolean}>`
    display: flex;
    flex-direction: ${(props) => props.isPortrait ? "column" : "row"};
    justify-content: space-between;
    float: right;
    padding: 30px;
    background-color: #353353;
    font-family: sans-serif;
    border-radius: 8px;
    min-height: 65vh;
    max-height: ${(props) => props.isPortrait ? "80vh" : "fit-content"};
    overflow: ${(props) => props.isPortrait ? "scroll" : "hide"};
`;

export const ProjectElementRightSide = styled.div<{isPortrait: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    font-family: sans-serif;
    width: ${(props) => props.isPortrait ? "97%" : "28%"};
    border-radius: 10px;
    min-height: 200px;
    position: relative;
    margin: ${(props) => props.isPortrait ? "auto auto" : "0"};
`;

export const ProjectElementLeftSide = styled.div<{isPortrait: boolean}>`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    background-color: #fff;
    font-family: sans-serif;
    width: ${(props) => props.isPortrait ? "97%" : "69%"};
    border-radius: 10px;
    min-height: fit-content;
    position: relative;
    margin: ${(props) => props.isPortrait ? "10px auto" : "0"};
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

export const ProjectElementCategory = styled.div<{isPortrait: boolean}>`
    display: flex;
    padding: 10px;
    background-color: #fff;
    font-family: sans-serif;
    border-radius: 8px;
    color: #111;
    min-height: ${(props) => props.isPortrait ? "fit-content" : "34%"};
    margin: ${(props) => props.isPortrait ? "10px 0" : "0"};
`;

export const ProjectElementTechStack = styled.div<{isPortrait: boolean}>`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #fff;
    font-family: sans-serif;
    border-radius: 8px;
    color: #111;
    min-height: ${(props) => props.isPortrait ? "fit-content" : "60%"};
    margin: ${(props) => props.isPortrait ? "10px auto" : "0"};
`;