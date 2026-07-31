export const emptyItem = () => ({ id: crypto.randomUUID() });
export const initialResume = {
  title: 'My professional resume', targetRole: '', template: 'modern', accent: '#4f46e5', summary: '',
  personal: { name: '', title: '', email: '', phone: '', location: '', linkedin: '', github: '', portfolio: '' },
  skills: [], education: [], projects: [], research: [], activities: [], languages: []
};
export const sectionLabels = { personal: 'Personal details', summary: 'Professional summary', skills: 'Skills', education: 'Education', projects: 'Projects', research: 'Research & publications', activities: 'Activities', languages: 'Languages' };
