import { auth } from '@clerk/nextjs';
import React from 'react';

"use strict";
type FeedDataItem = { 
  shortTitle: string;
  currentAvg: number;
  complete: boolean;
  ticker: string;
  responses: number;
  questionId: string;
}
const feedData = {
  questionListMRU: [
    {
      shortTitle: "AAPL Q4 2023 Earnings",
      currentAvg: 100.0,
      complete: false,
      ticker: "AAPL",
      responses: 1300,
      questionId: "as4ri9"
    },
    {
      shortTitle: "MSFT Q4 2023 Earnings",
      currentAvg: 100.0,
      complete: false,
      ticker: "MSFT",
      responses: 1300,
      questionId: "as4ri9"
    },
    {
      shortTitle: "GOOGL Q4 2023 Earnings",
      currentAvg: 100.0,
      complete: true,
      ticker: "GOOGL",
      responses: 1300,
      questionId: "as4ri9"
    },
    {
      shortTitle: "AMZN Q4 2023 Earnings",
      currentAvg: 100.0,
      complete: false,
      ticker: "AMZN",
      responses: 1300,
      questionId: "as4ri9"
    },
  ],
};

export default function FeedPage() {
  const { userId } = auth();
  console.log(userId);
  console.log(feedData);
  return (
    <>
      <h1>Feed</h1>
      <br/>
      <div>
        {feedData?.questionListMRU.map((itemData, i) => (
          <FeedItem key={i} itemData={itemData} />
        ))}
      </div>
    </>
  );
}
interface FeedItemProps {
  itemData: FeedDataItem;
}

function FeedItem({ itemData }: FeedItemProps) {
  console.log(itemData);
  return (
    <div>
      <h1>test {itemData?.shortTitle}</h1>
    </div>
  );
}
