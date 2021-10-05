import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Grid from '../elements/Grid';

const NewCalendar = (props) => {
  
  return (
    <Grid padding = '30px'>
 
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      weekends={false}
      // 상세페이지에서 props로 이벤트를 받아옴
      events={[
        { title: 'event 1', date: '2021-10-06' },
        { title: 'event 2', date: '2021-10-08' }
      ]}
      height = '90vh'
    />
    </Grid>
  )
;
        };

export default NewCalendar;