export interface Message {
  id: string;
  sender: string;
  avatar: string;
  subject: string;
  preview: string;
  time: string;
  read: boolean;
  starred: boolean;
  category: "inbox" | "sent" | "archived";
}

export const messagesData: Message[] = [
  { id: "msg-1", sender: "Sarah Chen", avatar: "SC", subject: "Q4 Revenue Report Ready", preview: "Hi team, the Q4 revenue report is now ready for review. Please take a look at the attached spreadsheet and let me know if you have any questions...", time: "10:32 AM", read: false, starred: true, category: "inbox" },
  { id: "msg-2", sender: "Marcus Johnson", avatar: "MJ", subject: "New Feature Request", preview: "I've been getting feedback from users about a dark mode toggle. Can we prioritize this for the next sprint?", time: "9:15 AM", read: false, starred: false, category: "inbox" },
  { id: "msg-3", sender: "Emily Rodriguez", avatar: "ER", subject: "Design System Updates", preview: "The new component library is ready for testing. I've updated the Figma file with the latest changes including the new card variants...", time: "Yesterday", read: true, starred: true, category: "inbox" },
  { id: "msg-4", sender: "Alex Kim", avatar: "AK", subject: "Server Migration Plan", preview: "Here's the updated timeline for the server migration. We're looking at a 2-hour maintenance window on Saturday...", time: "Yesterday", read: true, starred: false, category: "inbox" },
  { id: "msg-5", sender: "James Wilson", avatar: "JW", subject: "Re: Budget Approval", preview: "The budget for the new marketing campaign has been approved. We can proceed with the social media ads next week...", time: "2 days ago", read: true, starred: false, category: "inbox" },
  { id: "msg-6", sender: "Priya Patel", avatar: "PP", subject: "Onboarding Feedback", preview: "New user onboarding completion rates are up 23% since we implemented the guided tour. Great work on the UX improvements...", time: "2 days ago", read: true, starred: true, category: "inbox" },
  { id: "msg-7", sender: "Tom Anderson", avatar: "TA", subject: "API Rate Limiting", preview: "We need to discuss the API rate limiting strategy. Current limits are causing issues for our enterprise clients...", time: "3 days ago", read: true, starred: false, category: "inbox" },
  { id: "msg-8", sender: "Nina Lee", avatar: "NL", subject: "Team Outing Planning", preview: "Hey everyone! I'm organizing the Q1 team outing. Please fill out the survey to vote on activities and dates...", time: "3 days ago", read: true, starred: false, category: "inbox" },
];
