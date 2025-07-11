import { Box, Button, Center, Container, PasswordInput, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PasswordApi, ResetPasswordDTO } from '@/src/sdk/auth';
import PasswordRequirements from '../common/PasswordRequirements';

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [resetStatus, setStatus] = useState(0);
  const searchParams = useSearchParams();
  const accountId = searchParams.get('accountId');
  const passwordResetToken = searchParams.get('passwordResetToken');

  const form = useForm<ResetPasswordDTO & { confirmPassword: string }>({
    initialValues: {
      accountId: '',
      newPassword: '',
      passwordResetToken: '',
      confirmPassword: '',
    },
    validateInputOnChange: true,
    validate: {
      newPassword: (value) =>
        value.length >= 8 ? null : 'Password must be at least 8 characters long',
      confirmPassword: (value, values) =>
        value === values.newPassword ? null : 'Passwords do not match',
    },
  });
  console.log(accountId, passwordResetToken);
  useEffect(() => {
    if (!accountId && !passwordResetToken) {
      window.open('/', '_blank');
    }
    form.setFieldValue('accountId', accountId ?? '');
    form.setFieldValue('passwordResetToken', passwordResetToken ?? '');
  }, []);

  return (
    <>
      <Stack flex={1} justify="center" align="center">
        <Container size="xs" w="100%" style={{ maxWidth: '350px' }}>
          {resetStatus == 0 ? (
            <Stack>
              <Box>
                <img src={'/svgs/logo.svg'} width={45} />
                <Title order={3}>Create a new password</Title>
                <Text>Add a way to secure your account</Text>
              </Box>
              <form
                onSubmit={form.onSubmit((values) => {
                  values.accountId = accountId ?? '';
                  values.passwordResetToken = passwordResetToken ?? '';

                  if (!accountId && !passwordResetToken) {
                    showNotification({
                      message: 'Invalid  reset link, Please request password reset link again.',
                    });
                    return;
                  }

                  setLoading(true);
                  new PasswordApi()
                    .authControllerResetPassword(values)
                    .then(() => {
                      showNotification({ message: 'Password reset successful' });
                      setStatus(1);
                      setLoading(false);
                    })
                    .catch(() => {
                      setLoading(false);
                    });
                })}
              >
                <Stack>
                  <PasswordInput label="Enter Password" {...form.getInputProps('newPassword')} />
                  <PasswordInput
                    label="Confirm password"
                    {...form.getInputProps('confirmPassword')}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    disabled={form.isValid() == true ? false : true}
                    loading={loading}
                  >
                    Continue
                  </Button>
                  <PasswordRequirements password={form.values.newPassword} />
                </Stack>
              </form>
            </Stack>
          ) : (
            <Box>
              <Stack ta={'center'}>
                <Center>
                  <img src={'/svgs/success.svg'} />
                </Center>
                <Box>
                  <Text fw={'bold'} size="xl">
                    Password reset successful
                  </Text>
                  <Text>
                    Your password has been successfully reset. <br />
                    You can now sign in with your new password.
                  </Text>
                </Box>
              </Stack>
            </Box>
          )}
        </Container>
      </Stack>
    </>
  );
}
