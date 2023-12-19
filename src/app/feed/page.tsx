import { auth } from '@clerk/nextjs';
import React from 'react';

export default function FeedPage(){
  const { userId } = auth();
  console.log(userId);
    return <div>Feed </div>;
}
