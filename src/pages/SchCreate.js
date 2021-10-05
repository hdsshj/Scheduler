import React from 'react';
import { Grid, Input, Text, Button } from "../elements";
import { actionCreators as schAction } from '../redux/modules/schedule';
import {useDispatch} from 'react-redux'
import { history } from "../redux/configStore";


const SchCreate = (props) => {
    const dispatch = useDispatch()
    const [schedule, setSchedule] = React.useState('');
    const [date, setDate] = React.useState('');



    const changeSch = (e) => {
      setSchedule(e.target.value)
      console.log(e.target.value)
    }

    const changeDate = (e) => {
      setDate(e.target.value)
      console.log(e.target.value)
    }

    const createSch = () => {
      console.log(schedule, date)
      dispatch(schAction.addSch({schedule : schedule , date : date}))
    }

    return (
        <React.Fragment>
      <Grid padding="30px">
        <Grid>
          <Text>일정 내용</Text>
          <Input type = 'text' _onChange = {changeSch}/>
        </Grid>
        <Grid>
          <Text>일시</Text>
          <Input type = 'text' _onChange = {changeDate}/>
        </Grid>
        <Grid is_flex>
          <Grid padding = '16px'>
            <Button>작성 취소</Button>
          </Grid>

          <Grid padding = '16px'>
            <Button _onClick = {createSch}>작성 완료</Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    )
    };

export default SchCreate;