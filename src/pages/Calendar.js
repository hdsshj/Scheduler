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

  React.useEffect(() => {
    if (sch_list.length < 2) {
    dispatch(schActions.loadSchFB())
    }

  }, [])

  // const a = sch_list
  // console.log(sch_list)
  // a.sort(function (a, b) {
  //   return (
  //     moment(a["insert_dt"], "YYYY-MM-DD HH:mm:ss") -
  //     moment(b["insert_dt"], "YYYY-MM-DD hh:mm:ss")
  //   )
  // }
  // )


  console.log(sch_list)

  // 배열을 복사해야 한다 이거때매 시간 다날렸다 ㅎㅎ;
  const _sch_list = sch_list.slice()

 
    const sort_sch_list = _sch_list.sort(function (a, b) {
      return moment([a.insert_dt], "YYYY-MM-DD hh:mm:ss")-
      moment([b.insert_dt], "YYYY-MM-DD hh:mm:ss");
    });
    console.log(sort_sch_list);
  
  

 


 

  // sch_list.sort(function (a, b) {
  //   console.log(a.insert_dt > b.insert_dt)
  //   console.log(b.insert_dt)
  //   if (a.insert_dt  > b.insert_dt) {
  //     return 1;
  //   }
  //   if (a.insert_dt < b.insert_dt) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });

  // const idx = sch_list.findIndex((s) => s.id === sch_id);

  // const checkEnd = sch_list[idx] ? sch_list[idx].is_end : "";

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
    <Grid bg="#eee" width="70%" padding="30px">
      {handlePopup && <SchDetail sch_id={sch_id} />}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        select={handleDateSelect}
        weekends={true}
        // 일정 추가 페이지에서 props로 이벤트를 받아옴
        events={sort_sch_list}
        height="90vh"

        // eventColor = {checkEnd ? 'green' : 'black'}
      />
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
