import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { is_flex, width, padding, margin, bg, children, center, maxheight, _onClick, main, border_radius, shadow} = props;

    const styles = {
        is_flex : is_flex,
        width: width,
        margin: margin,
        padding: padding,
        bg : bg,
        center:center,
        maxheight:maxheight,
        border_radius:border_radius,
        shadow:shadow
    }

    if(main){
        return (
            <React.Fragment>
                <WrapGridBox {...styles} onClick = {_onClick}>
                    {children}
                </WrapGridBox>
            </React.Fragment>
        ); 
    }
    
    
    return (
        <React.Fragment>
            <GridBox {...styles} onClick = {_onClick}>
                {children}
            </GridBox>
        </React.Fragment>
    );
}

Grid.defaultProps = {
    children : null,
    is_flex: false,
    width : '100%',
    padding : false,
    margin : false,
    bg : false,
    center : false,
    maxheight : false,
    _onClick : () => {},
    border_radius : '0px',
    shadow : false,
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 40%;
    margin: auto;
    box-sizing: border-box;
    background-size:cover ;
    

    
    ${(props)=>props.padding ? `padding : ${props.padding};` : ''};
    ${(props)=>props.margin ? `margin : ${props.margin};` : ''};
    ${(props)=>props.bg ? `background-color : ${props.bg};` : ''};
    ${(props)=>props.is_flex ? `display: flex; align-items: center; justify-content: space-between;` : ''};
    ${(props)=>props.center ? 'text-align : center;' : ''};
    ${(props)=>props.maxheight ? `max-height : ${props.maxheight};` : ''};
    ${(props)=>props.border_radius ? `border-radius : ${props.border_radius};` : ''};
    ${(props)=>props.shadow ? `box-shadow : ${props.shadow};` : ''};
`;

const WrapGridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    margin: auto;
    box-sizing: border-box;
    min-height: 100vh;

    
    ${(props)=>props.padding ? `padding : ${props.padding};` : ''};
    ${(props)=>props.margin ? `margin : ${props.margin};` : ''};
    ${(props)=>props.bg ? `background-color : ${props.bg};` : ''};
    ${(props)=>props.is_flex ? `display: flex; align-items: center; justify-content: space-between;` : ''};
    ${(props)=>props.center ? 'text-align : center;' : ''};
    ${(props)=>props.maxheight ? `max-height : ${props.maxheight};` : ''};
`;


export default Grid;