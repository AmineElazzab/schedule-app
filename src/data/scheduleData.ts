export interface Shift {
  role: string;
  time: string;
  color: string;
}

export interface Staff {
  name: string;
  hours: number;
  avatar: string;  // Added avatar property
  shifts: { [date: string]: Shift[] };
}

export interface Schedule {
  date: string;
  events?: string[];
}

export const schedules: Schedule[] = [
  { date: "Mon 21", events: ["Cocktail party"] },
  { date: "Tue 22", events: ["Michelin review"] },
  { date: "Wed 23", events: [] },
  { date: "Thu 24", events: ["Inspection"] },
  { date: "Fri 25", events: [] },
  { date: "Sat 26", events: [] },
  { date: "Sun 27", events: [] },
];

export const Staffs: Staff[] = [
  {
    name: "Amelia Reyes",
    hours: 32,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Waiter",
          time: "9:00 - 5:00",
          color:
            "bg-green-200 text-green-600  ",
        },
      ],
      "Tue 22": [
        {
          role: "Waiter",
          time: "9:00 - 5:00 ",
          color: "bg-green-200 text-green-600",
        },
      ],
      "Wed 23": [
        {
          role: "Waiter",
          time: "9:00 - 5:00 ",
          color: "bg-green-200 text-green-600",
        },
      ],
      "Thu 24": [
        {
          role: "Waiter",
          time: "9:00 - 5:00 ",
          color: "bg-green-200 text-green-600",
        },
      ],
    },
  },
  {
    name: "Danny Hansen",
    hours: 24,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Hostess",
          time: "9:00 - 5:00 ",
          color: "bg-red-200 text-red-600",
        },
      ],
      "Tue 22": [
        {
          role: "Hostess",
          time: "9:00 - 5:00 ",
          color: "bg-red-200 text-red-600",
        },
      ],
      "Wed 23": [
        {
          role: "Hostess",
          time: "9:00 - 5:00 ",
          color: "bg-red-200 text-red-600",
        },
      ],
      "Thu 24": [
        {
          role: "Hostess",
          time: "9:00 - 5:00 ",
          color: "bg-red-200 text-red-600",
        },
      ],
    },
  },
  {
    name: "Samanta",
    hours: 16,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Bartender",
          time: "9:00 - 5:00 ",
          color: "bg-blue-300 text-blue-600",
        },
      ],
      "Tue 22": [
        {
          role: "Bartender",
          time: "9:00 - 5:00 ",
          color: "bg-blue-300 text-blue-600",
        },
      ],
      "Wed 23": [
        {
          role: "Bartender",
          time: "9:00 - 5:00 ",
          color: "bg-blue-300 text-blue-600",
        },
      ],
      "Thu 24": [
        {
          role: "Bartender",
          time: "9:00 - 5:00 ",
          color: "bg-blue-300 text-blue-600",
        },
      ],
    },
  },
  {
    name: "Amanda ",
    hours: 32,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Sous-chef",
          time: "9:00 - 5:00 ",
          color: "bg-purple-200 text-purple-600",
        },
      ],
      "Tue 22": [
        {
          role: "Sous-chef",
          time: "9:00 - 5:00 ",
          color: "bg-purple-200 text-purple-600",
        },
      ],
      "Wed 23": [
        {
          role: "Sous-chef",
          time: "9:00 - 5:00 ",
          color: "bg-purple-200 text-purple-600",
        },
      ],
      "Thu 24": [
        {
          role: "Sous-chef",
          time: "9:00 - 5:00 ",
          color: "bg-purple-200 text-purple-600",
        },
      ],
    },
  },
  {
    name: "Ella Harper",
    hours: 24,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Chef",
          time: "9:00 - 5:00 ",
          color: "bg-blue-200 text-blue-700",
        },
      ],
      "Tue 22": [
        {
          role: "Chef",
          time: "9:00 - 5:00 ",
          color: "bg-blue-200 text-blue-700",
        },
      ],
      "Wed 23": [
        {
          role: "Chef",
          time: "9:00 - 5:00 ",
          color: "bg-blue-200 text-blue-700",
        },
      ],
      "Thu 24": [
        {
          role: "Chef",
          time: "9:00 - 12:00 ",
          color: "bg-blue-200 text-blue-700",
        },
      ],
    },
  },
  {
    name: "Mitchel Flynn",
    hours: 32,
    avatar: "https://cdn-icons-png.flaticon.com/256/147/147144.png", // Added avatar URL
    shifts: {
      "Mon 21": [
        {
          role: "Cook",
          time: "9:00 - 5:00",
          color: "bg-pink-200 text-pink-600",
        },
        {
          role: "Cook",
          time: "9:00 - 5:00",
          color: "bg-pink-200 text-pink-600",
        },
      ],
      "Tue 22": [
        {
          role: "Cook",
          time: "9:00 - 5:00",
          color: "bg-pink-200 text-pink-600",
        },
      ],
      "Wed 23": [
        {
          role: "Cook",
          time: "9:00 - 5:00",
          color: "bg-pink-200 text-pink-600",
        },
      ],
      "Thu 24": [
        {
          role: "Cook",
          time: "9:00 - 5:00",
          color: "bg-pink-200 text-pink-600",
        },
      ],
    },
  },
];
