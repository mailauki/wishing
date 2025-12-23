import { AppBar, Button, Container, Toolbar } from '@mui/material'
import ItemDetails from './item-details'
import { createClient } from '@/lib/supabase/server'
import { ChevronLeft } from '@mui/icons-material'

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
        color='inherit'
        elevation={0}
        sx={{ backgroundColor: 'var(--surface-container-lowest)'}}
      >
        <Toolbar>
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
        </Toolbar>
      </AppBar>
      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        <ItemDetails item={item} />
      </Container>
    </>
  )
}