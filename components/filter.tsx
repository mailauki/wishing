'use client'
import { View } from '@/lib/types';
import { FilterAlt, ArrowDropDown, ChevronLeft, ViewList, ViewModule } from '@mui/icons-material';
import { AppBar, Box, Button, ToggleButton, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';
import { useParams } from 'next/navigation';
import * as React from 'react';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function Filter({
  view, handleView,
}: {
	view: View,
	handleView: ((
		event: React.MouseEvent<HTMLElement, MouseEvent>,
		value: View) => void
)}) {
  const params = useParams();
  const { slug } = params;

  return (
    <AppBar
      position='sticky'
      color='inherit'
      elevation={0}
      sx={{ backgroundColor: 'var(--surface-container-lowest)'}}
    >
      <Toolbar>
        {slug ? (
          <Button
            href='/'
            color='inherit'
            startIcon={<ChevronLeft />}
            sx={{ borderRadius: 6, px: 2.5 }}
          >
					Back
          </Button>
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                color='inherit'
                startIcon={<FilterAlt />}
                endIcon={<ArrowDropDown sx={{ ml: 1.5 }} />}
                sx={{ borderRadius: 6, px: 2.5 }}
              >
								Filter
              </Button>
            </Box>
            <StyledToggleButtonGroup
              exclusive
              value={view}
              onChange={handleView}
              aria-label='list content view'
            >
              <ToggleButton value='list' aria-label='list'>
                <ViewList />
              </ToggleButton>
              <ToggleButton value='module' aria-label='module'>
                <ViewModule />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}