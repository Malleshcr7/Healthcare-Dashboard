export const anatomyIndicators = [
  { id: 1, name: 'Healthy Heart', status: 'Healthy', position: { top: '30%', left: '50%' } },
  { id: 2, name: 'Lungs', status: 'Issue', position: { top: '40%', left: '40%' } },
  { id: 3, name: 'Teeth', status: 'Healthy', position: { top: '15%', left: '50%' } },
  { id: 4, name: 'Bone', status: 'Healthy', position: { top: '60%', left: '60%' } },
  // Add more indicators if there are other visual pins on the diagram
  // For example, if there are pins for liver, kidneys, etc.
  // For now, assuming only the main four have direct pins.
];

export const healthStatusCardData = [
  { id: 1, title: 'Lungs', date: 'Oct 23, 2021', value: '78 bpm', status: 'Issue', statusColor: 'red' },
  { id: 2, title: 'Teeth', date: 'Oct 23, 2021', value: 'No Cavities', status: 'Healthy', statusColor: 'green' },
  { id: 3, title: 'Bone', date: 'Oct 23, 2021', value: 'Strong', status: 'Healthy', statusColor: 'green' },
];
