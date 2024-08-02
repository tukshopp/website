import {
  Box,
  Flex,
  List,
  Text,
  Title,
  Select,
  Button,
  AppShell,
  Container,
  TextInput,
} from '@mantine/core';
import axios from 'axios';
import Image from 'next/image';
import NavBar from '@/components/navigation/navbar';
import Footer from '@/components/navigation/footer';
import { platformBenefits } from '@/utilities/data';
import { notifications } from '@mantine/notifications';
import { useLayoutEffect, useRef, useState } from 'react';
import {
  IconMapPinFilled,
  IconDiscountCheckFilled,
} from '@tabler/icons-react/dist/cjs/tabler-icons-react.cjs';

interface ActiveState {
  code: string;
  name: string;
  slug: string;
  country_code: string;
}

export async function getServerSideProps() {
  const res = await fetch('https://staging-api.tukshopp.ng/v1/miscellaneous/states');
  const data = await res.json();

  return { props: { activeStates: data } };
}

const HeaderWords = ['Food', 'Groceries', 'Drinks'];

export default function HomePage({ activeStates }: { activeStates: ActiveState[] }) {
  const waitListRef = useRef<HTMLDivElement | null>(null);

  const [userEmail, setUserEmail] = useState<string>('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
  const [userActiveState, setUserActiveState] = useState<string | null>('Abia');

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % HeaderWords.length);
    }, 5100);

    return () => clearInterval(interval);
  }, []);

  const handleWaitListRefClick = () => {
    if (waitListRef.current) {
      waitListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      <AppShell>
        <AppShell.Main className="space-y-20">
          {/* NAVBAR */}
          <NavBar />

          {/* HEADER */}
          <Container w={'100%'} className="bg-slate-5 relative">
            <Flex
              wrap={'wrap'}
              direction={{ base: 'column', sm: 'row' }}
              justify={{ sm: 'start', lg: 'space-between' }}
            >
              <Box ref={waitListRef} className="space-y-5 w-full md:w-[45%] -mt-10 sm:-mt-0">
                <Box className="flex space-x-2">
                  <Text style={{ fontSize: 8 }} fw={'bold'}>
                    Launching soon!
                  </Text>
                  <span className="hidden lg:block font-normal text-[8px]">
                    Join waitlist and be the first to experience it
                  </span>
                </Box>

                <Title style={{ fontFamily: 'Gotham', fontWeight: 800 }} order={1}>
                  Get your <span className="mantine-Title text-[#F97316] text-slider__word">{HeaderWords[currentWordIndex]}</span> delivered to
                  your doorstep
                </Title>

                <Text size="xs">Everything you need, delivered when you need it.</Text>

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
                    data={activeStates.map((state) => ({
                      value: state?.slug,
                      label: state?.name,
                    }))}
                    value={userActiveState}
                    onChange={setUserActiveState}
                    leftSection={<IconMapPinFilled color="#E13D45" size={16} />}
                  />
                </Flex>

                {!isFormSubmitted ? (
                  <Button
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
              </Box>

              <Box className="w-full md:w-[45%] h-[400px] md:h-[500px] mt-5 md:mt-0 relative">
                <Image fill alt="TukShop Rider" src={'/images/image_rider.png'} />
              </Box>
            </Flex>

            {/* BLOBS */}
            <Box className="absolute -top-16 right-[30vw] h-[100px] w-[160px] -z-10 blob_animation_5s">
              <Image fill alt="" src={'/images/image_blob_1.png'} />
            </Box>
            <Box className="absolute bottom-0 left-0 h-[200px] w-[240px] -z-10 blob_animation_5s">
              <Image fill alt="" src={'/images/image_blob_2.png'} />
            </Box>
            <Box className="absolute bottom-0 right-0 h-[400px] w-[480px] -z-10 blob_animation_5s">
              <Image fill alt="" src={'/images/image_blob_3.png'} />
            </Box>
          </Container>

          {/* DISCOVERY */}
          <Container w={'100%'} py={{ base: 5, md: 10 }} mt={{ base: 5, md: 40 }}>
            <Box className="mx-auto text-center w-full md:w-[40%] space-y-3">
              <Title order={4} ff={'Gotham'}>
                Discover the benefits of our versatile delivery service
              </Title>
              <Text size="xs">Effortless convenience at your fingertips</Text>
            </Box>

            <Flex
              className="mt-[26px] md:mt-10"
              align={{ base: 'center', md: 'start' }}
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'center', md: 'space-between' }}
            >
              {platformBenefits.map((item, index) => (
                <Flex
                  mb={30}
                  w={230}
                  key={index}
                  align={'center'}
                  direction={'column'}
                  justify={'space-between'}
                >
                  <Box className="relative" h={160} w={200}>
                    <Box className="relative" h={140} w={180}>
                      <Image alt="" fill className="object- object-fill" src={item.image} />
                    </Box>

                    <Box className="absolute top-0 left-0 h-full w-full -z-10 blob_animation_5s">
                      <Image
                        fill
                        alt=""
                        src={`/images/image_blob_${index === 0 ? '1' : index === 1 ? '2' : '3'}.png`}
                      />
                    </Box>
                  </Box>

                  <Text fw={'bold'} ff={'Gotham'} size="xs" className="text-center">
                    {item.title}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Container>

          {/* FOR CUSTOMERS */}
          <Container w={'100%'} py={{ base: 5, md: 10 }} mt={{ base: 5, md: 40 }}>
            <Flex
              wrap={'wrap'}
              align={'center'}
              direction={{ base: 'column', sm: 'row' }}
              justify={{ sm: 'start', lg: 'space-between' }}
            >
              <Flex align={'center'} direction={'column'} className="space-y-5 w-full md:w-[45%]">
                <Box className="space-y-2">
                  <Text size="xs" c={'customOrange'} ff={'Gotham'} fw={'bold'}>
                    FOR CUSTOMERS
                  </Text>
                  <Title order={4} ff={'Gotham'}>
                    Enjoy Unmatched Convenience with Our App
                  </Title>
                </Box>

                <List
                  spacing="lg"
                  size="sm"
                  center
                  icon={
                    <Box className="relative" h={30} w={30}>
                      <Image
                        fill
                        alt=""
                        className="object-cover"
                        src={'/icons/icon_menu_item.svg'}
                      />
                    </Box>
                  }
                >
                  <List.Item>A vast selection from your favorite stores</List.Item>
                  <List.Item>Live order tracking</List.Item>
                  <List.Item>Convenient scheduling options</List.Item>
                </List>
              </Flex>

              <Box className="relative w-[320px] h-[320px] mt-10 sm:mt-0">
                <Box className="w-[280px] md:w-[300px] h-[250px] md:h-[300px] mt-5 md:mt-0 relative">
                  <Image fill alt="TukShop Shopping Bag" src={'/images/image_shopping_bag_2.png'} />
                </Box>

                <Box className="absolute top-0 left-0 md:left-4 w-full md:w-[320px] h-[300px] md:h-[320px] rounded-3xl bg-slate-100 -z-10 blob_animation_3s" />
              </Box>
            </Flex>
          </Container>

          {/* FOR VENDORS */}
          <Container w={'100%'} py={{ base: 5, md: 10 }} mt={{ base: 5, md: 40 }}>
            <Flex
              wrap={'wrap'}
              align={'center'}
              direction={{ base: 'column', sm: 'row' }}
              justify={{ sm: 'start', lg: 'space-between' }}
            >
              <Box className="relative w-[320px] h-[320px] mt-10 sm:mt-0">
                <Box className="w-[320px] h-[250px] mt-5 md:mt-0 relative">
                  <Image
                    fill
                    alt="TukShop Shopping Bag"
                    className="object-"
                    src={'/images/image_store.png'}
                  />
                </Box>

                <Box className="absolute bottom-5 left-0 w-[320px] h-[320px] rounded-3xl bg-slate-100 -z-10 blob_animation_3s" />
              </Box>

              <Flex align={'center'} direction={'column'} className="space-y-5 w-full md:w-[45%]">
                <Box className="space-y-2">
                  <Text size="xs" c={'customOrange'} ff={'Gotham'} fw={'bold'}>
                    FOR VENDORS
                  </Text>
                  <Title order={4} ff={'Gotham'}>
                    Expand Your Reach and Manage Effortlessly
                  </Title>
                </Box>

                <List
                  spacing="lg"
                  size="sm"
                  center
                  icon={
                    <Box className="relative" h={30} w={30}>
                      <Image
                        fill
                        alt=""
                        className="object-cover"
                        src={'/icons/icon_calender.svg'}
                      />
                    </Box>
                  }
                >
                  <List.Item>Add multiple outlets for wider coverage</List.Item>
                  <List.Item>Streamlined order and inventory management</List.Item>
                  <List.Item>Grow your customer base with ease</List.Item>
                </List>
              </Flex>
            </Flex>
          </Container>

          {/* FOR RIDERS */}
          <Container w={'100%'} py={{ base: 5, md: 10 }} mt={{ base: 5, md: 40 }}>
            <Flex
              wrap={'wrap'}
              align={'center'}
              direction={{ base: 'column', sm: 'row' }}
              justify={{ sm: 'start', lg: 'space-between' }}
            >
              <Flex align={'center'} direction={'column'} className="space-y-5 w-full md:w-[45%]">
                <Box className="space-y-2">
                  <Text size="xs" c={'customOrange'} ff={'Gotham'} fw={'bold'}>
                    FOR RIDERS
                  </Text>
                  <Title order={4} ff={'Gotham'}>
                    Optimize Your Deliveries and Boost Earnings
                  </Title>
                </Box>

                <List
                  spacing="lg"
                  size="sm"
                  center
                  icon={
                    <Box className="relative" h={30} w={30}>
                      <Image fill alt="" className="object-cover" src={'/icons/icon_package.svg'} />
                    </Box>
                  }
                >
                  <List.Item>Optimized routes for quicker deliveries</List.Item>
                  <List.Item>Increased earning potential with zoned deliveries</List.Item>
                  <List.Item>Be part of an innovative delivery network</List.Item>
                </List>
              </Flex>

              <Box className="relative w-[320px] h-[340px] mt-10 sm:mt-0">
                <Box className="w-[320px] h-[250px] mt-5 md:mt-0 relative">
                  <Image
                    fill
                    alt="TukShop Shopping Bag"
                    className="object-"
                    src={'/images/image_rider_2.png'}
                  />
                </Box>

                <Box className="absolute bottom-5 left-0 w-[320px] h-[340px] rounded-3xl bg-slate-100 -z-10 blob_animation_3s" />
              </Box>
            </Flex>
          </Container>

          {/* FOOTER */}
          <Footer handleWaitListClick={handleWaitListRefClick} />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
