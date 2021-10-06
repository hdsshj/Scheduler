import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import Grid from "../elements/Grid";
import { history } from "../redux/configStore";

import {useSelector, useDispatch} from 'react-redux'
import { actionCreators as schActions } from "../redux/modules/schedule";
import { map } from "lodash";
import { Button } from "../elements";
import SchDetail from "./SchDetail";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const [schdetail, handleSchDetail] = React.useState(false)
  const [sch_id, setSchId] = React.useState('')
  const sch_list = useSelector((state) => state.schedule.sch_list)
  const handlePopup = useSelector((state) => state.schedule.is_popup)

  
  const {events} = props;

  const handleDateClick = (arg) => { // bind with an arrow function
    console.log(arg)
  }

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    // 리덕스 에서 팝업 관리
    setSchId(clickInfo.event.id)
    if(!handlePopup){
      dispatch(schActions.onPopup(true))
    }
    // handleSchDetail(true)

    // history.push(`/detail/${clickInfo.event.id}`) 
    // console.log(clickInfo.event) // title 값 나옴
    
    }


  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo) 
    
    }
  
  
  
  return (

    <Grid width="70%" padding="30px">
      {handlePopup && <SchDetail onClose = {handleSchDetail} sch_id = {sch_id}/>}
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
