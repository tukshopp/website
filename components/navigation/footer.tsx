import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react/dist/cjs/tabler-icons-react.cjs';
import { Anchor, Box, Button, Divider, Flex, Group, Text, Title } from '@mantine/core';
import { IconBrandApple, IconBrandFacebook } from '@tabler/icons-react';
import { Apple01Icon, AppleStocksIcon, PlayStoreIcon } from 'hugeicons-react';

const Footer = () => {
  return (
    <Box
      w={'100%'}
      py={50}
      px={20}
      className="relative"
      style={{ backgroundImage: `url('/images/image_footer_bg.jpg')`, objectFit: 'cover' }}
    >
      <Flex
        gap={30}
        align={'center'}
        direction={'column'}
        className="text-center"
        justify={'space-between'}
        mb={10}
      >
        <Flex align={'center'} direction={'column'} gap={10}>
          <Image
            width={180}
            height={180}
            alt="TukShop Shopping Bag"
            className="z-10 obj"
            src={'/images/image_shopping_bag_3.png'}
          />
          <Title order={4} ff={'Gotham'} c={'white'} className="z-10">
            Excited to get started?
          </Title>
          <Text size="sm" c={'white'} className="z-10">
            It’s here! Your exclusive access is just a click away—join us now!{' '}
          </Text>
        </Flex>
        <Flex gap={2}>
          <Image alt="" src={'/icons/icon_playicon.svg'} width={15} height={15} />
          <Divider color="white" size={'sm'} orientation="vertical" />
          <Image alt="" src={'/icons/icon_appleicon.svg'} width={15} height={15} />
          <Text c={'white'} size="sm">
            Download mobile app
          </Text>
        </Flex>
        <Box w={'100%'} className="z-10">
          <Divider variant="solid" color={'customLightOrange'} size={'xs'} />
        </Box>
      </Flex>
      <Group justify="space-between">
        <Flex direction={'column'} gap={10} className="z-10">
          <Flex direction={'row'}>
            <Link href="https://x.com/Tukshopp" target="_blank">
              <IconBrandX size={30} color="white" />
            </Link>
            <Link href="https://www.instagram.com/tukshoppapp/" target="_blank">
              <IconBrandInstagram size={30} color="white" />
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=61563006697064" target="_blank">
              <IconBrandFacebook size={30} color="white" />
            </Link>
          </Flex>

          <Text size="sm" c={'white'} className="z-10">
            Connect with us on social media for the latest news and sneak peeks!
          </Text>
        </Flex>
        <Group>
          <Link href="/terms">
            <Text c={'white'} className="z-10" size="sm">
              Terms of use
            </Text>
          </Link>
          <Link href="/privacy-policy">
            <Text c={'white'} className="z-10" size="sm">
              Privacy policy
            </Text>
          </Link>
        </Group>
      </Group>
    </Box>
  );
};

export default Footer;
