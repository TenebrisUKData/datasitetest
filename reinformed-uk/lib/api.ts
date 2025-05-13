import axios from 'axios';

export async function fetchONSData(endpoint: string) {
  const res = await axios.get(`https://api.ons.gov.uk/${endpoint}`);
  return res.data;
}

export async function fetchParliamentData(endpoint: string) {
  const res = await axios.get(`https://members-api.parliament.uk/api/${endpoint}`);
  return res.data;
}
