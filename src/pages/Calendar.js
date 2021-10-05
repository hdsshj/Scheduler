import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Grid from "../elements/Grid";

import {useSelector} from 'react-redux'
import { map } from "lodash";
import { Button } from "../elements";

const Calendar = (props) => {
  const sch_list = useSelector((state) => state.schedule.sch_list)


  const ev = [];

  sch_list.map((l,idx) => {
    console.log(l[idx])
  })

     console.log(sch_list)

  const a = () => {
    Calendar.addEventSource( '추가해줘' )
  }
  
  const {events} = props;

  return (

    <Grid width="70%" padding="30px">
      <Button _onClick = {a} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        // 일정 추가 페이지에서 props로 이벤트를 받아옴
        events={sch_list}
        height="90vh"
      />
    </Grid>
  );
};

Calendar.defaultProps = {
  events : [
    { title: '내선리', date: "2021-10-06" },
    { title: '악깡버', date: "2021-10-07" },
    { title: "공부해라", date: "2021-10-08" },
  ],
}

export default Calendar;
