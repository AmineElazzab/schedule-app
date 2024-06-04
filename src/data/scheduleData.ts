export interface Shift {
  role: string;
  time: string;
  color: string;
}

export interface Staff {
  name: string;
  hours: number;
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

// export const kitchenStaff: Staff[] = [
//   {
//     name: "Amanda Johnson",
//     hours: 32,
//     shifts: {
//       "Mon 21": [
//         { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
//       ],
//       "Tue 22": [
//         { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
//       ],
//       "Wed 23": [
//         { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
//       ],
//       "Thu 24": [
//         { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
//       ],
//     },
//   },
//   {
//     name: "Ella Harper",
//     hours: 24,
//     shifts: {
//       "Mon 21": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
//       "Tue 22": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
//       "Wed 23": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
//       "Thu 24": [
//         { role: "Chef", time: "9:00 - 12:00 p", color: "bg-blue-200" },
//         { role: "Assistant", time: "2:00 - 10:00 p", color: "bg-red-200" },
//       ],
//     },
//   },
//   {
//     name: "Mitchel Flynn",
//     hours: 32,
//     shifts: {
//       "Mon 21": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
//       "Tue 22": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
//       "Wed 23": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
//       "Thu 24": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
//     },
//   },
// ];

export const Staffs: Staff[] = [
  {
    name: "Amelia Reyes",
    hours: 32,
    shifts: {
      "Mon 21": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Tue 22": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Wed 23": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Thu 24": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
    },
  },
  {
    name: "Danny Hansen",
    hours: 24,
    shifts: {
      "Mon 21": [
        { role: "Hostess", time: "9:00 - 5:00 p", color: "bg-red-200" },
      ],
      "Tue 22": [
        { role: "Hostess", time: "9:00 - 5:00 p", color: "bg-red-200" },
      ],
      "Wed 23": [
        { role: "Hostess", time: "9:00 - 5:00 p", color: "bg-red-200" },
      ],
      "Thu 24": [
        { role: "Hostess", time: "9:00 - 5:00 p", color: "bg-red-200" },
      ],
    },
  },
  {
    name: "Samanta Atherton",
    hours: 16,
    shifts: {
      "Mon 21": [
        { role: "Bartender", time: "9:00 - 5:00 p", color: "bg-blue-300" },
      ],
      "Tue 22": [
        { role: "Bartender", time: "9:00 - 5:00 p", color: "bg-blue-300" },
      ],
      "Wed 23": [
        { role: "Bartender", time: "9:00 - 5:00 p", color: "bg-blue-300" },
      ],
      "Thu 24": [
        { role: "Bartender", time: "9:00 - 5:00 p", color: "bg-blue-300" },
      ],
    },
  },
  {
    name: "Henry Wiling",
    hours: 32,
    shifts: {
      "Mon 21": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Tue 22": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Wed 23": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
      "Thu 24": [
        { role: "Waiter", time: "9:00 - 5:00 p", color: "bg-green-200" },
      ],
    },
  },
  {
    name: "Amanda Johnson",
    hours: 32,
    shifts: {
      "Mon 21": [
        { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
      ],
      "Tue 22": [
        { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
      ],
      "Wed 23": [
        { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
      ],
      "Thu 24": [
        { role: "Sous-chef", time: "9:00 - 5:00 p", color: "bg-purple-200" },
      ],
    },
  },
  {
    name: "Ella Harper",
    hours: 24,
    shifts: {
      "Mon 21": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
      "Tue 22": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
      "Wed 23": [{ role: "Chef", time: "9:00 - 5:00 p", color: "bg-blue-200" }],
      "Thu 24": [
        { role: "Chef", time: "9:00 - 12:00 p", color: "bg-blue-200" },
        { role: "Assistant", time: "2:00 - 10:00 p", color: "bg-red-200" },
      ],
    },
  },
  {
    name: "Mitchel Flynn",
    hours: 32,
    shifts: {
      "Mon 21": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
      "Tue 22": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
      "Wed 23": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
      "Thu 24": [{ role: "Cook", time: "9:00 - 5:00 p", color: "bg-pink-200" }],
    },
  },
];
