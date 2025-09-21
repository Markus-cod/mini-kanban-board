import {
    PlusIcon,
    ListIcon,
    GridFourIcon,
    ColumnsIcon,
    RowsIcon,
    SlidersIcon,
    SortDescendingIcon,
    ExportIcon,
    ChatTeardropDotsIcon,
    CheckCircleIcon
} from '@phosphor-icons/react'
import PlaceholderLogo from '/PlaceholderLogo.svg'

import {
    Flex,
    Button,
    Image,
    Tabs,
    Text,
    Status,
    Badge,
    Progress,
    Avatar,
    AvatarGroup
} from '@chakra-ui/react'
import { useState } from 'react'

function Project() {

    const users = [
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke",
        },
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
            name: "Baki Ani",
        },
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
            name: "Uchiha Chan",
        },
    ]

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
                        <Flex gap={6} >
                            <Flex w={"full"} p={4} bg={"#F8FAFC"} borderRadius={"4xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4}>
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
                                <Flex direction={"column"} gap={3}>
                                    <Flex w={"full"} p={3} bg={"white"} borderRadius={"2xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4} boxShadow={"md"}>
                                        <Flex gap={3} direction={"column"} align={"flex-start"}>
                                            <Badge borderRadius={"full"} bg={"#EEF2FF"} color={"#4F46E5"}>Important</Badge>
                                            <Text textStyle={"lg"} fontWeight={"bold"} color={"#1E293B"}>UI/UX Design in the age of AI</Text>
                                        </Flex>
                                        <Progress.Root
                                            value={100}
                                            colorPalette='purple'
                                            size={"sm"}>
                                            <Flex w={"full"} gap={2} direction={"column"}>
                                                <Flex justify={"space-between"} align={"center"} w={"full"}>
                                                    <Progress.Label color={"#475569"} fontWeight={"medium"} textStyle={"sm"}>
                                                        Progress
                                                    </Progress.Label>
                                                    <Progress.ValueText color={"#475569"} fontWeight={"medium"} textStyle={"sm"} />
                                                </Flex>
                                                <Progress.Track borderRadius={"full"}>
                                                    <Progress.Range borderRadius={"full"} />
                                                </Progress.Track>
                                            </Flex>
                                        </Progress.Root>
                                        <Flex w={"full"} justify={"space-between"} align={"center"}>
                                            <AvatarGroup size="lg" stacking="last-on-top">
                                                {users.map((user) => (
                                                    <Avatar.Root key={user.name} size={"sm"} bg={"#EEF2FF"}>
                                                        <Avatar.Fallback name={user.name} color={"#4F46E5"} />
                                                        <Avatar.Image src={user.src} />
                                                    </Avatar.Root>
                                                ))}
                                                <Avatar.Root bg={"#EEF2FF"}>
                                                    <Avatar.Fallback color={"#4F46E5"}>+3</Avatar.Fallback>
                                                </Avatar.Root>
                                            </AvatarGroup>
                                            <Flex gap={4}>
                                                <Flex align={"center"} gap={1}>
                                                    <ChatTeardropDotsIcon size={20} weight={"fill"} color={"#94A3B8"} />
                                                    <Text textStyle={"md"} color={"1E293B"}>12</Text>
                                                </Flex>
                                                <Flex align={"center"} gap={1}>
                                                    <CheckCircleIcon size={20} weight={"fill"} color={"#94A3B8"} />
                                                    <Text textStyle={"md"} fontWeight={"medium"} color={"1E293B"}>58</Text>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex w={"full"}>prog</Flex>
                            <Flex w={"full"}>compl</Flex>
                        </Flex>
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