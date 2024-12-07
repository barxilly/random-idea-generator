import { Center, Flex, MantineProvider, Text } from "@mantine/core";
import '@mantine/core/styles.css'

export default function Home() {
  return (
    <MantineProvider>
      <Center style={{ height: '100vh' }}>
        <Flex>
          <Text className="t pl">A&nbsp;</Text>
          <Text color="blue" className="t c">simple</Text>
          <Text className="t pl">&nbsp;example</Text>
        </Flex>
      </Center>
    </MantineProvider>
  );
}
