import NavBar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
import Project from './components/Project.tsx'

import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <>
      <NavBar>
        <Flex direction={"column"} w={"full"} borderBottom={"1px"} borderColor={"slate.200000000"}>
          <Header />
          <Project />
        </Flex>
      </NavBar>
    </>
  )
}

export default App
