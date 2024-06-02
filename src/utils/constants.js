// const API_KEY = process.env.VITE_YOUTUBE_API_KEY;
const env = await import.meta.env;
const API_KEY = env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_GETVIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;
export const YOUTUBE_VIDEO_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=";

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/https://suggestqueries-clients6.youtube.com/complete/search?output=firefox&hl=en-gb&gl=in&q=";

export const COMMENT_DATA = [
  {
    id: 1,
    name: "Alice",
    text: "This is the first comment.",
    replies: [
      {
        id: 2,
        name: "Bob",
        text: "This is a reply to the first comment.",
        replies: [
          {
            id: 3,
            name: "Charlie",
            text: "This is a nested reply to Bob's comment.",
            replies: [],
          },
          {
            id: 4,
            name: "Dave",
            text: "Another nested reply to Bob's comment.",
            replies: [],
          },
        ],
      },
      {
        id: 5,
        name: "Eve",
        text: "Another reply to the first comment.",
        replies: [],
      },
    ],
  },
  {
    id: 6,
    name: "Frank",
    text: "This is the second main comment.",
    replies: [
      {
        id: 7,
        name: "Grace",
        text: "This is a reply to the second main comment.",
        replies: [
          {
            id: 8,
            name: "Heidi",
            text: "This is a nested reply to Grace's comment.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 1442,
    name: "Alice",
    text: "This is the first comment.",
    replies: [
      {
        id: 2565,
        name: "Bob",
        text: "This is a reply to the first comment.",
        replies: [
          {
            id: 323,
            name: "Charlie",
            text: "This is a nested reply to Bob's comment.",
            replies: [],
          },
          {
            id: 344,
            name: "Dave",
            text: "Another nested reply to Bob's comment.",
            replies: [],
          },
        ],
      },
      {
        id: 585,
        name: "Eve",
        text: "Another reply to the first comment.",
        replies: [],
      },
    ],
  },
];

export const LIVE_COMMENT_OFFSET = 50;