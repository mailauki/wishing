'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import { Button, Divider, Stack, TextField, Typography } from '@mui/material'
import UploadAvatar from './upload-avatar'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select('full_name, username, avatar_url')
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        // console.log(error)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.log(error)
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    username,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      console.log(error)
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h4' component='h1'>Account Settings</Typography>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='subtitle1'>My Profile</Typography>
        <div>
          <form action='/signout' method='post'>
            <Button type='submit' variant='outlined' fullWidth size='large'>Logout</Button>
          </form>
        </div>
      </Stack>

      <UploadAvatar
        uid={user?.id ?? null}
        url={avatar_url}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ fullname, username, avatar_url: url })
        }}
      />

      <TextField
        id='email' 
        name='email'
        type='text'
        label='Email'
        value={user?.email}
        disabled
      />
      <TextField
        id='fullName'
        name='fullname'
        type='text'
        label='Full Name' 
        value={fullname || ''}
        onChange={(event) => setFullname(event.target.value)}
      />
      <TextField
        id='username'
        name='username'
        type='text'
        label='Username' 
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Button
        onClick={() => updateProfile({ fullname, username, avatar_url })}
        disabled={loading}
        variant='contained'
        size='large'
      >
        {loading ? 'Loading...' : 'Save Changes'}
      </Button>

      <Divider />

      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant='h6' component='h3'>Remove Account</Typography>
          <Typography>Permanently delete your account and remove all saved items associated with it</Typography>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Button color='error'>Delete Account</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

// export default function AccountForm({ user }: { user: User | null }) {
// 	const [state, formAction, pending] = useActionState(updateProfile, initialState)
	
// 	return (
// 		<>
//       <Stack spacing={2}>
//         <Typography variant='h4' component='h1'>Account</Typography>
//         <Typography variant='subtitle1'></Typography>
//         <form className='w-full max-w-sm flex flex-col gap-4'>
//           <TextField error={state?.message ? true : false} label='Email' id='email' name='email' type='email' placeholder='this.is.it@email.com' helperText={state?.message} disabled defaultValue={user?.email} />
//           <TextField error={state?.message ? true : false} label='Password' id='password' name='password' type='password' />
//           <Button formAction={formAction} variant='contained' size='large' fullWidth disabled={pending}>{pending ? 'Loading...' : 'Save Changes'}</Button>
//         </form>
//         <Link href='/forgot-password'>Forgot password</Link>
//       </Stack>
//       <Typography>Don't have an account yet? <Link href='/signup'>Signup</Link></Typography>
// 			</>
// 	)
// }