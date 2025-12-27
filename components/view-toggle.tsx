import { View } from '@/lib/types'
import { ViewList, ViewModule } from '@mui/icons-material'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import * as React from 'react'

export default function ViewToggle({
  view,
  handleView,
}: {
  view: View
  handleView: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: View,
  ) => void
}) {
  return (
    <ToggleButtonGroup exclusive value={view} onChange={handleView}>
      <ToggleButton
        value='list'
        aria-label='list'
        sx={{
          height: 40,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          paddingInlineStart: 1.5,
        }}
      >
        <ViewList />
      </ToggleButton>
      <ToggleButton
        value='module'
        aria-label='module'
        sx={{
          height: 40,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          paddingInlineEnd: 1.5,
        }}
      >
        <ViewModule />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
