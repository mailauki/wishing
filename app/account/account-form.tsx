'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import { Button, TextField } from '@mui/material'
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
    <div className='max-w-sm flex flex-col gap-4 p-4 mx-auto my-10'>
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
        {loading ? 'Loading ...' : 'Update'}
      </Button>

      <div>
        <form action='/signout' method='post'>
          <Button type='submit' variant='outlined' fullWidth size='large'>Signout</Button>
        </form>
      </div>
    </div>
  )
}