import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { Cancel01Icon, Tick01Icon, MinusSignIcon } from 'hugeicons-react';

interface PasswordRequirementProps {
  meets: boolean;
  label: string;
  isTyping: boolean;
}

const PasswordRequirement: React.FC<PasswordRequirementProps> = ({ meets, label, isTyping }) => (
  <Box style={{ display: 'flex', alignItems: 'center' }}>
    {isTyping ? (
      meets ? (
        <Tick01Icon size={16} color="green" style={{ marginRight: '8px' }} />
      ) : (
        <Cancel01Icon size={16} color="red" style={{ marginRight: '8px' }} />
      )
    ) : (
      <MinusSignIcon size={16} color="gray" style={{ marginRight: '8px' }} />
    )}
    <Text size="sm" c={isTyping ? (meets ? 'black' : 'black') : 'dimmed'}>
      {label}
    </Text>
  </Box>
);

interface PasswordRequirementsProps {
  password: string;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({ password }) => {
  const isTyping = password.length > 0;
  const requirements = [
    { label: 'At least 8 characters long', meets: password.length >= 8 },
    { label: 'Contains at least one uppercase letter', meets: /[A-Z]/.test(password) },
    { label: 'Contains at least one lowercase letter', meets: /[a-z]/.test(password) },
    { label: 'Contains at least one number', meets: /\d/.test(password) },
    { label: 'Contains at least one symbol', meets: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  return (
    <Box
      mt="md"
      p="md"
      style={{
        backgroundColor: '#F9FAFB', 
        borderRadius: '8px', 
        padding: '16px', 
      }}
    >
      <Stack>
        {requirements.map((req, index) => (
          <PasswordRequirement key={index} {...req} isTyping={isTyping} />
        ))}
      </Stack>
    </Box>
  );
};

export default PasswordRequirements;
