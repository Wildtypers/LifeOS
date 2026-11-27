export const today = {
  label: 'Monday, May 12',
  date: '2025-05-12',
  checkin: { mood: 7, energy: 8, stress: 4, sleep: 7.6, focusedWork: 3.5 },
  completeness: 62,
}

export const extractedActivities = [
  { label: 'Sleep', value: '8 hours', icon: 'sleep' },
  { label: 'Study', value: '4 hours', icon: 'book' },
  { label: 'Exercise', value: '45 minutes', icon: 'activity' },
  { label: 'Social', value: 'Dinner with friends', icon: 'users' },
] as const

export const timelineEntries = [
  { time: '6:32 AM', title: 'Woke up', domain: 'Sleep', color: '#60A5FA', duration: '45m' },
  { time: '7:10 AM', title: 'Morning run', domain: 'Physical health', color: '#34D399', duration: '1h 30m' },
  { time: '8:30 AM', title: 'Algorithms study session', domain: 'Education', color: '#60A5FA', duration: '45m' },
  { time: '12:15 PM', title: 'Lunch break', domain: 'Lifestyle', color: '#FB923C', duration: '1h 30m' },
  { time: '2:00 PM', title: 'Project deep work', domain: 'Career', color: '#A78BFA', duration: '45m' },
  { time: '6:30 PM', title: 'Dinner with friends', domain: 'Relationships', color: '#F472B6', duration: '1h 30m' },
]

export const activityTypes = [
  { icon: 'book', label: 'Study session' },
  { icon: 'activity', label: 'Workout' },
  { icon: 'book', label: 'Reading' },
  { icon: 'sleep', label: 'Sleep' },
  { icon: 'wallet', label: 'Spending' },
  { icon: 'users', label: 'Social activity' },
  { icon: 'brain', label: 'Meditation' },
  { icon: 'plus', label: 'Custom' },
] as const

export const calendar = {
  weekdays: [
    { day: 'Monday', initial: 'M' },
    { day: 'Tuesday', initial: 'T' },
    { day: 'Wednesday', initial: 'W' },
    { day: 'Thursday', initial: 'T' },
    { day: 'Friday', initial: 'F' },
    { day: 'Saturday', initial: 'S' },
    { day: 'Sunday', initial: 'S' },
  ],
  months: { previous: 'April 2025', current: 'May 2025', next: 'June 2025' },
  cells: Array.from({ length: 35 }, (_, index) => ({
    position: index,
    date: index < 4 ? '' : index - 3,
    selected: index === 18,
    color: index > 3 && index < 32 ? ['#34D399', '#60A5FA', '#FBBF24'][index % 3] : undefined,
  })),
}

export const selectedDay = {
  label: 'Friday, May 16',
  scores: [
    { label: 'Mood', value: '8.2' },
    { label: 'Energy', value: '7.8' },
    { label: 'Stress', value: '3.1' },
    { label: 'Sleep', value: '7h 52m' },
  ],
  note: '“Strong morning focus. The long walk after lunch helped reset my energy before the final work block.”',
  metrics: [
    { label: 'Focused work', value: '4h 20m' },
    { label: 'Exercise', value: '52m' },
    { label: 'Screen time', value: '2h 14m' },
    { label: 'Social activity', value: '1h 35m' },
  ],
}
