import moment from "moment";
import "moment";

const list = [
  {
    title: "이거완전 0번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:31:30",
  },
  {
    title: "이거완전 1번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:31:54",
  },
  {
    title: "이거완전 2번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:32:54",
  },
  {
    title: "이거완전 5번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:35:54",
  },
  {
    title: "이거완전 3번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:33:54",
  },
  {
    title: "이거완전 4번째",
    date: "2021-10-08",
    insert_dt: "2021-10-08 11:34:54",
  },
];

// let a = moment().format('YYYY-MM-DD')
// let b = moment().format('YYYY-MM-DD hh:mm:ss')

// for(let i = 0; i<11; i++){
//     list.push({title : `이거완전 ${i}번째`, date : `${a}`, insert_dt : `${b}`})
// }
list.sort(function(a,b) {
    let _a = moment([a.insert_dt], );
    let _b = moment([b.insert_dt], );
    

    console.log(_a, '경계선', _b);
    // return a.insert_dt - b.insert_dt;
})


