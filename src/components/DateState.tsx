
import {
    Text
} from "@chakra-ui/react";

const DateState = (valueDate: {fecha: string}) => {
    const todayDate = new Date();
    return (
        <>
            <Text pt='2' fontSize='sm'>
                {
                    valueDate.fecha
                }
            </Text>

            {
                todayDate.getDate() < new Date(valueDate.fecha).getDate() ? (
                    <Text color={"green.500"}>On Time</Text>
                ) : (
                    <Text color={"red.500"}>Delayed</Text>
                )
            }
        </>
    )
}

export default DateState