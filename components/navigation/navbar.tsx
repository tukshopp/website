import React from 'react';
import Image from 'next/image';
import { theme } from '@/theme';
import { Box, Button, Container, Flex } from '@mantine/core';

const NavBar = () => {
  return (
    <Container w={'100%'} h={40} my={10} className="sticky top-2 z-10">
      <Flex h={'100%'} w={'100%'} justify={'space-between'} align={'center'}>
        <Box w={40} h={'100%'} mr={10} className={'relative'}>
          <Image fill alt="" src={'/icons/icon_tukshop.svg'} />
        </Box>

        <Flex
          px={10}
          h={'100%'}
          w={'100%'}
          c={'white'}
          align={'center'}
          style={{
            borderRadius: 10
          }}
          bg={theme.primaryColor}
          justify={'space-between'}
        >
          <Box w={'60'} h={'70%'} className={'relative'}>
            <Image fill alt="" src={'/icons/icon_tukshop_clif.svg'} />
          </Box>

          <Button style={{ height: 30, fontSize: 12 }} bg={'customLightOrange'}>
            Coming Soon
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavBar;
