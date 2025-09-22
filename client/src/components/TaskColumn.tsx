import { Flex, Button, Text, Status } from '@chakra-ui/react'
import { PlusIcon } from '@phosphor-icons/react'
import React from 'react'

interface TaskColumnProps {
  statusColor: string
  title: string
  count: number
  children?: React.ReactNode
}

const TaskColumn: React.FC<TaskColumnProps> = ({ statusColor, title, count, children }) => {
  return (
    <Flex alignSelf={"flex-start"} w={"full"} p={4} bg={"slate.50"} borderRadius={"4xl"} borderColor={"slate.200"} borderWidth={"1px"} direction={"column"} gap={4}>
      <Flex gap={4}>
        <Flex w={"full"} align={"center"} gap={2}>
          <Status.Root>
            <Status.Indicator bg={statusColor} />
          </Status.Root>
          <Text textStyle={"lg"} fontWeight={"bold"} color={"slate.800"}>
            {title} <span style={{ color: 'slate.400' }}>({count})</span>
          </Text>
        </Flex>
        <Button variant="outline" rounded={"full"} w={0}>
          <PlusIcon />
        </Button>
      </Flex>
      {children}
    </Flex>
  );
};

export default TaskColumn
