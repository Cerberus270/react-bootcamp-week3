import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import FormTodo from './FormTodo'
import ListTodo from './ListTodo'

const Todo = () => {
    return (
        <div>
            <Container maxW='1000px'>

                <FormTodo />
                <Box mt={2}>
                    <ListTodo />
                </Box>
                <ToastContainer />
            </Container>
        </div>
    )
}

export default Todo