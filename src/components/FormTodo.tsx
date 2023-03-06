import React from 'react'

import {
    Box,
    Input,
    FormLabel,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    SimpleGrid,
    Button,
    ButtonGroup,
    Heading
} from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import useStore from '../store/Store';
import { toast } from 'react-toastify';


const FormTodo = () => {

    const { register, handleSubmit, reset } = useForm<any>();

    const store = useStore();

    const submit = (data: any, event: any) => {
        console.log(data);
        store.setNewTodo(data.title, data.description, data.responsible, data.date);
        store.addTodo();
        event.target.reset();
        toast.success("Todo added sucesfully");
    }

    return (
        <Box m={"auto"} borderWidth={1} p={4} boxShadow={"lg"}>
            <Heading py={5} size={'md'}>Todo Form</Heading>
            <form onSubmit={handleSubmit(submit)}>
                <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={"15px"}>
                    <FormControl isRequired>
                        <FormLabel>Todo Title</FormLabel>
                        <Input {...register("title")} placeholder='Title' type={"text"} name={'title'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Todo Description</FormLabel>
                        <Input {...register("description")} placeholder='Description' type={"text"} name={'description'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Todo Responsible</FormLabel>
                        <Input {...register("responsible")} placeholder='Responsible' type={"text"} name={'responsible'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Todo Date</FormLabel>
                        <Input {...register("date")} placeholder='Date' type={"date"} name={'date'} />
                    </FormControl>
                </SimpleGrid>
                <ButtonGroup variant={"outline"}>
                    <Button type='submit' colorScheme={"blue"} mt={"5"}>
                        Add Todo
                    </Button>
                    <Button type="reset" colorScheme={"orange"} mt={"5"}>
                        Clear
                    </Button>
                </ButtonGroup>
            </form>
        </Box>

    )
}

export default FormTodo