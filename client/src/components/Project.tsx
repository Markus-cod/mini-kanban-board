import {
    ListIcon,
    GridFourIcon,
    ColumnsIcon,
    RowsIcon,
    SlidersIcon,
    SortDescendingIcon,
    ExportIcon
} from '@phosphor-icons/react'
import PlaceholderLogo from '/PlaceholderLogo.svg'

import {
    Flex,
    Button,
    Image,
    Tabs,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import { useState } from 'react'

import Task from './Task'
import TaskColumn from './TaskColumn'

function Project() {


    const [value, setValue] = useState<string | null>("grid")

    return (
        <Flex direction={"column"} w={"full"} borderBottom={"1px"} borderColor={"#E2E8F0"}>
            <Tabs.Root
                defaultValue="members"
                variant={"enclosed"}
                value={value} onValueChange={(e) => setValue(e.value)}>
                <Flex p={8} direction={"row"} gap={4} borderBottomWidth={"1px"} borderColor={"#E2E8F0"}>
                    <Image src={PlaceholderLogo} w={24} h={24} />
                    <Flex direction={"column"} w={"full"} gap={3}>
                        <Flex direction={"row"} justify={"space-between"} align={"center"}>
                            <Text fontWeight={"bold"} textStyle={"3xl"}>Project PlanetX</Text>
                            <Flex direction={"row"} gap={3} align={"center"}>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "#4F46E5" }} color={"#475569"}>
                                    <GridFourIcon weight="bold" size={20} />Grid View
                                </Button>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "#4F46E5" }} color={"#475569"}>
                                    <SlidersIcon weight="bold" size={20} />Filter
                                </Button>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "#4F46E5" }} color={"#475569"}>
                                    <SortDescendingIcon weight="bold" size={20} />Sort
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex direction={"row"} justify={"space-between"} align={"center"}>
                            <Tabs.List rounded={"full"} >
                                <Tabs.Trigger value="grid" rounded={"full"}>
                                    <GridFourIcon weight="bold" size={20} color={value == "grid" ? "#4F46E5" : ""} /> Grid View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="list" rounded={"full"}>
                                    <ListIcon weight="bold" size={20} color={value == "list" ? "#4F46E5" : ""} /> List View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="column" rounded={"full"}>
                                    <ColumnsIcon weight="bold" size={20} color={value == "column" ? "#4F46E5" : ""} /> Column View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="row" rounded={"full"}>
                                    <RowsIcon weight="bold" size={20} color={value == "row" ? "#4F46E5" : ""} /> Row View
                                </Tabs.Trigger>
                            </Tabs.List>

                            <Button bg={"#4F46E5"} rounded={"full"} size={"xl"}>Export Data<ExportIcon /></Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Tabs.Content value="grid" p={8}>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
                        <TaskColumn statusColor="#4F46E5" title="To Do" count={8}>
                            <Task />
                            <Task />
                            <Task />
                            <Task />
                        </TaskColumn>

                        <TaskColumn statusColor="#4F46E5" title="In Progress" count={8}>
                            <Task />
                            <Task />
                        </TaskColumn>

                        <TaskColumn statusColor="#4F46E5" title="Completed" count={8}>
                            <Task />
                            <Task />
                            <Task />
                        </TaskColumn>
                    </SimpleGrid>
                </Tabs.Content>
                <Tabs.Content value="list">
                    List View
                </Tabs.Content>
                <Tabs.Content value="column">
                    Column View
                </Tabs.Content>
                <Tabs.Content value="row">
                    Row View
                </Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}

export default Project