import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";
import "moment";
import moment from "moment";

const SET_SCH = "SET_SCH"
const LOAD_SCH = "LOAD_SCH";
const ADD_SCH = "ADD_SCH";
const EDIT_SCH = "EDIT_SCH";
const DEL_SCH = "DEL_SCH";

const setSch = createAction(SET_SCH, (sch_list) => ({ sch_list }));
const loadSch = createAction(LOAD_SCH, (sch_list) => ({ sch_list }));
const addSch = createAction(ADD_SCH, (sch) => ({ sch }));
const editSch = createAction(EDIT_SCH, (sch_id) => ({ sch_id }));
const delSch = createAction(DEL_SCH, (sch_id) => ({ sch_id }));

const initialState = {
  sch_list: [
      {id : 'aaaa1', title : '앙 해야대1' , date : '2021-10-11', is_end : false},
      {id : 'aaaa2', title : '앙 해야대2' , date : '2021-10-12', is_end : true},
      {id : 'aaaa3', title : '앙 해야대3' , date : '2021-10-16', is_end : false},
      {id : 'aaaa4', title : '앙 해야대4' , date : '2021-10-29', is_end : false},
  ],
};

export default handleActions(
  {
    [LOAD_SCH]: (state, action) => produce(state, (draft) => {}),
    [ADD_SCH]: (state, action) => produce(state, (draft) => {
        draft.sch_list.unshift(action.payload.sch)
    }),
    [EDIT_SCH]: (state, action) => produce(state, (draft) => {}),
    [DEL_SCH]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  loadSch,
  addSch,
  editSch,
  delSch,
};

export { actionCreators };
