import { createAction, handleActions } from "redux-actions";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../shared/firebase";
import { produce } from "immer";
import "moment";
import moment from "moment";

const LOAD_SCH = "LOAD_SCH";
const ADD_SCH = "ADD_SCH";
const EDIT_SCH = "EDIT_SCH";
const DEL_SCH = "DEL_SCH";
const ON_POPUP = "ON_POPUP";
const SHOW_SCH = "SHOW_SCH";

// 액션 생성 함수
// CRUD
const loadSch = createAction(LOAD_SCH, (sch_list) => ({ sch_list }));
const addSch = createAction(ADD_SCH, (sch) => ({ sch }));
const editSch = createAction(EDIT_SCH, (sch_id) => ({ sch_id }));
const delSch = createAction(DEL_SCH, (sch_id) => ({ sch_id }));
// 팝업 모니터링
const onPopup = createAction(ON_POPUP, (is_popup) => ({ is_popup }));
// 모든 일정, 완료 일정 모니터링
const showSch = createAction(SHOW_SCH, (show_end) => ({ show_end }));

const initialState = {
  sch_list: [],
  is_popup: false,
  show_end: false,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

//미들웨어

//DB 로드
const loadSchFB = (start = null) => {
  return async function (dispatch, getState, { history }) {
    const sch_data = await getDocs(collection(db, "schedule"));
    let sch_list = [];

    sch_data.forEach((doc) => {
      sch_list.push({ id: doc.id, ...doc.data() });
    });

    dispatch(loadSch(sch_list));
  };
};

//DB 추가
const addSchFB = (sch) => {
  return async function (dispatch, getState, { history }) {
    const docRef = await addDoc(collection(db, "schedule"), sch);

    const sch_data = { id: docRef.id, ...sch };

    dispatch(addSch(sch_data));
  };
};

//DB 수정 (이지만 그냥 완료표시만 해둠)
const editSchFB = (sch_id) => {
  return async function (dispatch, getState, { history }) {
    const docRef = doc(db, "schedule", sch_id);
    await updateDoc(docRef, { is_end: true, color: "#FFB085" });

    const _sch_list = getState().schedule.sch_list;
    const _sch_idx = _sch_list.findIndex((s) => {
      return s.id === sch_id;
    });

    dispatch(editSch(_sch_list[_sch_idx].id));
  };
};

//DB 삭제
const delSchFB = (sch_id) => {
  return async function (dispatch, getState, { history }) {
    const docRef = doc(db, "schedule", sch_id);
    await deleteDoc(docRef);

    const _sch_list = getState().schedule.sch_list;
    const _sch_idx = _sch_list.findIndex((s) => {
      return s.id === sch_id;
    });
    dispatch(delSch(_sch_list[_sch_idx].id));
  };
};

//리듀서
export default handleActions(
  {
    [LOAD_SCH]: (state, action) =>
      produce(state, (draft) => {
        // draft.sch_list.push(...action.payload.sch_list);
        // draft.sch_list = draft.sch_list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);

        draft.sch_list = action.payload.sch_list;
      }),
    [ADD_SCH]: (state, action) =>
      produce(state, (draft) => {
        draft.sch_list.unshift(action.payload.sch);
      }),
    [EDIT_SCH]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.sch_list.findIndex(
          (s) => s.id === action.payload.sch_id
        );

        draft.sch_list[idx] = {
          ...draft.sch_list[idx],
          is_end: true,
          color: "#FFB085",
        };
      }),
    [DEL_SCH]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.sch_list.findIndex(
          (s) => s.id === action.payload.sch_id
        );
        draft.sch_list.splice(idx, 1);
      }),
    [ON_POPUP]: (state, action) =>
      produce(state, (draft) => {
        draft.is_popup = action.payload.is_popup;
      }),
    [SHOW_SCH]: (state, action) =>
      produce(state, (draft) => {
        draft.show_end = action.payload.show_end;

        if (draft.show_end) {
          draft.sch_list.map((s, idx) => {
            if (!s.is_end) {
              draft.sch_list[idx] = { ...s, display: "none" };
            }
          });
        } else {
          draft.sch_list.map((s, idx) => {
            draft.sch_list[idx] = { ...s, display: "block" };
            draft.show_end = false;
          });
        }
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
  showSch,
  loadSchFB,
  addSchFB,
  editSchFB,
  delSchFB,
};

export { actionCreators };
