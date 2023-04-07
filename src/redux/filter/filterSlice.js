import { createSlice } from "@reduxjs/toolkit"

export const getFilter = (state) => state.filter


const filterSlice = createSlice({
	name: "filter",
	initialState: "",
	reducers: {
		setFilter(_, action) {
			return action.payload
		},
	},
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer