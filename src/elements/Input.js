import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const {
    disabled,
    width,
    height,
    textarea,
    _ref,
    place,
    type,
    children,
    _onChange,
    margin,
    padding,
    value,
    is_submit,
    onSubmit,
    dvalue,
  } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
  };

  if (textarea === true) {
    return (
      <React.Fragment>
        <label>{children}</label>
        <AreaBox
          {...styles}
          defaultValue={value}
          placeholder={place}
          onChange={_onChange}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <label>{children}</label>
      {is_submit ? (
        <Box
          ref={_ref}
          {...styles}
          defaultValue={dvalue}
          value={value}
          type={type}
          placeholder={place}
          onChange={_onChange}
          disabled={disabled}
          // 엔터 키보드 이벤트
          onKeyPress = {(e) => {
            if(e.key === 'Enter'){
              onSubmit(e);
            }
          }}
        />
      ) : (
        <Box
          ref={_ref}
          {...styles}
          type={type}
          defaultValue={dvalue}
          value = {value}
          placeholder={place}
          onChange={_onChange}
          disabled={disabled}
          onKeyPress = {(e) => {
            if(e.key === 'Enter'){
              onSubmit(e);
            }
          }}
        />
      )}
    </React.Fragment>
  );
};

Input.defaultProps = {
  children: null,
  _ref: null,
  textarea: false,
  type: "text",
  place: null,
  width: "100%",
  height: "50px",
  margin: false,
  padding: false,
  disabled: false,
  value: null,
  dvalue:null,
  _onChange: () => {},
  is_submit: false,
  onSubmit : false,
};

const AreaBox = styled.textarea`
  width: ${(props) => props.width};
  height: 30vh;
  box-sizing: border-box;
`;

const Box = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
`;

export default Input;
