import EditItemForm from '@/components/forms/edit-item-form'
import { createClient } from '@/lib/supabase/server'
import { ChevronLeft } from '@mui/icons-material'
import { AppBar, Button, Container, Toolbar } from '@mui/material'

export default async function Edit({
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
	
  const { data: rooms } = await supabase.from('rooms').select('name')
	
  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
      >
        <Toolbar>
          {slug && (
            <Button
              href={`/${slug}`}
              color='inherit'
              startIcon={<ChevronLeft />}
              sx={{ borderRadius: 6, px: 2.5 }}
            >
              {item.name}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Container maxWidth='xs'>
        <EditItemForm item={item} user={user} rooms={rooms} />
      </Container>
    </>
  )
}