import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Helmet from './Helmet';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <Container maxW='container.lg'>
      <Helmet />

      <Navbar />

      <Outlet />

      <Footer />
    </Container>
  );
}
