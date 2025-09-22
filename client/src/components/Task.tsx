import {
    ChatTeardropDotsIcon,
    CheckCircleIcon
} from '@phosphor-icons/react'

import {
    Flex,
    Text,
    Badge,
    Progress,
    Avatar,
    AvatarGroup
} from '@chakra-ui/react'

function Task() {

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


    return (

        <Flex direction={"column"} gap={3}>
            <Flex w={"full"} p={3} bg={"white"} borderRadius={"2xl"} borderColor={"slate.200"} borderWidth={"1px"} direction={"column"} gap={4} boxShadow={"md"}>
                <Flex gap={3} direction={"column"} align={"flex-start"}>
                    <Badge borderRadius={"full"} bg={"indigo.50"} color={"brand.500"}>Important</Badge>
                    <Text textStyle={"lg"} fontWeight={"bold"} color={"slate.800"}>UI/UX Design in the age of AI</Text>
                </Flex>
                <Progress.Root
                    value={10}
                    colorPalette='purple'
                    size={"sm"}>
                    <Flex w={"full"} gap={2} direction={"column"}>
                        <Flex justify={"space-between"} align={"center"} w={"full"}>
                            <Progress.Label color={"slate.600"} fontWeight={"medium"} textStyle={"sm"}>
                                Progress
                            </Progress.Label>
                            <Progress.ValueText color={"slate.600"} fontWeight={"medium"} textStyle={"sm"} />
                        </Flex>
                        <Progress.Track borderRadius={"full"}>
                            <Progress.Range borderRadius={"full"} />
                        </Progress.Track>
                    </Flex>
                </Progress.Root>
                <Flex w={"full"} justify={"space-between"} align={"center"}>
                    <AvatarGroup size="lg" stacking="last-on-top">
                        {users.map((user) => (
                            <Avatar.Root key={user.name} size={"sm"} bg={"indigo.50"}>
                                <Avatar.Fallback name={user.name} color={"brand.500"} />
                                <Avatar.Image src={user.src} />
                            </Avatar.Root>
                        ))}
                        <Avatar.Root bg={"indigo.50"}>
                            <Avatar.Fallback color={"brand.500"}>+3</Avatar.Fallback>
                        </Avatar.Root>
                    </AvatarGroup>
                    <Flex gap={4}>
                        <Flex align={"center"} gap={1}>
                            <ChatTeardropDotsIcon size={20} weight={"fill"} color={"var(--chakra-colors-slate-400)"} />
                            <Text textStyle={"md"} fontWeight={"semibold"} color={"slate.800"}>12</Text>
                        </Flex>
                        <Flex align={"center"} gap={1}>
                            <CheckCircleIcon size={20} weight={"fill"} color={"var(--chakra-colors-slate-400)"} />
                            <Text textStyle={"md"} fontWeight={"semibold"} color={"slate.800"}>58</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Task