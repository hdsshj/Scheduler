import React from "react";
// import styled from "styled-components";
import { styled, Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import { useSelector, useDispatch } from "react-redux";
import { Grid, Input, Text, Button } from "../elements";
import { actionCreators as schActions } from "../redux/modules/schedule";

const SchDetail = (props) => {
  const dispatch = useDispatch();
  const sch_id = props.sch_id;
  const sch_list = useSelector((state) => state.schedule.sch_list);
  const sch_idx = sch_list.findIndex((s) => s.id === sch_id);
  const sch = sch_list[sch_idx];

  const handlePopup = useSelector((state) => state.schedule.is_popup)

  const {onClose} = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  console.log(sch);
  const removeSch = (e) => {
    // 리덕스 에서 팝업 관리
    if(handlePopup){
      dispatch(schActions.onPopup(false))
    }
    dispatch(schActions.delSchFB(sch_id))
    }

    const endSch = (e) => {
      // 리덕스 에서 팝업 관리
      if(handlePopup){
        dispatch(schActions.onPopup(false))
      }
      dispatch(schActions.editSchFB(sch_id))
      }

      const exc_pop = () => {
        dispatch(schActions.onPopup(false))
      }

      const sch_date = sch.start.split('T')[0]
      const sch_time = sch.start.split('T')[1]

      console.log(sch.start.split('T')[1])

  return (
    <div>
      
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={handlePopup}
        onClose={exc_pop}
        BackdropComponent={Backdrop}
      >
        <Popup>
        <Grid padding="30px">
        <Grid width = '90%' margin = '30px auto'>
          <TextField sx={{width : '100%'}} label="Todo" variant="outlined" value={sch?.title} disabled/>
        </Grid>
        <Grid width = '90%' is_flex>
          <TextField sx={{width : '50%'}} type = 'date' variant="outlined" value={sch_date} disabled/>
          <TextField sx={{width : '45%', step : '600'}}  type = 'time' variant="outlined" value={sch_time} disabled/>
          
          
        </Grid>
        <Grid is_flex padding =  '30px'>
            <Button _onClick = {removeSch}>일정 삭제</Button>

            <Button _onClick = {endSch}>일정 완료</Button>
        </Grid>
      </Grid>
        </Popup>
      </StyledModal>
    </div>
  );
};

SchDetail.defaultProps = {
  contents: "React 배우기",
  date: "2021-10-07",
};

const Popup = styled('div')`
  background-color: #FEF1E6;
  position: fixed;
  border-radius: 30px;
  width: 40vw;
  top: 30vh;
  left: 30vw;
  z-index: 2;
`;

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  
`;

const style = {
  width: 400,
  bgcolor: 'white',
  border: '0px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default SchDetail;
