import { createSlice } from "@reduxjs/toolkit";

const init = {
  target_product: "aliiiiiiiiiiiiiiiii",
  category_id: 0,
  value: 1,
  id: "",
  name: "ahmed",
  countts: 1,
  allitem: [],
  itempay: [],
  qitem: 0,
  totelprice: 1,
  getdata: {
    name:"ahmed",
    id: "ahmed",
    imgurl: "./images/AdobeStock_236655482.svg",
    qiitem: 1,
    countitem: 1,
  },
};
const counterslice = createSlice({
  name: "counter",
  initialState: init,
  reducers: {
    send_data: (state, action) => {
      state.target_product = action.payload;
    },
    category_id: (state, action) => {
      state.category_id = action.payload;
    },

    inc: (state) => {
      state.value -= 1;
    },
    owl: (state, action) => {
      state.id = action.payload;
    },
    idowl: (state, action) => {
      state.name = action.payload;
    },
    recount: (state, action) => {
      state.countts = 1;
      state.getdata.qiitem = 1;
    },
    counter: (state, action) => {
      state.countts += action.payload;
      state.getdata.qiitem = state.countts;
      console.log(state.getdata.qiitem);
    },
    additem: (state, action) => {
      state.allitem.push({
        name: state.name,
        color: "black",
        count: state.countts,
        id: state.id,
      });
    },
    sendata: (state, action) => {
      state.getdata.name = action.payload.name;
      state.getdata.id = action.payload.id;
      state.getdata.imgurl = action.payload.imgurl;
      state.getdata.countitem = state.countts;
    },
    pay: (state, action) => {
      state.qitem++;

      const id = state.getdata.id;
      const itemfounded = state.itempay.find((item) => item.id === id);

      if (!itemfounded) {
        state.itempay.push(state.getdata);
      } else {
        const curentitem = state.itempay.filter(
          (item, index) => item.id === id
        );

        curentitem[0].qiitem += state.getdata.qiitem;
        curentitem[0].countitem = state.countts;
        console.log(curentitem[0].qiitem);
        /*state.countts++;*/
      }
      state.totelprice = state.itempay.reduce(
        (total, price) => total + price,
        0
      );
      console.log(state.totelprice);
      console.log(state.itempay[0].id);

      state.qitem = state.itempay.reduce((acc, curr) => acc + curr.qiitem, 0);
      state.totelprice = state.qitem * 90 - 0.01;
      console.log(state.getdata.qiitem);
    },

    removeitem: (state, action) => {
      const id = action.payload;
      const fill = state.itempay.filter((item) => item.id !== id);
      console.log(fill.qiitem);
      state.qitem = fill.reduce((acc, curr) => acc + curr.countitem, 0);
      state.totelprice = state.qitem * 90;
      state.itempay = fill;
    },
  },
});

export const counteraction = counterslice.actions;
export default counterslice.reducer;
