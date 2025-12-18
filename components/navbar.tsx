import { AppBar, Link, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/' underline='none' color='inherit'>Wishing</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}