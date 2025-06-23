import ResetPassword from '@/components/Auth/ResetPassword';
import { AppShell, Container, Stack } from '@mantine/core';

export default function ResetPasswordPage() {
  return (
    <>
      <AppShell>
        <AppShell.Main>
          <Container size={'sm'}>
            <Stack justify="center" mih={'100vh'} py={'xl'}>
              <ResetPassword />
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
