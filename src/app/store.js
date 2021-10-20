import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice.js';
import userReducer from '../features/userSlice.js';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
