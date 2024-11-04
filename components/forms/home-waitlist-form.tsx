import axios from 'axios';
import React, { useState } from 'react';
import { notifications } from '@mantine/notifications';
import {
  IconDiscountCheckFilled,
  IconMapPinFilled,
} from '@tabler/icons-react/dist/cjs/tabler-icons-react.cjs';
import { Anchor, Box, Button, Flex, Select, Text, TextInput, UnstyledButton } from '@mantine/core';
import Image from 'next/image';

interface ActiveState {
  code: string;
  name: string;
  slug: string;
  country_code: string;
}

interface HomeWaitListFormProps {
  activeStates: ActiveState[];
}

const HomeWaitListForm = ({ activeStates }: HomeWaitListFormProps) => {
  return (
    <>
      <Flex gap={10}>
        <UnstyledButton ff={'Roboto'} style={{ height: 40, fontSize: 12, borderRadius: 15 }}>
          <Image alt="" src={'/icons/icon_appstore.svg'} width={120} height={40} />
        </UnstyledButton>

        <UnstyledButton ff={'Roboto'} style={{ height: 40, fontSize: 12, borderRadius: 15 }}>
          <Image alt="" src={'/icons/icon_playstore.svg'} width={120} height={40} />
        </UnstyledButton>
      </Flex>
    </>
  );
};

export default HomeWaitListForm;
