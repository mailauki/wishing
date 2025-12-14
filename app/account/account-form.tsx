'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { type User } from '@supabase/supabase-js'
import Textfield from '@/components/ui/textfield'
import Button from '@/components/ui/button'

// ...

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
        .select('full_name, username, website, avatar_url')
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
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

      {/* ... */}

      <Textfield id='email' type='text' label='Email' value={user?.email} disabled />
      <Textfield
        id='fullName'
        type='text'
        label='Full Name' 
        value={fullname || ''}
        onChange={(event) => setFullname(event.target.value)}
      />
      <Textfield
        id='username'
        type='text'
        label='Username' 
        value={username || ''}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Button
        onClick={() => updateProfile({ fullname, username, avatar_url })}
        disabled={loading}
        label={loading ? 'Loading ...' : 'Update'}
        variant='filled'
      />

      <div>
        <form action='/auth/signout' method='post'>
          <Button type='submit' label='Signout' variant='outlined' />
        </form>
      </div>
    </div>
  )
}