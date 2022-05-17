import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pets: [
        {
            id: Date.now() + 2,
            name: 'Lucy',
            breed: 'Pomeranian',
            type: 'Dog',
            owner: 'Joe Cohens'
        }
    ],
    owners: [
        {   
            petOwner: {
                firstName: 'Elijah',
                lastName: 'Smith',
            },              
            id: Date.now() + 3,
        },
        {   
            petOwner: {
                firstName: 'Joe',
                lastName: 'Cohens',
                pet: 'Lucy'
            },                
            id: Date.now() + 1,              
        }
    ]
}

export const listsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {

    }
})

export const {} = listsSlice.actions

export default listsSlice.reducer