import NavBar from './components/Navbar.tsx'
import Header from './components/Header.tsx'
import Project from './components/Project.tsx'

import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <>
      <NavBar>
        <Flex direction={"column"} w={"full"} overflow={"hidden"}>
          <Header />
          <Project />
        </Flex>
      </NavBar>
    </>
  )
}

export default App
