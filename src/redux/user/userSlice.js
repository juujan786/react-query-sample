import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState:{
    access_token: null,
    refresh_token: null,
    user: null
  },
  reducers: {
    setToken(state,action){
        state.access_token = action.payload.access_token;
        state.refresh_token = action.payload.refresh_token;
    },
    setUser(state, action) {
      state.user = action.payload.user
    },
  },
})

export const { setToken, setUser } = userSlice.actions
export default userSlice.reducer