import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Todo from "./components/Todo"
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Todo />
        
      </Grid>
    </Box>
  </ChakraProvider>
)
