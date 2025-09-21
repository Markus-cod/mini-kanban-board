import {
    Flex,
    Breadcrumb,
    Avatar,
    AvatarGroup,
    Button,
} from '@chakra-ui/react'
import {
    HouseSimpleIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    SphereIcon,
} from '@phosphor-icons/react'

function Header() {

    const iconFlexProps = {
        w: "10",
        h: "10",
        justify: "center",
        align: "center",
        borderRadius: "full",
        _hover: { bg: "#eef1f5ff", cursor: "pointer" }
    };

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
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke V2",
        },
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c",
            name: "Baki Ani V2",
        },
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863",
            name: "Uchiha Chan V2",
        },
        {
            src: "https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd",
            name: "Uchiha Sasuke V3",
        },
    ]

    return (
            <Flex w={"full"} px={"8"} py={"5"} justify={"space-between"} align={"center"} bg={"#F8FAFC"}>
                <Breadcrumb.Root size={"lg"} >
                    <Breadcrumb.List>
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#"><HouseSimpleIcon size={"20"} weight={"bold"} /></Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#" fontWeight={"medium"}>Dashboard</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.Link href="#" fontWeight={"medium"}>Project</Breadcrumb.Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Separator />
                        <Breadcrumb.Item>
                            <Breadcrumb.CurrentLink fontWeight={"medium"}> <Flex align={"center"} gap={"1"} color={"#4F46E5"}><SphereIcon size={20} weight={"bold"} /> Project PlanetX </Flex></Breadcrumb.CurrentLink>
                        </Breadcrumb.Item>
                    </Breadcrumb.List>
                </Breadcrumb.Root>

                <Flex align={"center"} gap={"2"}>

                    <Flex {...iconFlexProps}>
                        <MagnifyingGlassIcon size={"24"} />
                    </Flex>

                    <AvatarGroup size="lg" stacking="last-on-top">
                        {users.map((user) => (
                            <Avatar.Root key={user.name} size={"md"}>
                                <Avatar.Fallback name={user.name} />
                                <Avatar.Image src={user.src} />
                            </Avatar.Root>
                        ))}
                    </AvatarGroup>

                    <Button variant="outline" rounded={"full"}>
                        Invite <PlusIcon />
                    </Button>

                </Flex>
            </Flex>
    )
}

export default Header