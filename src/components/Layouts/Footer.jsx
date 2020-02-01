import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box'



export default function Footer() {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        {' © '}
        <Link color="inherit" href="https://github.com/VIKI-09">
            powered by Victor Mykytyn
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  )
}
