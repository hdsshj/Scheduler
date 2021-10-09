import React, { useRef } from "react";

import { useDispatch } from "react-redux";
import { actionCreators as schAction } from "../redux/modules/schedule";
import { history } from "../redux/configStore";

import TextField from "@mui/material/TextField";

import { Grid, Button } from "../elements";

import "moment";
import moment from "moment";

const SchCreate = (props) => {
  const dispatch = useDispatch();
  const title = useRef("");
  const time = useRef("");
  const date = useRef("");

  const nowDate = moment().format("YYYY-MM-DD");
  const nowtime = moment().format("hh:mm");

  // 머티리얼 텍스트필드에서 동작을 안한다.. 방법을 찾아봐야 한다 메모..
  // 일단은 Ref로 해결함! (근데 이거도 input Ref 써야된다!)

  // const [title, setTitle] = React.useState('');
  // const [start_date, setStartDate] = React.useState('');
  // const [start_time, setStartTime] = React.useState('');
  // const [end_date, setEndDate] = React.useState('');
  // const [end_time, setEndTime] = React.useState('');

  // const changeTitle = (e) => {
  //   setTitle(e.target.value)
  //   console.log(e.target.value)
  // }

  // const changeStartDate = (e) => {
  //   setStartDate(e.target.value)
  //   console.log(e.target.value)
  // }

  // const changeStartTime = (e) => {
  //   setStartTime(e.target.value)
  //   console.log(e.target.value)
  // }

  // const changeEndDate = (e) => {
  //   setEndDate(e.target.value)
  //   console.log(e.target.value)
  // }

  // const changeEndTime = () => {
  //   setEndTime(e.target.value)
  // }

  //'2010-01-09T12:30:00'

  // Schedule 추가
  const createSch = () => {
    // data는 defaule value 값을 넣어 두었지만 체크해도 나쁠건 없겠다
    if (title.current.value === "" || date.current.value === "") {
      window.alert("일정을 입력해주세요!");
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

  return (
    <Grid main>
      <Grid width="70%" height="300px" padding="150px 60px 0px 60px">
        <Grid
          border_radius="25px"
          bg="#FEF1E6"
          padding="30px"
          shadow="0 10px 20px rgba(0, 0, 0, 0.6), 0 6px 4px rgba(0, 0, 0, 0.2)"
        >
          <Grid width="90%" margin="30px auto">
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
          <Grid is_flex padding="30px">
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
