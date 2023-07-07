import PropTypes from 'prop-types';

import { Container, Title } from './Layout.module';

export const Layout = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
