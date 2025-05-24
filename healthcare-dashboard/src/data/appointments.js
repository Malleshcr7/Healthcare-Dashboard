export const calendarData = {
  monthYear: "October 2021",
  // Based on the image, appointments are on 12th, 15th, 18th, 20th, 23rd, 25th
  daysWithAppointments: [
    { date: 12, appointments: [{ time: "09:00" }, { time: "11:00" }, { time: "13:00" }, { time: "15:00" }] },
    { date: 15, appointments: [{ time: "09:00" }, { time: "11:00" }] },
    { date: 18, appointments: [{ time: "13:00" }, { time: "15:00" }] },
    { date: 20, appointments: [{ time: "09:00" }, { time: "11:00" }, { time: "13:00" }] },
    { date: 23, appointments: [{ time: "09:00" }, { time: "15:00" }] }, // Assuming the "Dentist" and "Physiotherapy" are on this day
    { date: 25, appointments: [{ time: "11:00" }, { time: "13:00" }] },
  ]
};

export const detailedAppointments = [
  { 
    id: 1, 
    type: 'Dentist', 
    doctorName: 'Dr. Alex Smith', // Placeholder name
    time: '09:00 - 10:00', 
    location: 'Room 101, Building A', // Placeholder location
    notes: 'Routine checkup and cleaning.', // Placeholder notes
    status: 'Upcoming' 
  },
  { 
    id: 2, 
    type: 'Physiotherapy Appointment', 
    doctorName: 'Dr. Maria Garcia', // Placeholder name
    time: '15:00 - 16:00', // Assuming this is the second appointment on Oct 23
    location: 'Gymnasium, Building C', // Placeholder location
    notes: 'Focus on lower back exercises.', // Placeholder notes
    status: 'Upcoming' 
  },
];

export const upcomingScheduleData = [
  { id: 1, dayCategory: 'On Thursday', title: 'Health checkup complete', time: '10:00 AM', icon: 'checkIcon' },
  { id: 2, dayCategory: 'On Thursday', title: 'Ophthalmologist', time: '01:00 PM', icon: 'eyeIcon' },
  { id: 3, dayCategory: 'On Saturday', title: 'Cardiologist', time: '09:00 AM', icon: 'heartIcon' },
  { id: 4, dayCategory: 'On Saturday', title: 'Psychologist', time: '02:00 PM', icon: 'brainIcon' }, // Assuming another appointment
  { id: 5, dayCategory: 'Next Week', title: 'Dentist monthly checkup', time: '11:00 AM', icon: 'toothIcon' },
];
