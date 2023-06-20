import {surpriseMePrompts} from '../constant';
import {saveAs} from 'file-saver';

export const getRandomUser = (prompt) => {
  const randomNumber = Math.floor(Math.random() * surpriseMePrompts.length)
  const randomprompt = surpriseMePrompts[randomNumber]
  if (randomprompt == prompt) return getRandomUser(prompt)
  return randomprompt
}

export async function downloadImage(_id, photoUrl) {
  const response = await fetch(photoUrl, { responseType: 'blob' });
  const blob = await response.blob();
  const downloadUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = `download-${_id}.jpg`;
  link.click();

  URL.revokeObjectURL(downloadUrl);
  console.log(photoUrl);
}
