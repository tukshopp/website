import { ContactUs } from '@/components/contact-us/ContactUs';
import Footer from '@/components/navigation/footer';
import NavBar from '@/components/navigation/navbar';
import { AppShell, Container, Center, Stack } from '@mantine/core';

export default function ContactUsPage() {
  return (
    <>
      <AppShell>
        <AppShell.Main className="space-y-10 md:space-y-20">
          {/* NAVBAR */}
          <NavBar />
          {/* HEADER */}
          <Container w={'100%'} pt={{ base: 20, sm: 0 }} className="relative">
            <Stack justify="center" h={'100%'} style={{ minHeight: '50vh' }}>
              <ContactUs/>
            </Stack>
          </Container>

          {/* FOOTER */}
          <Footer />
        </AppShell.Main>
      </AppShell>
    </>
  );
}
