import { Stack } from '@mui/material'
import React from 'react'
import instlogo from '../instagram.png'
import fblogo from '../facebook.png'

function FooterComponent() {
  return (
    <footer>
        <Stack direction='row' spacing={75} >
            <a style={{fontFamily:'cursive',marginTop:120 }} > &nbsp;&nbsp; todos los derechos Reservados LongHorns Toluca...</a>
        <Stack  alignItems='flex-end' justifyContent='space-around'  direction='column' height={150} style={{marginRight:55}} >
            <Stack alignItems='center' spacing={2}>
            <a style={{color:'blue'}}> <strong> siguenos en Redes Sociales </strong> </a>
            <a href='https://www.facebook.com/profile.php?id=61555736676222' target="_blank"><img  style={{width:25, height:25}} src={fblogo}></img></a>
            <a href='https://www.instagram.com/cuernoslargos_flagtoluca?igsh=MXV5b28wMXRvNGdwaw==' target="_blank"><img style={{width:25, height:25}} src={instlogo}></img></a>
            </Stack>
        </Stack>
        </Stack>
    </footer>
)
}

export default FooterComponent