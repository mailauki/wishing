'use client'
import { Item, View } from '@/lib/types'
import * as React from 'react';
import { Container } from '@mui/material';
import Filter from '@/components/filter';
import WishesList from './views/wishes-list';
import WishesModule from './views/wishes-module';

export default function Wishes({
  items,
}: {
	items: Item[] | null,
}) {

  const [view, setView] = React.useState<View>('list');

  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: View | null,
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  // if (!items || items.length == 0) {
  //   return (
  //     <p>No items yet</p>
  //   )
  // }

  return (
    <>
      <Filter view={view} handleView={handleView} />
      <Container maxWidth='md' sx={{ paddingY: '3rem' }}>
        {(() => {
          switch (view) {
          case 'list':
            return <WishesList items={items} />;
          case 'module':
            return <WishesModule items={items} />;
          default:
            return <p>No items yet</p>;
          }
        })()}
      </Container>
    </>
  )
}