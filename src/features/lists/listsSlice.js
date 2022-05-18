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
            firstName: 'Elijah',
            lastName: 'Smith',            
            id: Date.now() + 3,
            label: 'Elijah Smith'
        },
        {   
            firstName: 'Joe',
            lastName: 'Cohens',
            pet: 'Lucy',              
            id: Date.now() + 1,
            label: 'Joe Cohens'              
        }
    ]
}

export const listsSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        createPet(state, action) {
            const { pet } = action.payload;

            pet.label = pet.name
            pet.id = pet.id ? pet.id : Date.now()

            if (pet.owner) {
                let owner = state.owners.find(o => o.label === pet.owner)
                owner.pet = pet.name 
            }

            state.pets.push(pet)
        },
        updatePet(state, action) {
            const { petId, update } = action.payload
            const petIndexAtId = state.pets.findIndex( pet => pet.id === petId)
            if (petIndexAtId > -1 && update) {
                state.pets[petIndexAtId] = update
            }
        },
        deletePet(state, action) {
            const { petId } = action.payload
            const petIndexAtId = state.pets.findIndex( pet => pet.id === petId)
            if (petIndexAtId > -1) {
                state.pets.splice(petIndexAtId, 1)
            }
        },
        createOwner(state, action) {
            const { owner } = action.payload
            const newItem = {
                ...owner.petOwner,
                id: owner.id ? owner.id : Date.now(),
                label: owner.petOwner ? `${owner.petOwner.firstName} ${owner.petOwner.lastName}` : `${owner.firstName} ${owner.lastName}`
            }
            state.owners.push(newItem)
        },
        updateOwner(state, action) {
            const { ownerId, update } = action.payload
            const ownerIndexAtId = state.owners.findIndex( pet => pet.id === ownerId)
            if (ownerIndexAtId > -1 && update) {
                state.owners[ownerIndexAtId] = update
            }
        },
        deleteOwner(state, action) {
            const { ownerId } = action.payload
            const ownerIndexAtId = state.owners.findIndex( owner => owner.id === ownerId)
            if (ownerIndexAtId > -1) {
                state.owners.splice(ownerIndexAtId, 1)
            }
        }

    }
})

export const { createPet, updatePet, deletePet, createOwner, updateOwner, deleteOwner } = listsSlice.actions

export default listsSlice.reducer