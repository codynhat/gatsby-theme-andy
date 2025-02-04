/** @jsx jsx */
import React from 'react';
import { Box, Styled, jsx } from 'theme-ui';

export default ({ reference }) => {
  return (
    <Box bg="background" p={3} sx={{ borderRadius: 2, boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)' }}>
      {reference.childMarkdownRemark.excerpt}
    </Box>
  );
};
