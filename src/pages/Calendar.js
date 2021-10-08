import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // a plugin!
import Grid from "../elements/Grid";
import { history } from "../redux/configStore";
import "moment";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as schActions } from "../redux/modules/schedule";
import { map } from "lodash";
import { Button } from "../elements";
import SchDetail from "./SchDetail";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const [sch_id, setSchId] = React.useState("");
  const sch_list = useSelector((state) => state.schedule.sch_list);
  const handlePopup = useSelector((state) => state.schedule.is_popup);
  const [open, setOpen] = React.useState(false);

  const show_end = useSelector((state) => state.schedule.show_end)


  const onEndSch = () => {
     if(!show_end){
      dispatch(schActions.showSch(true))
     }else{
      dispatch(schActions.showSch(false))
     }
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (sch_list.length < 2) {
    dispatch(schActions.loadSchFB())
    }

  }, [])


  console.log(sch_list)

  // 배열을 복사해야 한다 이거때매 시간 다날렸다 ㅎㅎ;
  const _sch_list = sch_list.slice()
 
    const sort_sch_list = _sch_list.sort(function (a, b) {
      return moment([a.insert_dt], "YYYY-MM-DD hh:mm:ss")-
      moment([b.insert_dt], "YYYY-MM-DD hh:mm:ss");
    });
    console.log(sort_sch_list);
  
  

  const handleDateClick = (arg) => {
    // bind with an arrow function
    console.log(arg);
  };

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    // 리덕스 에서 팝업 관리
    setSchId(clickInfo.event.id);

    if (!handlePopup) {
      dispatch(schActions.onPopup(true));
    }

    // handleSchDetail(true)

    // history.push(`/detail/${clickInfo.event.id}`)
    // console.log(clickInfo.event) // title 값 나옴
  };

  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
  };

  return (
    <Grid border_radius = '30px' height = '100%'  bg="#FEF1E6" width="70%" padding="30px">
      {handlePopup && <SchDetail sch_id={sch_id} handleOpen = {handleOpen} handleClose = {handleClose}/>}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        select={handleDateSelect}
        weekends={true}
        // 일정 추가 페이지에서 props로 이벤트를 받아옴
        events={sort_sch_list}
        
        height="80vh"
        padding = '100px'
        dayMaxEventRows = 'true'

        eventColor = '#90AACB'
      />
      <Button is_float_s _onClick = {onEndSch}>{show_end ? '모두!' : '완료!'}</Button>

    </Grid>
  );
};

Calendar.defaultProps = {
  events: [
    { title: "내선리", date: "2021-10-06" },
    { title: "악깡버", date: "2021-10-07" },
    { title: "공부해라", date: "2021-10-08" },
  ],
};

export default Calendar;
