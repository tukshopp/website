import { AppShell, Box, Container, Paper, Stack, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';
import Footer from '../navigation/footer';
import NavBar from '../navigation/navbar';

export default function PageLayout({ children, title ,caption}: { children: ReactNode, title: string, caption: string }) {
  return (
    <AppShell>
      <AppShell.Main>
        <NavBar />
        <Stack>
          <Box>
            <Container w={'100%'}>
              <Paper p={'xl'} bg={'ghostwhite'}>
                <Title order={1} fw={'bold'}>
                  {title}
                </Title>
                <Text>
                  {caption}
                </Text>
              </Paper>
            </Container>
          </Box>
          <Container w={'100%'}>{children}</Container>
          <Footer handleWaitListClick={() => {}} />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
}
