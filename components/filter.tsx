'use client'
import { FilterAlt, ArrowDropDown, ChevronLeft } from '@mui/icons-material';
import { AppBar, Button, Divider, Toolbar } from '@mui/material';
import { useParams } from 'next/navigation';

export default function Filter() {
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
        <Button
          href='/'
          color='inherit'
          startIcon={<ChevronLeft />}
          sx={[
            {
              borderRadius: 6,
              px: 2.5,
            },
            slug ? { opacity: 1 } : { opacity: 0 },
          ]}
        >
					Back
        </Button>
				
        <Divider
          orientation='vertical'
          flexItem
          variant='middle'
          sx={[
            { mx: 2 },
            slug ? { opacity: 1 } : { opacity: 0 },
          ]}
        />

        <Button
          color='inherit'
          startIcon={<FilterAlt />}
          endIcon={<ArrowDropDown />}
          sx={{ borderRadius: 6, px: 2.5 }}
        >
					Filter
        </Button>
      </Toolbar>
    </AppBar>
  )
}