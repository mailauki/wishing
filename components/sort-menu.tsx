import { sortLabels } from '@/lib/data'
import {
  Sort,
  Done,
  Abc,
  AttachMoney,
  Schedule,
  Update,
} from '@mui/icons-material'
import {
  IconButton,
  Menu,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import * as React from 'react'

export default function SortMenu({
  selectedSort,
  handleSort,
}: {
  selectedSort: number
  handleSort: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => void
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ mr: 2 }}>
        <Sort />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            variant: 'elevation',
            sx: {
              backgroundColor: 'var(--surface-container)',
            },
          },
        }}
      >
        {sortLabels.map((sort) => (
          <ListItemButton
            key={sort.index}
            selected={selectedSort === sort.index}
            onClick={(event) => handleSort(event, sort.index)}
            dense
            sx={{
              mx: 2,
              my: 1,
              borderRadius: 6,
              minHeight: 36,
            }}
          >
            {selectedSort === sort.index && (
              <ListItemIcon sx={{ minWidth: 48 }}>
                <Done fontSize='small' />
              </ListItemIcon>
            )}
            <ListItemText
              primary={sort.label}
              inset={selectedSort !== sort.index}
              sx={{ pl: selectedSort === sort.index ? 0 : 6 }}
            />
            {(() => {
              switch (sort.slug) {
                case 'name':
                  return <Abc sx={{ ml: 4 }} />
                case 'created_at':
                  return <Schedule sx={{ ml: 4 }} />
                case 'updated_at':
                  return <Update sx={{ ml: 4 }} />
                case 'price':
                  return <AttachMoney sx={{ ml: 4 }} />
                default:
                  return <></>
              }
            })()}
          </ListItemButton>
        ))}
      </Menu>
    </>
  )
}
