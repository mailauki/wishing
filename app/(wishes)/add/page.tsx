import { Container } from '@mui/material';
import { createClient } from '@/lib/supabase/server';
import AddItemForm from '@/components/forms/add-item-form';

export default async function AddItem() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
	
  return (
    <Container maxWidth='xs'>
      <AddItemForm user={user} />
    </Container>
  )
}