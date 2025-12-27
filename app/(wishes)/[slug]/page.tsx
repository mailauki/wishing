import { AppBar, Button, Container, Toolbar } from '@mui/material'
import ItemDetails from '@/components/item-details'
import { createClient } from '@/lib/supabase/server'
import { ChevronLeft } from '@mui/icons-material'
import * as React from 'react'
import ItemMenu from '@/components/item-menu'

export default async function Item({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: item } = await supabase
    .from('items')
    .select('*')
    .match({ slug: slug, user_id: user?.id })
    .single()

  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
      >
        <Toolbar sx={{ width: '100%' }}>
          {slug && (
            <Button
              href='/'
              color='inherit'
              startIcon={<ChevronLeft />}
              sx={{ borderRadius: 6, px: 2.5 }}
            >
							Back
            </Button>
          )}
          <ItemMenu item={item} />
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <ItemDetails item={item} />
      </Container>
    </>
  )
}