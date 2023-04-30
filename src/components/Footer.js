import React from 'react'
import {Box , Stack , Typography} from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant='h6' pb="40px" mt="20px" textAlign="center" alignItems="center">
          Created by Tamizhveandan || Bangtantamizh007 || contact- {` `}
          <a href="https://tamizhveandand.web.app/" target="_blank">tamizhveandan</a> ||  {` `} Copyrights  {` `}
          <span><CopyrightIcon /></span> CR Fitness 2023
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer