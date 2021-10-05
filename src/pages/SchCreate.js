import React from 'react';
import { Grid, Input, Text, Button } from "../elements";


const SchCreate = (props) => {
    return (
        <React.Fragment>
      <Grid padding="30px">
        <Grid>
          <Text>일정 내용</Text>
          <Input />
        </Grid>
        <Grid>
          <Text>일시</Text>
          <Input />
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
    )
    };

export default SchCreate;