import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import Grid from "../elements/Grid";
import { history } from "../redux/configStore";

import {useSelector} from 'react-redux'
import { map } from "lodash";
import { Button } from "../elements";

const Calendar = (props) => {
  const sch_list = useSelector((state) => state.schedule.sch_list)


  const a = () => {
    console.log(Calendar.getEventSource())
  }
  
  
  const {events} = props;

  const handleDateClick = (arg) => { // bind with an arrow function
    console.log(arg)
  }

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    history.push(`/detail/${clickInfo.event.id}`) 
    // console.log(clickInfo.event.title) // title 값 나옴
    }

  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo) 
    
    }
  
  
  
  return (

    <Grid width="70%" padding="30px">
      <Button _onClick = {a}/>
      <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        initialView="dayGridMonth"
        selectable = {true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        select={handleDateSelect}
        weekends={true}
        // 일정 추가 페이지에서 props로 이벤트를 받아옴
        events={sch_list}
        height="90vh"
        eventClassNames = 'myclassname'
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
