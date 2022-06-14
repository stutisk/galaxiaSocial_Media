import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Dsidebar } from './Dsidebar';
import{ReSidebar} from './ResSidebar'

const Sidebar= () =>  {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <>
   {matches?<h1><ReSidebar/></h1> :< Dsidebar/>} 
    </>
  )
}

export {Sidebar}