// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const searchParams = new URLSearchParams({
//   fields: 'name,capital,population,flags,languages,',
// });

// export const fetchCountries = name => {
//   return fetch(`${BASE_URL}${name}?${searchParams}`).then(response => {
//     if (response.status === 404) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// };

export const fetchCountries = name => {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const properties = 'fields=name,capital,population,flags,languages';

  return fetch(`${BASE_URL}${name}?${properties}`).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
