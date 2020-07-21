import React from 'react';

import { Title } from './styles';

export default ({ match }) => {
  return (
    <Title>Repository: {decodeURIComponent(match.params.repository)}</Title>
  );
};
