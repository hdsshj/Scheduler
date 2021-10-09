import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as schActions } from "../redux/modules/schedule";

import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; 

import SchDetail from "../components/SchDetail";

import { Button, Grid } from "../elements";

import "moment";
import moment from "moment";


const Calendar = (props) => {
  const dispatch = useDispatch();


  const sch_list = useSelector((state) => state.schedule.sch_list);

  // popup 출력 여부를 redux에서 관리한다.
  // 처음에 팝업이 잘 안되서 이것 저것 해보다가 마지막으로 리덕스에 넣어봤는데 그래도 기능은 안됐었다.
  // 해결은 했으나 굳이 안바꿔도 될 것 같아 그냥 리덕스로 관리한다.ㅎ
  const handlePopup = useSelector((state) => state.schedule.is_popup);
  const show_end = useSelector((state) => state.schedule.show_end);

    // 이벤트 ID
    const [sch_id, setSchId] = React.useState("");

  //완료 일정 보기
  //state의 show_end값을 체크하여 true => false, false => true 변경
  const onEndSch = () => {
    if (!show_end) {
      dispatch(schActions.showSch(true));
    } else {
      dispatch(schActions.showSch(false));
    }
  };


  React.useEffect(() => {
      dispatch(schActions.loadSchFB());
  }, []);

  // 배열을 복사해야 한다 이거때매 시간 다날렸다 ㅎㅎ;
  const _sch_list = sch_list.slice();


  // 배열은 insert_dt 순으로 정렬이 되었는데
  // calendar 에서는 여전히 멋대로 정렬을 한다.

  // 알고보니 Fullcalander 자체적으로 sort를 했다!
  const sort_sch_list = _sch_list.sort(function (a, b) {
    return (
      moment([a.insert_dt], "YYYY-MM-DD hh:mm:ss") -
      moment([b.insert_dt], "YYYY-MM-DD hh:mm:ss")
    );
  });

  // 클릭 시 이벤트 정보 받아옴
  const handleEventClick = (clickInfo) => {
    // 리덕스 에서 팝업 관리
    setSchId(clickInfo.event.id);

    if (!handlePopup) {
      dispatch(schActions.onPopup(true));
    }
  };


  // const handleDateClick = (arg) => {
  //   // bind with an arrow function
  //   console.log(arg);
  // };

  // const handleDateSelect = (selectInfo) => {
  //   console.log(selectInfo);
  // };

  return (
    <Grid
      border_radius="30px"
      height="100%"
      bg="#FEF1E6"
      width="80%"
      padding="30px"
      shadow = '0 10px 20px rgba(0, 0, 0, 0.6), 0 6px 4px rgba(0, 0, 0, 0.2)'
    >
      {handlePopup && (
        <SchDetail
          sch_id={sch_id}

        />
      )}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventClick={handleEventClick}
        editable = {true}
        weekends={true}
        // 일정 추가 페이지에서 props로 이벤트를 받아옴
        events={sort_sch_list}
        height="80vh"
        padding="100px"
        dayMaxEventRows="true"
        eventColor="#90AACB"
      />
      <Button is_float_s _onClick={onEndSch}>
        {show_end ? "모두!" : "완료!"}
      </Button>
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
