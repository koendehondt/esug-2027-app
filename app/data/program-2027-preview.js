// Placeholder shape for the ESUG 2027 Conference Program page, shown while
// the actual 2027 lineup is still being decided. It stands on its own --
// unlike the old approach, it is not derived from any other year's program
// data -- so it can be edited independently of the archives.
//
// Each day only carries its time slots and the named events that repeat at
// every ESUG conference (Coffee Break, Lunch, the Awards competition, Show
// Us Your Project, and the Social event); the slots that will eventually
// hold real talks are bare `{ time }` objects with no `subject`, `speaker`,
// or `talkId`, so program-schedule.gjs renders them as empty slots rather
// than announcing content that hasn't been decided yet.
//
// To plug in the real 2027 schedule once it's confirmed, replace a bare
// `{ time }` slot with the full session, e.g.:
//   { time: '9:30 – 10:00', subject: 'Talk Title', talkId: 'talk-id',
//     speaker: 'Speaker Name' }
// (talkId is only needed if the talk has its own page in talks-2027.js.)
// The day labels already carry the real ESUG 2027 dates (Tue 6 - Fri 9
// July 2027).

export default [
  {
    id: 'day-1',
    label: 'Tue 6',
    sessions: [
      { time: '9:00 – 9:30' },
      { time: '9:30 – 10:00' },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      { time: '10:30 – 11:00' },
      { time: '11:00 – 11:30' },
      { time: '11:30 – 12:00' },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      { time: '14:00 – 14:30' },
      { time: '14:30 – 15:00' },
      { time: '15:00 – 15:30' },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      { time: '16:00 – 16:30' },
      { time: '16:30 – 17:00' },
      { time: '17:00 – 19:00', subject: 'Awards competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Wed 7',
    sessions: [
      { time: '9:00 – 9:30' },
      { time: '9:30 – 10:00' },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      { time: '10:30 – 11:00' },
      { time: '11:00 – 11:30' },
      { time: '11:30 – 12:00' },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      { time: '14:00 – 14:30' },
      { time: '14:30 – 15:00' },
      { time: '15:00 – 15:30' },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      { time: '16:00 – 16:30' },
      { time: '16:30 – 18:30', subject: 'Show Us Your Project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Thu 8',
    sessions: [
      { time: '9:00 – 9:30' },
      { time: '9:30 – 10:00' },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      { time: '10:30 – 11:00' },
      { time: '11:00 – 11:30' },
      { time: '11:30 – 12:00' },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      { time: '14:00 – 14:30' },
      { time: '14:30 – 15:00' },
      { time: '15:00 – 15:30' },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      { time: '16:00 – 16:30' },
      { time: '16:30 – 23:30', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Fri 9',
    sessions: [
      { time: '9:00 – 9:30' },
      { time: '9:30 – 10:00' },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      { time: '10:30 – 11:00' },
      { time: '11:00 – 11:30' },
      { time: '11:30 – 12:00' },
      { time: '12:00 – 12:30' },
      { time: '12:30 – 14:00', subject: 'Lunch' },
    ],
  },
];
