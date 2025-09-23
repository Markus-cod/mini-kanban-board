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
import Task from './Task'
import TaskColumn from './TaskColumn'
import { useEffect, useMemo, useState } from 'react'

const views = ['grid', 'list', 'column', 'row'] as const
type View = typeof views[number]

type Status = "todo" | "doing" | "done";
type TaskModel = { id: number; title: string; status: Status }

type TodoApi = {
    userId: number
    id: number
    title: string
    completed: boolean
};

function mapStatus(id: number): Status {
    const mod = id % 3
    if (mod === 0) return "todo"
    if (mod === 1) return "doing"
    return "done"
}

function capitalize(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function Project() {
    const [view, setView] = useState<View>("grid")
    const [tasks, setTasks] = useState<TaskModel[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const ctrl = new AbortController();
        (async () => {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/todos?_limit=12",
                    { signal: ctrl.signal }
                );
                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const raw: TodoApi[] = await res.json()
                const mapped: TaskModel[] = raw.map(({ id, title}) => ({
                    id,
                    title: capitalize(title),
                    status: mapStatus(id),
                }));

                setTasks(mapped);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return
                setError(e instanceof Error ? e.message : "Unknown error")
            } finally {
                setLoading(false)
            }
        })()
        return () => ctrl.abort()
    }, []);

    const todo = useMemo(() => tasks.filter(t => t.status === "todo"), [tasks])
    const doing = useMemo(() => tasks.filter(t => t.status === "doing"), [tasks])
    const done = useMemo(() => tasks.filter(t => t.status === "done"), [tasks])

    const isView = (v: string): v is View => (views as readonly string[]).includes(v)

    if (loading) return <div>Loading tasks…</div>
    if (error) return <div>Failed to load tasks: {error}</div>

    return (
        <Flex direction={"column"} w={"full"} borderBottom={"1px"} borderColor={"slate.200"}>
            <Tabs.Root
                defaultValue="members"
                variant={"enclosed"}
                value={view}
                onValueChange={(details) => {
                    const v = details.value
                    if (isView(v)) setView(v)
                }}>
                <Flex p={8} direction={"row"} gap={4} borderBottomWidth={"1px"} borderColor={"slate.200"}>
                    <Image src={PlaceholderLogo} w={24} h={24} />
                    <Flex direction={"column"} w={"full"} gap={3}>
                        <Flex direction={"row"} justify={"space-between"} align={"center"}>
                            <Text fontWeight={"bold"} textStyle={"3xl"}>Project PlanetX</Text>
                            <Flex direction={"row"} gap={3} align={"center"}>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "brand.500" }} color={"slate.600"}>
                                    <GridFourIcon weight="bold" size={20} />Grid View
                                </Button>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "brand.500" }} color={"slate.600"}>
                                    <SlidersIcon weight="bold" size={20} />Filter
                                </Button>
                                <Button p={"0"} border={"0"} h={"auto"} bg={"transparent"} _hover={{ bg: "transparent", color: "brand.500" }} color={"slate.600"}>
                                    <SortDescendingIcon weight="bold" size={20} />Sort
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex direction={"row"} justify={"space-between"} align={"center"}>
                            <Tabs.List rounded={"full"} >
                                <Tabs.Trigger value="grid" rounded={"full"}>
                                    <GridFourIcon weight="bold" size={20} color={view == "grid" ? "var(--chakra-colors-brand-500)" : ""} /> Grid View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="list" rounded={"full"}>
                                    <ListIcon weight="bold" size={20} color={view == "list" ? "var(--chakra-colors-brand-500)" : ""} /> List View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="column" rounded={"full"}>
                                    <ColumnsIcon weight="bold" size={20} color={view == "column" ? "var(--chakra-colors-brand-500)" : ""} /> Column View
                                </Tabs.Trigger>
                                <Tabs.Trigger value="row" rounded={"full"}>
                                    <RowsIcon weight="bold" size={20} color={view == "row" ? "var(--chakra-colors-brand-500)" : ""} /> Row View
                                </Tabs.Trigger>
                            </Tabs.List>

                            <Button bg={"brand.500"} rounded={"full"} size={"xl"}>Export Data<ExportIcon /></Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Tabs.Content value="grid" p={8}>
                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
                        <TaskColumn statusColor="brand.500" title="To Do" count={todo.length}>
                            {todo.map(t => (
                                <Task key={t.id} title={t.title} badgeText="Important" badgeBg='rose.50' badgeColor='rose.500' />
                            ))}
                        </TaskColumn>

                        <TaskColumn statusColor="amber.500" title="In Progress" count={doing.length}>
                            {doing.map(t => (
                                <Task key={t.id} title={t.title} badgeText="API" progressValue={Math.floor(Math.random() * 99) + 3}/>
                            ))}
                        </TaskColumn>

                        <TaskColumn statusColor="green.500" title="Completed" count={done.length}>
                            {done.map(t => (
                                <Task key={t.id} title={t.title} badgeText="API" progressValue={100} />
                            ))}
                        </TaskColumn>
                    </SimpleGrid>
                </Tabs.Content>
                <Tabs.Content value="list">List View</Tabs.Content>
                <Tabs.Content value="column">Column View</Tabs.Content>
                <Tabs.Content value="row">Row View</Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}

export default Project