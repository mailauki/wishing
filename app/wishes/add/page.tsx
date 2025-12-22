import { Container } from '@mui/material';
import AddItemForm from './add-item-form';
import { createClient } from '@/lib/supabase/server';

export default async function AddItem() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
	
  const { data: rooms } = await supabase.from('rooms').select('name')
	
  return (
    <Container maxWidth='xs' sx={{ paddingY: '3rem' }}>
      <AddItemForm user={user} rooms={rooms} />
    </Container>
  )
}