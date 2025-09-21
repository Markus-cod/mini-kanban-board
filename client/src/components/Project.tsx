import {
    ListIcon,
    GridFourIcon,
    ColumnsIcon,
    RowsIcon,
    SlidersIcon,
    SortDescendingIcon,
    ExportIcon,
    PlusIcon
} from '@phosphor-icons/react'
import PlaceholderLogo from '/PlaceholderLogo.svg'

import {
    Flex,
    Button,
    Image,
    Tabs,
    Text,
    Status,
    SimpleGrid
} from '@chakra-ui/react'
import { useState } from 'react'

import Task from './Task'

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
                <Flex>
                    <Tabs.Content value="grid" p={8}>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
                            <Flex alignSelf={"flex-start"} w={"full"} p={4} bg={"#F8FAFC"} borderRadius={"4xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4}>
                                <Flex gap={4}>
                                    <Flex w={"full"} align={"center"} gap={2}>
                                        <Status.Root>
                                            <Status.Indicator bg={"#4F46E5"} />
                                        </Status.Root>
                                        <Text textStyle={"lg"} fontWeight={"bold"} color={"#1E293B"}>To Do <span style={{ color: '#94A3B8' }}>(8)</span></Text>

                                    </Flex>
                                    <Button variant="outline" rounded={"full"} w={0}>
                                        <PlusIcon />
                                    </Button>
                                </Flex>
                                <Task></Task>
                                <Task></Task>
                                <Task></Task>
                                <Task></Task>
                            </Flex>

                            <Flex alignSelf={"flex-start"} w={"full"} p={4} bg={"#F8FAFC"} borderRadius={"4xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4}>
                                <Flex gap={4}>
                                    <Flex w={"full"} align={"center"} gap={2}>
                                        <Status.Root>
                                            <Status.Indicator bg={"#4F46E5"} />
                                        </Status.Root>
                                        <Text textStyle={"lg"} fontWeight={"bold"} color={"#1E293B"}>To Do <span style={{ color: '#94A3B8' }}>(8)</span></Text>

                                    </Flex>
                                    <Button variant="outline" rounded={"full"} w={0}>
                                        <PlusIcon />
                                    </Button>
                                </Flex>
                                <Task></Task>
                                <Task></Task>
                            </Flex>

                            <Flex alignSelf={"flex-start"} w={"full"} p={4} bg={"#F8FAFC"} borderRadius={"4xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4}>
                                <Flex gap={4}>
                                    <Flex w={"full"} align={"center"} gap={2}>
                                        <Status.Root>
                                            <Status.Indicator bg={"#4F46E5"} />
                                        </Status.Root>
                                        <Text textStyle={"lg"} fontWeight={"bold"} color={"#1E293B"}>To Do <span style={{ color: '#94A3B8' }}>(8)</span></Text>

                                    </Flex>
                                    <Button variant="outline" rounded={"full"} w={0}>
                                        <PlusIcon />
                                    </Button>
                                </Flex>
                                <Task></Task>
                                <Task></Task>
                                <Task></Task>
                            </Flex>
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
                </Flex>
            </Tabs.Root>
        </Flex>
    )
}

export default Project