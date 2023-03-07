import {
    Button, Checkbox, Heading, Card,
    CardHeader, CardBody, Stack, Text, StackDivider, Box,
    SimpleGrid,  Divider
} from "@chakra-ui/react";
import useStore from '../store/Store';
import { toast } from 'react-toastify';
import DateState from "./DateState";

const ListTodo = () => {
    const store = useStore((state) => state);
    console.log(store.todos);
    return (
        <>
            <h1>Todos</h1>
            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {store.todos.filter(obj => !obj.done)
                    .map((todo) => (
                        <Box pt={2} key={todo.id}>
                            <Card variant={'elevated'}>
                                <CardHeader>
                                    <Stack spacing={5} direction='row'>
                                        <Checkbox
                                            checked={todo.done}
                                            onChange={() => {
                                                store.toggleTodo(todo.id);
                                                toast.success("Task Ended");
                                            }}
                                        />
                                        <Text>{todo.title}</Text>
                                    </Stack>
                                </CardHeader>

                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
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
                                            
                                            <DateState fecha={todo.date}/>
                                        </Box>
                                        <Button onClick={() => {
                                            store.removeTodo(todo.id);
                                            toast.success("Task Deleted");
                                        }}
                                            mt={5}>Delete</Button>
                                    </Stack>
                                </CardBody>
                            </Card>

                        </Box>
                    ))}
            </SimpleGrid>

            {
                store.todos.filter(obj => obj.done).length > 0 ? (
                    <>
                        <Divider my={5} />

                        <Text>Done</Text>
                    </>
                ) : (
                    null
                )
            }

            <SimpleGrid columns={[1, 2, 3]} spacing={10}>
                {store.todos.filter(obj => obj.done)
                    .map((todo) => (
                        <Box pt={2} key={todo.id}>
                            <Card variant={'elevated'}>
                                <CardHeader>
                                    <Stack spacing={5} direction='row'>
                                        <Checkbox
                                            isChecked={todo.done}
                                            onChange={() => store.toggleTodo(todo.id)}
                                        />
                                        <Text as="del">{todo.title} {" "} ✅ </Text>
                                    </Stack>
                                </CardHeader>

                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Description
                                            </Heading>
                                            <Text pt='2' fontSize='sm' as="del">
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
                                            <DateState fecha={todo.date}/>
                                        </Box>
                                        <Button onClick={() => {
                                            store.removeTodo(todo.id);
                                            toast.success("Task Remove")
                                        }} mt={5}>Delete</Button>
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