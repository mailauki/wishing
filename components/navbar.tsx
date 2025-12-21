'use client'
import { AccountCircle, Add, HomeFilled, Inventory, Menu, MenuOpen } from '@mui/icons-material';
import { AppBar, Box, Divider, Drawer as MuiDrawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Stack, Typography, Paper } from '@mui/material';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import * as React from 'react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderColor: 'transparent',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(12)} + 1px)`,
  borderColor: 'transparent',
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const NavItem = ({ text, icon, link, open }: { text: string, icon: React.ReactNode, link: string, open: boolean }) => {
  return (
    <ListItem key={text} sx={{ display: 'block' }}>
      <ListItemButton
        href={link}
        sx={[
          {
            minHeight: 40,
            px: 2.5,
            py: 0.5,
            borderRadius: 6,
          },
          open ? {
            justifyContent: 'initial',
          } : {
            justifyContent: 'center',
          },
        ]}
        selected={text == 'Add items'}
      >
        <ListItemIcon
          sx={[
            {
              minWidth: 0,
              justifyContent: 'center',
            },
            open ? { mr: 3 } : { mr: 'auto' },
          ]}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={[
            open ? { opacity: 1 } : { opacity: 0 },
          ]}
        />
      </ListItemButton>
      <Stack
        direction='row'
        justifyContent='center'
        sx={[
          { pt: 0.15 },
          open ? { opacity: 0 } : { opacity: 1 },
        ]}
      >
        <Typography
          variant='caption'
          sx={{ color: 'text.secondary' }}
        >
          {text}
        </Typography>
      </Stack>
    </ListItem>
  )
}

export default function Navbar({
  children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(false);

  return (
    <Paper sx={{ display: 'flex', height: '100vh' }} elevation={0}>
      <AppBar
        color='inherit'
        elevation={0}
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ mx: 0.5 }}>
          <IconButton onClick={() => setOpen(!open)} color='inherit'>
            {open ? <MenuOpen /> : <Menu />}
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ ml: 6 }}>
            Wishing
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='permanent'
        elevation={0}
        open={open}
      >
        <Toolbar />

        <List disablePadding sx={{ pt: 2 }}>
          <NavItem
            text='Add items'
            icon={<Add />}
            link='#'
            open={open}
          />
					
          <Divider sx={{ my: 2, opacity: 0 }} />

          <NavItem
            text='Home'
            icon={<HomeFilled />}
            link='/'
            open={open}
          />
          <NavItem
            text='Wishes'
            icon={<Inventory />}
            link='/wishes'
            open={open}
          />
          <NavItem
            text='Account'
            icon={<AccountCircle />}
            link='/account'
            open={open}
          />
        </List>
      </Drawer>

      <Box component='main' sx={{ flexGrow: 1, pr: 3 }}>
        <Toolbar />
        <Paper elevation={1} sx={{ borderRadius: 6, height: '90%' }}>
          {children}
        </Paper>
      </Box>
    </Paper>
  )
}