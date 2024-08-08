import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react/dist/cjs/tabler-icons-react.cjs';
import { Box, Button, Divider, Flex, Text, Title } from '@mantine/core';
import { IconBrandFacebook } from '@tabler/icons-react';

interface FooterProps {
  handleWaitListClick: () => void;
}

const Footer = ({ handleWaitListClick }: FooterProps) => {
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
            Join the waitlist to stay informed and be the first to experience it.
          </Text>
          <Button
            bg={'white'}
            c={'black'}
            className="z-10"
            onClick={handleWaitListClick}
            style={{ height: 40, fontSize: 12, borderRadius: 15 }}
          >
            Join Waitlist
          </Button>
        </Flex>

        <Box w={'100%'} className="z-10">
          <Divider variant="solid" color={'customLightOrange'} size={'xs'} />
        </Box>

        <Flex align={'center'} justify={'center'} direction={'column'} gap={10} className="z-10">
          <Flex align={'center'} direction={'row'} gap={20}>
            <Link href="https://x.com/Tukshopp" target="_blank">
              <IconBrandX size={30} color="white" />
            </Link>
            <Link
              href="https://www.instagram.com/reel/C8ccOl5NSPd/?igsh=aXFvamVoZ3VtNTA4"
              target="_blank"
            >
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
      </Flex>
    </Box>
  );
};

export default Footer;
