import {
    Flex,
    Breadcrumb,
    Avatar,
    AvatarGroup,
    Button,
    useBreakpointValue
} from '@chakra-ui/react'
import {
    HouseSimpleIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    SphereIcon,
    CaretLeftIcon,
} from '@phosphor-icons/react'

function Header() {

    const iconFlexProps = {
        w: "10",
        h: "10",
        justify: "center",
        align: "center",
        borderRadius: "full",
        _hover: { cursor: "pointer" }
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

    const visibleCount = useBreakpointValue({ base: 3, sm: 4, md: 7 }) || 7

    return (
        <Flex w={"full"} px={{ sm: "8", base: "4" }} py={{ sm: "5", base: "6" }} justify={"space-between"} align={{ base: "flex-start", sm: "center" }} bg={"slate.50"} direction={{ sm: "row", base: "column" }} gap={{ sm: "0", base: "4" }}>
            <Breadcrumb.Root size={"lg"} display={{ sm: "flex", base: "none" }}>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Breadcrumb.Link href="#"><HouseSimpleIcon size={"20"} weight={"bold"} /></Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    {useBreakpointValue({ sm: false, md: true }) ?
                        <>
                            <Breadcrumb.Item>
                                <Breadcrumb.Link href="#" fontWeight={"medium"}>Dashboard</Breadcrumb.Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Separator />
                            <Breadcrumb.Item>
                                <Breadcrumb.Link href="#" fontWeight={"medium"}>Project</Breadcrumb.Link>
                            </Breadcrumb.Item>
                        </> :
                        <Breadcrumb.Ellipsis />}
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Breadcrumb.CurrentLink fontWeight={"medium"}> <Flex align={"center"} gap={"1"} color={"brand.500"}><SphereIcon size={20} weight={"bold"} /> Project PlanetX </Flex></Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
            <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} color={"brand.500"} display={{ sm: "none", base: "flex" }} fontWeight={"bold"}>
                <CaretLeftIcon weight="bold" size={20} /> Back to Project
            </Button>

            <Flex align={"center"} gap={"2"}>

                <Flex {...iconFlexProps}>
                    <MagnifyingGlassIcon size={"24"} />
                </Flex>

                <AvatarGroup size="lg" stacking="last-on-top">
                    {users.slice(0, visibleCount).map((user) => (
                        <Avatar.Root key={user.name} size={"md"} bg={"indigo.50"}>
                            <Avatar.Fallback name={user.name} color={"brand.500"} />
                            <Avatar.Image src={user.src} />
                        </Avatar.Root>
                    ))}
                    {(7 - visibleCount) > 0 &&
                        <Avatar.Root bg={"indigo.50"}>
                            <Avatar.Fallback color={"brand.500"}>+{7 - visibleCount}</Avatar.Fallback>
                        </Avatar.Root>
                    }
                </AvatarGroup>

                <Button variant="outline" rounded={"full"}>
                    Invite <PlusIcon />
                </Button>

            </Flex>
        </Flex>
    )
}

export default Header