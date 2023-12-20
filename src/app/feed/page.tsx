import { auth } from '@clerk/nextjs';
import React from 'react';
const mockFeedData = {
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
      complete: false,
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

export default function FeedPage(){
  const { userId } = auth();
  console.log(userId);
  console.log(mockFeedData);
    return <div>Feed</div>;
}
