import { Container } from '@mui/material'
import ItemDetails from './item-details'
import { createClient } from '@/lib/supabase/server'
import Filter from '@/components/filter'

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
      <Filter />
      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        <ItemDetails item={item} />
      </Container>
    </>
  )
}