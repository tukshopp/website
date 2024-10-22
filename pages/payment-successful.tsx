import NavBar from '@/components/navigation/navbar';
import { Box, Flex, List, Text, Title, AppShell, Container, Center, Stack } from '@mantine/core';

export default function PaymentSuccessfulPage() {
  return (
    <>
      <AppShell>
        <AppShell.Main className="space-y-10 md:space-y-20">
          {/* NAVBAR */}
          <NavBar />
          {/* HEADER */}
          <Container w={'100%'} pt={{ base: 20, sm: 0 }} className="relative">
            <Stack justify="center" h={'100%'} style={{ minHeight: '50vh' }}>
              <Center>
                <svg
                  width="150"
                  height="120"
                  viewBox="0 0 150 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M118.796 21.3151L116.708 15.5331C121.462 10.9075 127.362 11.9996 129.718 13.1238L131.806 18.5846C126.152 15.3724 120.777 19.0665 118.796 21.3151Z"
                    fill="#F9C22A"
                  />
                  <path
                    d="M118.796 97.9114L116.708 92.1294C121.462 87.5038 127.362 88.5959 129.718 89.7202L131.806 95.181C126.152 91.9687 120.777 95.6628 118.796 97.9114Z"
                    fill="#F9C22A"
                  />
                  <path
                    d="M7.51674 86.6694L5.42871 80.8874C10.1828 76.2618 16.0826 77.3538 18.4383 78.4781L20.5263 83.9389C14.8727 80.7267 9.49761 84.4208 7.51674 86.6694Z"
                    fill="#F9C22A"
                  />
                  <path
                    d="M26.514 21.5644L28.6021 15.7824C23.848 11.1568 17.9481 12.2489 15.5924 13.3731L13.5045 18.8339C19.158 15.6217 24.5331 19.3158 26.514 21.5644Z"
                    fill="#16A010"
                  />
                  <path
                    d="M99.7926 8.55332L97.7046 2.7713C102.459 -1.85431 105.774 0.45606 108.13 1.58031L112.802 5.82283C107.149 2.61059 101.773 6.30472 99.7926 8.55332Z"
                    fill="#16A010"
                  />
                  <path
                    d="M42.9403 9.61557L45.0283 3.83356C40.2743 -0.792049 36.9589 1.51832 34.6033 2.64256L29.9308 6.88508C35.5843 3.67285 40.9594 7.36698 42.9403 9.61557Z"
                    fill="#16A010"
                  />
                  <path
                    d="M14.583 65.7315C16.3699 57.4673 23.7631 42.212 39.041 47.3045C58.1383 53.6702 54.6058 24.7093 62.1588 23.1815C68.9521 21.8073 76.1188 19.161 79.2458 17.1508"
                    stroke="#FF6D2E"
                    stroke-width="2.01902"
                    stroke-linecap="square"
                  />
                  <g filter="url(#filter0_d_323_5148)">
                    <rect
                      x="33.5488"
                      y="21.5645"
                      width="79.7514"
                      height="79.7514"
                      rx="39.8757"
                      fill="#16A010"
                    />
                    <rect
                      x="34.5583"
                      y="22.574"
                      width="77.7323"
                      height="77.7323"
                      rx="38.8662"
                      stroke="white"
                      stroke-width="2.01902"
                    />
                    <path
                      d="M55.8291 60.7474L66.5935 71.5117C67.3819 72.3002 68.6603 72.3002 69.4488 71.5117L91.0198 49.9407"
                      stroke="#FFF5F0"
                      stroke-width="4.03804"
                      stroke-linecap="round"
                    />
                  </g>
                  <path
                    d="M130.848 41.5851C131.781 40.2788 134.374 38.4499 137.286 41.5851C140.925 45.504 141.065 40.1855 144.564 40.3255C147.363 40.4374 148.063 42.145 148.063 42.9847"
                    stroke="#FF6D2E"
                    stroke-width="2.01902"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1.9375 56.5201C2.87044 55.2138 5.46414 53.385 8.37541 56.5201C12.0145 60.4391 12.1545 55.1206 15.6534 55.2605C18.4526 55.3725 19.1524 57.08 19.1524 57.9198"
                    stroke="#16A010"
                    stroke-width="2.01902"
                    stroke-linecap="round"
                  />
                  <path
                    d="M28.8721 24.9445C29.805 23.6381 32.3987 21.8093 35.31 24.9445C38.9491 28.8634 39.089 23.5449 42.588 23.6849C45.3872 23.7968 46.087 25.5043 46.087 26.3441"
                    stroke="#FF6D2E"
                    stroke-width="2.01902"
                    stroke-linecap="round"
                  />
                  <path
                    d="M122.593 65.3527C124.146 64.9483 127.309 65.2075 127.534 69.48C127.814 74.8207 131.331 70.8287 133.927 73.1793C136.003 75.0598 135.446 76.8189 134.907 77.4634"
                    stroke="#FF6D2E"
                    stroke-width="2.01902"
                    stroke-linecap="round"
                  />
                  <ellipse
                    opacity="0.4"
                    cx="71.4643"
                    cy="117.567"
                    rx="28.4452"
                    ry="2.4332"
                    fill="#724A39"
                  />
                  <defs>
                    <filter
                      id="filter0_d_323_5148"
                      x="31.5298"
                      y="19.5454"
                      width="83.7895"
                      height="83.7894"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="2.01902"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_323_5148"
                      />
                      <feOffset />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0862745 0 0 0 0 0.627451 0 0 0 0 0.0627451 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_323_5148"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_323_5148"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Center>
              <Box>
                <Title ta={'center'} order={2}>
                  Payment Received
                </Title>
                <Text ta={'center'}>
                  Your payment has been received and will be <br />
                  processed shortly.
                </Text>
              </Box>
            </Stack>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
