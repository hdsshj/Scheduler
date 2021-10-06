import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Input, Text, Button } from "../elements";
import { actionCreators as schActions } from "../redux/modules/schedule";

const SchDetail = (props) => {
  const {onClose} = props
  const dispatch = useDispatch();
  const sch_id = props.sch_id;
  const sch_list = useSelector((state) => state.schedule.sch_list);
  const sch_idx = sch_list.findIndex((s) => s.id === sch_id);
  const sch = sch_list[sch_idx];

  const handlePopup = useSelector((state) => state.schedule.is_popup)

  
  console.log(sch);
  const removeSch = (e) => {
    // 리덕스 에서 팝업 관리
    if(handlePopup){
      dispatch(schActions.onPopup(false))
    }
    dispatch(schActions.delSch(sch_id))
    }

    const endSch = (e) => {
      // 리덕스 에서 팝업 관리
      if(handlePopup){
        dispatch(schActions.onPopup(false))
      }
      dispatch(schActions.editSch(sch_id))
      }



  return (
    <Popup>
      <Grid padding="30px">
        <Grid>
          <Text>일정 내용</Text>
          <Input dvalue={sch?.title} />
        </Grid>
        <Grid>
          <Text>일시</Text>
          <Input dvalue={sch?.date} />
        </Grid>
        <Grid is_flex>
          <Grid padding="16px">
            <Button _onClick = {removeSch}>일정 삭제</Button>
          </Grid>

          <Grid padding="16px">
            <Button _onClick = {endSch}>일정 완료</Button>
          </Grid>
        </Grid>
      </Grid>
    </Popup>
  );
};

SchDetail.defaultProps = {
  contents: "React 배우기",
  date: "2021-10-07",
};

const Popup = styled.div`
  background-color: aqua;
  position: fixed;
  width: 40vw;
  top: 30vh;
  left: 30vw;
  z-index: 2;
`;

export default SchDetail;
