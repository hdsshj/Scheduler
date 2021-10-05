import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import NewCalendar from './NewCalendar';


function App() {
  return (
 
      <NewCalendar/>
    )
  ;
}

export default App;
