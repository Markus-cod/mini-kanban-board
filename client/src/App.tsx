import NavBar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
import Project from './components/Project.tsx'

import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <>
      <NavBar>
        <Flex direction={"column"} w={"full"} borderBottom={"1px"} borderColor={"#E2E8F0"}>
          <Header />
          <Project />
        </Flex>
      </NavBar>
    </>
  )
}

export default App
