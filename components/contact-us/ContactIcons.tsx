import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} color='black' />
      </Box>

      <div>
        <Text size="xs" c={"dimmed"}>
          {title}
        </Text>
        <Text c="black">{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'care@tukshopp.com', icon: IconAt },
  { title: 'Phone', description: '+234 707 740 9220', icon: IconPhone },
  { title: 'Address', description: 'Suite 26 RHOMAT PLAZA No. 29 Jonah David Jang Way, Rayfield, Jos Plateau State', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 6 p.m.', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}