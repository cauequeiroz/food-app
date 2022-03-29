import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: "Bearer Jw0oIMgpId1HV8x-mogAapr36SVRDSAM00qOEvAmLyxCaOV1I0T6kzJbSvazjA6Q7sNS46uHfHzRzLLAESkHYv3ES50h-sUQwtwvh836OsN-D5UwO6ObMswyxDM6YXYx",
  }
});

export const getBusinessList = term => {
  return http.get('/search', {
    params: {
      limit: 50,
      term,
      location: 'são paulo'
    }
  });
}

export const getBusinessDetail = id => {
  return http.get(`/${id}`);
}