import {
    Flex,
    Avatar,
    AvatarGroup,
    Image
} from '@chakra-ui/react'
import {
    CalendarBlankIcon,
    ChartBarIcon,
    HouseSimpleIcon,
    UserIcon,
    LightningIcon,
    GearIcon,
    BellIcon,
    ListIcon
} from '@phosphor-icons/react'
import LogoMark from '/Logomark.png'
import Logo from '/Logo.png'


function NavBar(props: { children: React.ReactNode }) {

    const iconFlexProps = {
        w: "12",
        h: "12",
        justify: "center",
        align: "center",
        borderRadius: "full",
        _hover: { bg: "#F8FAFC", cursor: "pointer" }
    };

    return (
        <>
            <nav>
                <Flex
                    direction={{sm:"column", base:"row"}}
                    px={"4"}
                    py={{ sm: "6", base: "3" }}
                    borderRightWidth={{ sm: "1px", base: "0px" }}
                    borderBottomWidth={{ sm: "0px", base: "1px" }}
                    borderColor={"#E2E8F0"}
                    h={{ sm: "full", base: "auto" }}
                    w={{ sm: "auto", base: "full" }}
                    top={0}
                    bg={"white"}
                    position={"fixed"}
                    justify={"space-between"}>

                    <Flex direction={{ sm: "column", base: "row" }} gap={{ sm: "8", base: "2" }} >

                        <Flex justify={"center"} align={"center"}>
                            <Image src={LogoMark} w={8} display={{ sm: "flex", base: "none" }} />
                            <Image src={Logo} h={8} display={{ sm: "none", base: "flex" }} />
                        </Flex>

                        <Flex direction={"column"} gap={"4"} display={{ sm: "flex", base: "none" }}>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <HouseSimpleIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <ChartBarIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <UserIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <CalendarBlankIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <LightningIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                            <Flex {...iconFlexProps}>
                                <a href="#">
                                    <BellIcon weight="bold" size={24} />
                                </a>
                            </Flex>
                        </Flex>

                    </Flex>

                    <Flex direction="column" gap="4" display={{ sm: "flex", base: "none" }}>
                        <Flex {...iconFlexProps}>
                            <a href="#">
                                <GearIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="#">
                                <AvatarGroup>
                                    <Avatar.Root>
                                        <Avatar.Fallback name="Pero Peric" />
                                        <Avatar.Image src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                    </Avatar.Root>
                                </AvatarGroup>
                            </a>
                        </Flex>
                    </Flex>

                    <Flex display={{ sm: "none", base: "flex" }} {...iconFlexProps} w={10} h={10}>
                        <ListIcon weight="bold" size={24} />
                    </Flex>
                    
                </Flex >
            </nav>
            <Flex ml={{ sm: "20", base: "0" }} mt={{ sm: "0", base: "14" }} w={"100%-80px"} >
                {props.children}
            </Flex>
        </>
    )
}

export default NavBar