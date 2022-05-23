import React from 'react'
import PetModal from './PetModal'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { createPet, deletePet, updatePet } from '../features/lists/listsSlice';


function PetList() {
    const dispatch = useDispatch()
    const owners = useSelector(state => state.lists.owners)
    const pets = useSelector(state => state.lists.pets)
     
    const handleAddPet = pet => {
        console.log(pet)
        dispatch(createPet({pet}))
    };

    const handleUpdatePet = (pet) => {
        dispatch(updatePet({petId: pet.id, update: pet}))
    }

    const handleDeletePet = (pet) => {
        dispatch(deletePet({petId: pet.id}))
    }

    const columns = [
        { id: 'id', label: 'Id', minWidth: 100 },
        { id: 'name', label: 'Name', minWidth: 150 },
        { id: 'breed', label: 'Breed', minWidth: 150 },
        { id: 'type', label: 'Type', minWidth: 150 },
        { id: 'owner', label: 'Owner\'s Name', minWidth: 150 },
        { id: 'action'}
    ];

    return (
        <div>
             <Stack  
                direction="row"
                spacing={2}
                style={{ margin: '15px' }}
                alignItems="center"
            >
                <h2>Pet List</h2>
                <PetModal onSubmit={handleAddPet} title="Add new pet" ownerList={owners} key="add" pet={{name: '', type: '', breed: '', owner: ''}}/>
            </Stack>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pets.map((row) => {
                            return (
                                <TableRow hover key={row.id}>
                                    {columns.map((column) => {
                                        if(column.id === 'action') {
                                            return (
                                                <TableCell key={column.id}>
                                                    <Stack
                                                        direction="row"
                                                        divider={<Divider orientation="vertical" flexItem />}
                                                        spacing={2}
                                                    >
                                                        <Button variant="outlined" onClick={() => handleDeletePet(row)}>Delete</Button>
                                                        <PetModal onSubmit={handleUpdatePet} title='Update' pet={row} key={column.id} ownerList={owners}/>
                                                    </Stack>
                                                </TableCell>
                                            )
                                        } else {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id}>
                                                    {value}                        
                                                </TableCell>
                                            )
                                        }
                                    })}             
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>    
        </div>
    )
}

export default PetList