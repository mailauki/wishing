'use client'
import { AccountCircle, Add, HomeFilled, Menu, MenuOpen } from '@mui/icons-material';
import { AppBar, Divider, Drawer as MuiDrawer, IconButton, List, ListItemIcon, ListItemText, Toolbar, Stack, Typography, ListItem, ListItemButton, Button, Fab, Box, Link } from '@mui/material';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import * as React from 'react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderColor: 'transparent',
  backgroundColor: 'var(--surface)'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(12)} + 1px)`,
  [theme.breakpoints.down('sm')]: {
    width: `calc(${theme.spacing(0)} + 1px)`,
  },
  borderColor: 'transparent',
  backgroundColor: 'var(--surface)'
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

const NavItem = ({
  text, icon, link, open, pathname,
}: {
	text: string,
	icon: React.ReactNode,
	link: string,
	open: boolean,
	pathname: string,
}) => {
  return (
    <ListItem
      key={text}
      sx={{
        display: 'block',
        height: 68,
        py: open ? 1 : 2
      }}
    >
      <ListItemButton
        href={link}
        sx={[
          {
            minHeight: open ? 48 : 30,
            px: 2.5,
            py: open ? 1 : 0,
            borderRadius: 6,
          },
          open ? {
            justifyContent: 'initial',
          } : {
            justifyContent: 'center',
          },
        ]}
        selected={pathname == link}
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

export default function Navbar({ user }: { user: User }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  if(!user) {
    return (
      <>
        <AppBar
          // color='inherit'
          // elevation={0}
          position='fixed'
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            // backgroundColor: 'var(--surface)',
          }}
        >
          <Toolbar sx={{ mx: 0.5 }}>
            <Link
              variant='h6'
              underline='none'
              color='inherit'
              href='/'
              sx={{
                position: 'absolute',
                zIndex: 1,
                left: 0,
                right: 0,
                margin: '0 auto',
                width: 'fit-content',
              }}
            >
							Wishing
            </Link>
          </Toolbar>
        </AppBar>
      </>
    )
  }

  return (
    <>
      <AppBar
        position='fixed'
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ mx: 0.5 }}>
          <IconButton 
            onClick={() => setOpen(!open)}
            color='inherit'
          >
            {open ? <MenuOpen /> : <Menu />}
          </IconButton>
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='/'
            sx={{
              position: 'absolute',
              zIndex: 1,
              left: 0,
              right: 0,
              margin: '0 auto',
              width: 'fit-content',
            }}
          >
							Wishing
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        variant='permanent'
        open={open}
      >
        <Toolbar />

        <List disablePadding sx={{ pt: 2 }}>
          <Button
            variant='contained'
            disableElevation
            href='/add'
            color='secondary'
            sx={{
              minHeight: 64,
              minWidth: 64,
              borderRadius: 4,
              ml: 2,
              px: 2.5,
              opacity: { xs: 0, sm: 1 }
            }}
          >
            <Add />
            {open && (
              <Typography
                variant='body1'
                textTransform='initial'
                sx={{ px: 2.5 }}
              >
								Add item
              </Typography>
            )}
          </Button>
					
          <Divider sx={{ my: 2, opacity: 0 }} />

          <NavItem
            text='Home'
            icon={<HomeFilled />}
            link='/'
            open={open}
            pathname={pathname}
          />
          <NavItem
            text='Account'
            icon={<AccountCircle />}
            link='/account'
            open={open}
            pathname={pathname}
          />
        </List>
      </Drawer>
      <Box
        position='absolute'
        right={0} bottom={0}
        sx={{ px: 4, py: 14, opacity: { xs: 1, sm: 0 } }}
      >
        {pathname == '/' && (
          <Fab
            color='secondary'
            href='/add'
            size='large'
            sx={{ borderRadius: 4 }}
          >
            <Add />
          </Fab>
        )}
      </Box>
    </>
  )
}