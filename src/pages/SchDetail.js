import React from "react";
import { Grid, Input, Text, Button } from "../elements";

const SchDetail = (props) => {
    const {contents, date} = props;

  return (
    <React.Fragment>
      <Grid padding="30px">
        <Grid>
          <Text>일정 내용</Text>
          <Input dvalue = {contents}/>
        </Grid>
        <Grid>
          <Text>일시</Text>
          <Input dvalue = {date}/>
        </Grid>
        <Grid is_flex>
          <Grid padding = '16px'>
            <Button>작성 취소</Button>
          </Grid>

          <Grid padding = '16px'>
            <Button>작성 완료</Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

SchDetail.defaultProps = {
    contents : 'React 배우기',
    date : '2021-10-07',
}

export default SchDetail;
