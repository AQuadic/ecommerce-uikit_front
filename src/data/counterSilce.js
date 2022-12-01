import { configureStore } from "@reduxjs/toolkit";

import counterreducer from'./data';
const store = configureStore({reducer:{counter:counterreducer}})
export default store;