import {
    Flex,
    Avatar,
    AvatarGroup
} from '@chakra-ui/react'
import LogoMark from '/Logomark.svg'
import {
    CalendarBlankIcon,
    ChartBarIcon,
    HouseSimpleIcon,
    UserIcon,
    LightningIcon,
    GearIcon,
    BellIcon
} from '@phosphor-icons/react'


function NavBar() {

    const iconFlexProps = {
        w: "12",
        h: "12",
        justify: "center",
        align: "center",
        borderRadius: "full",
        _hover: { bg: "#F8FAFC", cursor: "pointer" }
    };

    return (
        <nav>
            <Flex
                direction={"column"}
                px={"4"}
                py={"6"}
                borderRightWidth={"1px"}
                borderColor={"#E2E8F0"}
                h={"full"}
                align={"left"}
                position={"fixed"}
                justify={"space-between"}>
                <Flex direction={"column"} gap={"8"} >
                    <img src={LogoMark} className={"h-32 w-32"} />
                    <Flex direction={"column"} gap={"4"}>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <HouseSimpleIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <ChartBarIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <UserIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <CalendarBlankIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <LightningIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                        <Flex {...iconFlexProps}>
                            <a href="">
                                <BellIcon weight="bold" size={24} />
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex direction="column" gap="4">
                    <Flex {...iconFlexProps}>
                        <a href="">
                            <GearIcon weight="bold" size={24} />
                        </a>
                    </Flex>
                    <Flex {...iconFlexProps}>
                        <a href="">
                            <AvatarGroup>
                                <Avatar.Root>
                                    <Avatar.Fallback name="Pero Peric" />
                                    <Avatar.Image src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                                </Avatar.Root>
                            </AvatarGroup>
                        </a>
                    </Flex>
                </Flex>
            </Flex >
        </nav>
    )
}

export default NavBar