import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 'a',
        name: "checklist1",
        tasks: [
            { id:10, content: "Buy Milk" },
            { id:11, content: "Buy Cheese" }
        ]
    },
    {
        id: 'b',
        name:"checklist2",
        tasks: [
            { id:10, content: "Excercise" },
            { id:11, content: "Meditate" }
        ]
    },

]

export const checklistsSlice = createSlice({
    name: 'checklists',
    initialState,
    reducers: {
        checklistAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { checklistAdded } = checklistsSlice.actions

export default checklistsSlice.reducer