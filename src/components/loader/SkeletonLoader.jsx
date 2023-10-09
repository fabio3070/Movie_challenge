import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonLoader({count}) {
  return (
    <Stack spacing={16}>
      {[...Array(count)].map((row, index) => (
        <Skeleton animation="wave" variant="rounded" height={48}/>
      ))}
    </Stack>
  )
}
