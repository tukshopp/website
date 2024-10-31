import ResetPassword from '@/components/Auth/ResetPassword';
import { Box, Flex, List, Text, Title, AppShell, Container, Stack } from '@mantine/core';
import { useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();

  return (
    <>
      <AppShell>
        <AppShell.Main>
          <Container size={"sm"}>
            <Stack justify="center" mih={'100vh'} py={'xl'}>
              <ResetPassword />
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
