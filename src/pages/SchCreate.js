import React, { useRef } from "react";
import { Grid, Input, Text, Button } from "../elements";
import { actionCreators as schAction } from "../redux/modules/schedule";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

import { styled, Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import ModalUnstyled from "@mui/core/ModalUnstyled";

import "moment";
import moment from "moment";

const SchCreate = (props) => {
  const dispatch = useDispatch();
  const title = useRef("");
  const time = useRef("");
  const date = useRef("");

  const insert_dt = moment().format("YYYY-MM-DD hh:mm:ss");

  // const [title, setTitle] = React.useState('');
  // const [start_date, setStartDate] = React.useState('');
  // const [start_time, setStartTime] = React.useState('');
  // const [end_date, setEndDate] = React.useState('');
  // const [end_time, setEndTime] = React.useState('');

  // const changeTitle = (e) => {
  //   setTitle(title.current.value)
  //   console.log(title.current.value)
  // }

  // const changeStartDate = (e) => {
  //   setStartDate(date.current.value)
  //   console.log(date.current.value)
  // }

  // const changeStartTime = (e) => {
  //   setStartTime(time.current.value)
  //   console.log(time.current.value)
  // }

  // const changeEndDate = (e) => {
  //   setEndDate(e.target.value)
  //   console.log(e.target.value)
  // }

  // const changeEndTime = () => {
  //   setEndTime(title.current.value)
  // }

  //'2010-01-09T12:30:00'

  const createSch = () => {
    if(title.current.value === '' || date.current.value === ''){
      window.alert('일정을 입력해주세요!')
      return;
    }
    dispatch(
      schAction.addSchFB({
        title: title.current.value,
        start: date.current.value + "T" + time.current.value,
        is_end: false,
        display: "block",
      })
    );
    history.push("/");
  };

  const nowDate = moment().format("YYYY-MM-DD");
  const nowtime = moment().format("hh:mm");

  return (
    <Grid main>
      <Grid  width="70%" height = '300px' padding = '150px 60px 0px 60px'>
        <Grid  border_radius  = '25px' bg="#FEF1E6" padding="30px">
          <Grid  width="90%" margin="30px auto">
            <TextField
              sx={{ width: "100%" }}
              inputRef={title}
              label="일정 입력"
              variant="outlined"
            />
          </Grid>
          <Grid width="90%" is_flex>
            <TextField
              sx={{ width: "50%" }}
              type="date"
              inputRef={date}
              variant="outlined"
              defaultValue={nowDate}
            />
            <TextField
              sx={{ width: "45%" }}
              inputRef={time}
              type="time"
              defaultValue={nowtime}
              variant="outlined"
            />
          </Grid>
          <Grid is_flex padding =  '30px'>
              <Button
                _onClick={() => {
                  history.replace("/");
                }}
              >
                작성 취소
              </Button>
              <Button _onClick={createSch}>작성 완료</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SchCreate;
