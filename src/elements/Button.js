import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {children, height, short, _onClick, is_float, crud, padding, width, margin} = props;

    const styles = {
        height:height,
        padding:padding,
        width:width,
        margin:margin
    }
    if (short){
        return (
            <React.Fragment>
                <ShortBtn onClick = {_onClick} {...styles}>{children}</ShortBtn>
            </React.Fragment>
        );
    }
    
    if (is_float){
        return (
            <React.Fragment>
                <FloatBtn onClick = {_onClick} {...styles}>{children}</FloatBtn>
            </React.Fragment>
        );
    }

    if (crud){
      return (
            <React.Fragment>
                <MyBtn onClick = {_onClick} {...styles}>{children}</MyBtn>
            </React.Fragment>
        );  
    }

    
    
        return (
            <React.Fragment>
                <Btn onClick = {_onClick} {...styles}>{children}</Btn>
            </React.Fragment>
        );
   
    


  
}

Button.defaultProps = {
    children : null,
    short : false,
    height : '50px',
    _onClick: () => {},
    is_float : false,
    crud : false,
    is_me : false,
    padding : '12px 0px',
    width : '100%',
    margin: '10px'
}

const ShortBtn = styled.button`
    width: 25%;
    background-color: #C4C4C4;
    color: #222831;
    border : 0px;
    margin: 8px;
    padding: 0px;

    height:${(props) => props.height};

`;

const Btn = styled.button`
    width: 100%;
    background-color: #222831;
    color: #FFF;
    border : 0px;
    margin-top: 28px;
    
    height:${(props) => props.height};
`;

const MyBtn = styled.button`
    width: ${(props) => props.width};
    border : 0px;
    margin: ${(props) => props.margin};
    background-color: #222831;
    color: #FFF;
    height: ${(props) => props.height};
    border-radius: 4px;
`;

const FloatBtn = styled.button`
    width: 50px;
    height: 50px;
    background-color: #212121;
    color: #FFF;
    border : none;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 0px;
    font-size: 30px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
`;

export default Button;

