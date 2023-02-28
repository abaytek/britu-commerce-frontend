import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token") || "",
  firstName: "",
  lastName: "",
  email: "",
  _id: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

// REGISTER USER
export const registerUser = createAsyncThunk(
  "/auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(url + "auth/register", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

// LOGIN USER
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(url + "auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const token = state.token;
      if (token) {
        // decode
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          firstName: user.firstName,
          lastName: user.lastName,
          _id: user._id,
        };
      }
    },
    logoutUser: (state, action) => {
      localStorage.clear("token");
      return {
        token: "",
        firstName: "",
        lastName: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return {
        ...state,
        registerStatus: "pending",
      };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        // Decode the values
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
        userLoaded: false,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return {
        ...state,
        loginStatus: "pending",
      };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        // Decode the values
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          _id: user._id,
          registerStatus: "success",
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
        userLoaded: false,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
