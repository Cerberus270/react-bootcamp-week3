import React from 'react'
import {
    Button, Input, Flex, Checkbox, Heading, Card,
    CardHeader, CardBody, CardFooter, Stack, Text, StackDivider, Box,
    SimpleGrid, Grid, GridItem
} from "@chakra-ui/react";
import useStore from '../store/Store';

const ListTodo = () => {
    const store = useStore((state) => state);
    console.log(store.todos);
    return (
        <>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {store.todos.map((todo) => (
                    <Box pt={2} key={todo.id}>
                        <Card variant={'elevated'}>
                            <CardHeader>
                                <Stack spacing={5} direction='row'>
                                    <Checkbox
                                        checked={todo.done}
                                        onChange={() => store.toggleTodo(todo.id)}
                                    />
                                    {
                                        todo.done ? <Text as="del">{todo.title}</Text> : <Text>{todo.title}</Text>
                                    }
                                </Stack>
                            </CardHeader>

                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    {/* <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Title
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {todo.title}
                                        </Text>
                                    </Box> */}
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Description
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {todo.description}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Responsible 👨‍⚖️
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {todo.responsible}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Date 📅
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {todo.date}
                                        </Text>
                                    </Box>
                                    <Button onClick={() => store.removeTodo(todo.id)} mt={5}>Delete</Button>
                                </Stack>
                            </CardBody>
                        </Card>

                    </Box>
                ))}
            </SimpleGrid>
        </>
    )
}

export default ListTodo