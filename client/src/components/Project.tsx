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
import { useEffect, useMemo, useState, useReducer } from 'react'
import { useDraggable, useDroppable, DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";

type Task = {
    id: number;
    title: string;
    status: Status;
};

const views = ['grid', 'list', 'column', 'row'] as const
type View = typeof views[number]

type Status = "todo" | "doing" | "done";

const STORAGE_KEY = "tasks.v1";
function loadFromStorage(): Task[] | null {
    try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : null; }
    catch { return null; }
}
function saveToStorage(tasks: Task[]) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); } catch { /* ignore storage errors */ }
}

interface State { tasks: Task[]; hasLoaded: boolean; }
type Action =
    | { type: "SET_TASKS"; payload: Task[] }
    | { type: "MOVE_TASK"; id: number; to: Status };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_TASKS": return { tasks: action.payload, hasLoaded: true };
        case "MOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(t =>
                    t.id === action.id ? { ...t, status: action.to } : t
                )
            };
        default: return state;
    }
}

function init(): State {
    const stored = loadFromStorage();
    return stored ? { tasks: stored, hasLoaded: true } : { tasks: [], hasLoaded: false };
}


function DraggableTask({ id, children }: { id: number; children: React.ReactNode }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
    const style: React.CSSProperties = transform
        ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, zIndex: 999, touchAction: "none" }
        : {};
    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {children}
        </div>
    );
}

function DroppableColumn({ id, children }: { id: Status; children: React.ReactNode }) {
    const { isOver, setNodeRef } = useDroppable({ id });
    const style: React.CSSProperties = isOver
        ? { outline: "2px dashed var(--chakra-colors-brand-500)", outlineOffset: 4, borderRadius: 32 }
        : {};
    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}


function Project() {
    const [view, setView] = useState<View>("grid")

    const [state, dispatch] = useReducer(reducer, undefined as unknown as State, init);
    const { tasks, hasLoaded } = state;
    const [loading, setLoading] = useState(!hasLoaded);
    const [error, setError] = useState<string | null>(null);

    // Persist tasks whenever they change
    useEffect(() => {
        if (tasks.length > 0) saveToStorage(tasks);
    }, [tasks]);

    // Fetch initial tasks only if nothing in storage
    useEffect(() => {
        if (hasLoaded && tasks.length > 0) { setLoading(false); return; }
        (async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=12");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const raw: { id: number; title: string; completed: boolean }[] = await res.json();
                const mapped: Task[] = raw.map(({ id, title /*, completed*/ }) => ({
                    id,
                    title: title.charAt(0).toUpperCase() + title.slice(1),
                    status: (id % 3 === 0 ? "todo" : id % 3 === 1 ? "doing" : "done") as Status,
                }));
                dispatch({ type: "SET_TASKS", payload: mapped });
            } catch (e) {
                setError(e instanceof Error ? e.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        })();
    }, [hasLoaded, tasks.length]);

    const todo = useMemo(() => tasks.filter(t => t.status === "todo"), [tasks])
    const doing = useMemo(() => tasks.filter(t => t.status === "doing"), [tasks])
    const done = useMemo(() => tasks.filter(t => t.status === "done"), [tasks])

    const sensors = useSensors(
        useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
        useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;
        if (!over) return;
        const dest = over.id as Status;
        if (dest === "todo" || dest === "doing" || dest === "done") {
            dispatch({ type: "MOVE_TASK", id: Number(active.id), to: dest });
        }
    }

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
                    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
                            <DroppableColumn id="todo">
                                <TaskColumn statusColor="brand.500" title="To Do" count={todo.length}>
                                    {todo.map(t => (
                                        <DraggableTask key={t.id} id={t.id}>
                                            <Task key={t.id} title={t.title} badgeText="Important" badgeBg='rose.50' badgeColor='rose.500' />
                                        </DraggableTask>
                                    ))}
                                </TaskColumn>
                            </DroppableColumn>

                            <DroppableColumn id="doing">
                                <TaskColumn statusColor="amber.500" title="In Progress" count={doing.length}>
                                    {doing.map(t => (
                                        <DraggableTask key={t.id} id={t.id}>
                                            <Task key={t.id} title={t.title} badgeText="API" progressValue={Math.floor(Math.random() * 81) + 10} />
                                        </DraggableTask>
                                    ))}
                                </TaskColumn>
                            </DroppableColumn>

                            <DroppableColumn id="done">
                                <TaskColumn statusColor="green.500" title="Completed" count={done.length}>
                                    {done.map(t => (

                                        <DraggableTask key={t.id} id={t.id}>
                                            <Task key={t.id} title={t.title} badgeText="API" progressValue={100} />
                                        </DraggableTask>
                                    ))}
                                </TaskColumn>
                            </DroppableColumn>
                        </SimpleGrid>
                    </DndContext>
                </Tabs.Content>
                <Tabs.Content value="list">List View</Tabs.Content>
                <Tabs.Content value="column">Column View</Tabs.Content>
                <Tabs.Content value="row">Row View</Tabs.Content>
            </Tabs.Root>
        </Flex>
    )
}

export default Project