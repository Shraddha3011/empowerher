export const dummyCommunity = {
  mentors: [
    {
      id: "mentor1",
      name: "Anjali Desai",
      expertise: "Handicrafts Business",
      rating: 4.8,
      available: true,
      avatar: "/avatars/mentor1.jpg"
    },
    {
      id: "mentor2",
      name: "Meera Patel",
      expertise: "Digital Marketing",
      rating: 4.9,
      available: false,
      avatar: "/avatars/mentor2.jpg"
    },
    {
      id: "mentor3",
      name: "Ritu Verma",
      expertise: "Financial Planning",
      rating: 4.7,
      available: true,
      avatar: "/avatars/mentor3.jpg"
    }
  ],
  upcomingEvents: [
    {
      id: "e1",
      title: "Social Media Marketing Workshop",
      date: "2024-03-20T10:00:00",
      type: "online" as const,
      participants: 45,
      language: "Hindi"
    },
    {
      id: "e2",
      title: "Local Artisan Meetup",
      date: "2024-03-25T15:00:00",
      type: "offline" as const,
      location: "Jaipur",
      participants: 20,
      language: "Hindi"
    },
    {
      id: "e3",
      title: "Financial Literacy Session",
      date: "2024-03-28T14:00:00",
      type: "online" as const,
      participants: 30,
      language: "English"
    }
  ]
}; 