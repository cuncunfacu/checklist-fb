import { createSlice } from '@reduxjs/toolkit'
import initialState from '../../chData';

export const checklistsSlice = createSlice({
    name: 'checklists',
    initialState,
    reducers: {
        checklistAdded: (state, action) => {
            state.push(action.payload)
        },
        checklistCompleted: (state, action) => {
            const { id } = action.payload
            const existingChecklist = state.find(checklist => checklist.id === id)
            if(existingChecklist) {
                existingChecklist.completedTimes += 1
            }
        },
        checklistDeleted: (state, action) => {
            const { id } = action.payload
            return state.filter((checklist) => {
                return checklist.id !== id
            })
        }
    }
})

export const { checklistAdded, checklistCompleted, checklistDeleted } = checklistsSlice.actions

export default checklistsSlice.reducer