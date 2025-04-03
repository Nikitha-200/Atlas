//axios is a promise based HTTP library that helps to easily communicate with servers or APIs over the internet
//allows website or app to sned an drecieve data from a server like fetching info,submitting form 
//Axios is a JavaScript library used in the frontend to make HTTP requests (GET, POST, PUT, DELETE) to a backend API.

import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD fro the indvi. country name
export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,
    capital,tld,currencies,languages,borders,flags`
  );
};