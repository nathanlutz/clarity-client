import { auth } from '@clerk/nextjs';
import React from 'react';

export default function DashboardPage(){
  const { userId } = auth();
  console.log(userId);
    return <div>dashboard page </div>;
}
