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
    <Flex alignSelf={"flex-start"} w={"full"} p={4} bg={"#F8FAFC"} borderRadius={"4xl"} borderColor={"#E2E8F0"} borderWidth={"1px"} direction={"column"} gap={4}>
      <Flex gap={4}>
        <Flex w={"full"} align={"center"} gap={2}>
          <Status.Root>
            <Status.Indicator bg={statusColor} />
          </Status.Root>
          <Text textStyle={"lg"} fontWeight={"bold"} color={"#1E293B"}>
            {title} <span style={{ color: '#94A3B8' }}>({count})</span>
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
