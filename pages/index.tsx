import { AppShell, Box, Button, Center, Stack, Text } from '@mantine/core';
import {ArrowRight02Icon} from "hugeicons-react"
export default function HomePage() {
  return (
    <>
      <AppShell>
        <AppShell.Main>
          <Stack h={"100vh"} justify='center' align='center'>
            <Box>
            <Center><img src="/assets/logo-text-primary.svg" width={200} /></Center>
            <Text ta={"center"} mt="xs" size='sm' c={"dimmed"}>Building magic</Text>
            </Box>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
