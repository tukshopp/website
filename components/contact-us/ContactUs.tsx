import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Select,
} from '@mantine/core';
import { IconBrandInstagram, IconX, IconBrandX, IconBrandFacebook } from '@tabler/icons-react';

import classes from './ContactUs.module.css';
import { ContactIconsList } from './ContactIcons';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import { ContactUsDto, CustomerFeedbackApi } from '@/src/sdk/utils';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';

const social = [
  { Icon: IconBrandInstagram, path: 'https://www.instagram.com/tukshoppapp/' },
  { Icon: IconBrandX, path: 'https://x.com/Tukshopp' },
  { Icon: IconBrandFacebook, path: 'https://web.facebook.com/profile.php?id=61563006697064' },
];

export function ContactUs() {
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactUsDto>({
    initialValues: {
      comments: '',
      email: '',
      name: '',
      phone: '',
      subject: '',
    },
  });

  const icons = social.map(({ Icon, path }, index) => (
    <Link href={path} target="_blank" key={index}>
      <ActionIcon
        key={index}
        p="sm"
        size={'xl'}
        className={classes.social}
        variant="filled"
        radius={'xl'}
      >
        <Icon size="1.4rem" stroke={1.5} color="white" />
      </ActionIcon>
    </Link>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
        <form
          className={classes.form}
          onSubmit={form.onSubmit(async (values) => {
            try {
              setLoading(true);
              await new CustomerFeedbackApi().customerFeedbackControllerSubmitContactUs(values);
              form.reset();
              showNotification({
                title: 'Success',
                message: 'Your message has been sent successfully',
                color: 'green',
                autoClose: 5000,
              });
              setLoading(false);
            } catch (err) {
              setLoading(false);
              showNotification({
                title: 'Error',
                message: 'Something went wrong',
                color: 'red',
                autoClose: 5000,
              });
            }
          })}
        >
          <TextInput
            label="Phone"
            placeholder="Your phone number"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('phone')}
          />
          <TextInput
            label="Email"
            mt="md"
            placeholder="Your email"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Name"
            {...form.getInputProps('name')}
            mt="md"
            placeholder="Your name"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Select
            label="Subject"
            {...form.getInputProps('subject')}
            mt="md"
            placeholder="Select subject"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            data={[
              { value: 'delivery_issues', label: 'Delivery or Order Issues' },
              { value: 'rider_vendor_feedback', label: 'Feedback on Riders or Vendors' },
              { value: 'marketing_feedback', label: 'Marketing and Business Feedback' },
              { value: 'partnership_inquiry', label: 'Partnership Inquiries' },
              { value: 'other', label: 'Other Concerns' },
            ]}
          />
          <Textarea
            required
            label="Your message"
            {...form.getInputProps('comments')}
            placeholder="Type here"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button className={classes.control} type="submit" loading={loading}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
