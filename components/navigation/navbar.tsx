import React from 'react';
import Image from 'next/image';
import { theme } from '@/theme';
import { Anchor, Box, Button, Container, Flex, Menu } from '@mantine/core';

const NavBar = () => {
  const handleVendorClick = () => {
    window.location.href = 'https://vendor.tukshopp.ng';
  };

  const handleRiderClick = () => {
    window.location.href = 'https://rider.tukshopp.ng';
  };
  return (
    <Container w={'100%'} h={40} my={10} className="sticky top-2 z-10">
      <Flex h={'100%'} w={'100%'} justify={'space-between'} align={'center'}>
        <Anchor w={40} h={'100%'} mr={10} className={'relative'} href="/">
          <Image fill alt="" src={'/icons/icon_tukshop.svg'} />
        </Anchor>

        <Flex
          px={10}
          h={'100%'}
          w={'100%'}
          c={'white'}
          align={'center'}
          style={{
            borderRadius: 10,
          }}
          bg={theme.primaryColor}
          justify={'space-between'}
        >
          <Anchor w={'60'} h={'70%'} className={'relative'} href="/">
            <Image fill alt="" src={'/icons/icon_tukshop_clif.svg'} />
          </Anchor>

          <Menu shadow="md" width={187}>
            <Menu.Target>
              <Button
                style={{
                  height: 30,
                  fontSize: 12,
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                }}
              >
                Join Tukshopp
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item c="#3C3C3D" onClick={handleVendorClick}>
                Join as a vendor
              </Menu.Item>
              <Menu.Item c="#3C3C3D" onClick={handleRiderClick}>
                Join as a rider
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavBar;
