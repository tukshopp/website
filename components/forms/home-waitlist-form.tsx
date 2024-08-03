import axios from 'axios';
import React, { useState } from 'react';
import { notifications } from '@mantine/notifications';
import {
  IconDiscountCheckFilled,
  IconMapPinFilled,
} from '@tabler/icons-react/dist/cjs/tabler-icons-react.cjs';
import { Button, Flex, Select, Text, TextInput } from '@mantine/core';

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
  const [userEmail, setUserEmail] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [userActiveState, setUserActiveState] = useState<string | null>('Plateau');

  const handleWaitListSubmit = async () => {
    try {
      setIsFormSubmitted(false);
      setIsFormSubmitting(true);

      if (!userEmail) {
        setIsFormSubmitting(false);

        return notifications.show({
          title: 'Message',
          message: 'Email is required!',
        });
      }
      if (!userActiveState) {
        setIsFormSubmitting(false);

        return notifications.show({
          title: 'Message',
          message: 'State is required!',
        });
      }

      const res = await axios.post('https://staging-api.tukshopp.ng/v1/miscellaneous/waitlist', {
        contactName: '',
        contactEmail: userEmail,
        addressTag: userActiveState,
      });

      if (res.status === 200 || res.status === 201) {
        setUserEmail('');
        setUserActiveState('Abia');

        setIsFormSubmitted(true);
        setIsFormSubmitting(false);

        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 5000);
      }

      setIsFormSubmitting(false);
    } catch (error) {
      setIsFormSubmitting(false);

      // console.log('[WAITLIST-ERROR] :: ', error);

      return notifications.show({
        title: 'Message',
        message: 'An error occurred, please try again!',
      });
    }
  };

  return (
    <>
      <Flex>
        <TextInput
          w={'60%'}
          mr={10}
          value={userEmail}
          placeholder="Your email address"
          onChange={(event) => setUserEmail(event.currentTarget.value)}
        />
        <Select
          w={'40%'}
          searchable
          placeholder="Location"
          value={userActiveState}
          onChange={setUserActiveState}
          defaultValue={userActiveState}
          data={activeStates?.map((state) => ({
            value: state?.name,
            label: state?.name,
          }))}
          leftSection={<IconMapPinFilled color="#E13D45" size={16} />}
        />
      </Flex>

      {!isFormSubmitted ? (
        <Button
        ff={'Roboto'}
          bg={'customOrange'}
          loading={isFormSubmitting}
          loaderProps={{ type: 'dots' }}
          onClick={handleWaitListSubmit}
          style={{ height: 40, fontSize: 12, borderRadius: 15 }}
        >
          Join Waitlist
        </Button>
      ) : (
        <Flex align={'start'} gap={5}>
          <IconDiscountCheckFilled color="green" />

          <Text size="xs" fw={'bold'}>
            Thank you for joining the waitlist! We'll notify you when we launch.
          </Text>
        </Flex>
      )}
    </>
  );
};

export default HomeWaitListForm;
