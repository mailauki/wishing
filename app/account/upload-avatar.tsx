'use client'
import * as React from 'react';
import { createClient } from '@/lib/supabase/client';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import { Stack, Tooltip } from '@mui/material';

export default function UploadAvatar({
  uid,
  url,
  onUpload,
}: {
  uid: string | null
  url: string | null
  onUpload: (url: string) => void
}) {
  // const [avatarSrc, setAvatarSrc] = React.useState<string | undefined>(undefined);
  const supabase = createClient();
  const [avatarUrl, setAvatarUrl] = React.useState<string | null>(url)
  const [uploading, setUploading] = React.useState(false)

  // const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     // Read the file as a data URL
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setAvatarSrc(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  React.useEffect(() => {
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) downloadImage(url)
  }, [url, supabase])

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}/${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      console.log(error)
      alert('Error uploading avatar!')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Stack direction='row' alignItems='center' justifyContent='center' sx={{ paddingBottom: '2rem' }}>
      <Tooltip title='Upload an image to use as your profile avatar'>
        <ButtonBase
          component='label'
          role={undefined}
          tabIndex={-1} // prevent label from tab focus
          aria-label='Avatar image'
          sx={{
            borderRadius: '100px',
            '&:has(:focus-visible)': {
              outline: '2px solid',
              outlineOffset: '2px',
            },
            width: 150,
          }}
        >
          <Avatar
            alt='Upload new avatar'
            src={avatarUrl!}
            sx={{ height: 150, width: 150 }}
          />
          <input
            type='file'
            accept='image/*'
            style={{
              border: 0,
              clip: 'rect(0 0 0 0)',
              height: '1px',
              margin: '-1px',
              overflow: 'hidden',
              padding: 0,
              position: 'absolute',
              whiteSpace: 'nowrap',
              width: '1px',
            }}
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </ButtonBase>
      </Tooltip>
    </Stack>
  );
}