import { Box, Button, Center, ChakraProvider, Heading, Input} from '@chakra-ui/react'
import { login } from './services/login';

function App() {
  return (
    <ChakraProvider>
      <Box backgroundColor={'#800080'} minHeight='100vh'>
        <Center>
          <Box backgroundColor='#fff' maxWidth='70vh' borderRadius={15} padding={15} margin={10}>
            <Center>
            <Heading margin={5}>Faça o login</Heading>
            </Center>
            <Input placeholder='email' type='email' marginBottom={2}/>
            <Input placeholder='password' type={'password'} marginBottom={2}/>
            <Button onClick={login} colorScheme='green' width='100%'>Login</Button>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}

export default App;