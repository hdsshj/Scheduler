import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";

const SET_SCH = "SET_SCH";
const LOAD_SCH = "LOAD_SCH";
const ADD_SCH = "ADD_SCH";
const EDIT_SCH = "EDIT_SCH";
const DEL_SCH = "DEL_SCH";
const ON_POPUP = "ON_POPUP";

const setSch = createAction(SET_SCH, (sch_list) => ({ sch_list }));
const loadSch = createAction(LOAD_SCH, (sch_list) => ({ sch_list }));
const addSch = createAction(ADD_SCH, (sch) => ({ sch }));
const editSch = createAction(EDIT_SCH, (sch_id) => ({ sch_id }));
const delSch = createAction(DEL_SCH, (sch_id) => ({ sch_id }));
const onPopup = createAction(ON_POPUP, (is_popup) => ({ is_popup }));

const initialState = {
  sch_list: [
    { id: "aaaa1", title: "앙 해야대1", date: "2021-10-11", is_end: false },
    { id: "aaaa2", title: "앙 해야대2", date: "2021-10-12", is_end: false },
    { id: "aaaa3", title: "앙 해야대3", date: "2021-10-16", is_end: false },
    { id: "aaaa4", title: "앙 해야대4", date: "2021-10-29", is_end: false },
  ],
  is_popup: false,
};

export default handleActions(
  {
    [LOAD_SCH]: (state, action) => produce(state, (draft) => {}),
    [ADD_SCH]: (state, action) =>
      produce(state, (draft) => {
        draft.sch_list.unshift(action.payload.sch);
      }),
    [EDIT_SCH]: (state, action) => produce(state, (draft) => {
      let idx = draft.sch_list.findIndex((p) => p.id === action.payload.sch_id);

      draft.sch_list[idx] = { ...draft.sch_list[idx], is_end : true }
    }),
    [DEL_SCH]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.sch_list.findIndex((p) => p.id === action.payload.sch_id);
        draft.sch_list.splice(idx, 1);
      }),
    [ON_POPUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_popup = action.payload.is_popup;
      }),
  },
  initialState
);

const actionCreators = {
  loadSch,
  addSch,
  editSch,
  delSch,
  onPopup,
};

export { actionCreators };
