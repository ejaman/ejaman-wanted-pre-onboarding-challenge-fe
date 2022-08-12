import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isLoggedIn: boolean;
  userData: UserData; // TODO: any 수정하기
};

// 액션 Payload 타입
export type UserData = {
  email: string;
  password: string;
};

const initialState: UserState = {
  isLoggedIn: false,
  userData: { email: "", password: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction(state: UserState, action: PayloadAction<UserData>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logoutAction(state: UserState) {
      state.isLoggedIn = false;
      state.userData = { email: "", password: "" };
    },
  },
});

// export default counterSlice; === userslice 위치
export default userSlice;
