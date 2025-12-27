'use client'
import { Item } from '@/lib/types'
import { Archive, Delete, Edit, MoreVert } from '@mui/icons-material'
import { IconButton, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material'
import * as React from 'react'

export default function ItemMenu({ item }: { item: Item }) {
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
      <Stack direction='row' justifyContent='flex-end' flexGrow={1}>
        <IconButton onClick={handleOpen}>
          <MoreVert />
        </IconButton>
      </Stack>
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
        <MenuItem
          component='a'
          href={`/${item.slug}/edit`}
          sx={{ mx: 2, my: 1, borderRadius: 6, pr: 4, minHeight: 36 }}
        >
          <ListItemIcon>
            <Edit fontSize='small' />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ mx: 2, my: 1, borderRadius: 6, pr: 4, minHeight: 36 }}
        >
          <ListItemIcon>
            <Archive fontSize='small' />
          </ListItemIcon>
          Archive
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ mx: 2, my: 1, borderRadius: 6, pr: 4, minHeight: 36 }}
        >
          <ListItemIcon>
            <Delete fontSize='small' />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}
