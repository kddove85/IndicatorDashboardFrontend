import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 30000,
  headers: {'Access-Control-Allow-Origin': 'http://127.0.0.1:3000'}
});

function getGdp() {
  return axios.get('http://127.0.0.1:8000/api/gdp/').then((response) => {
    return response.data.data;
  })
}

function getCpi() {
  return axios.get('http://127.0.0.1:8000/api/cpi/').then((response) => {
    return response.data.data;
  })
}

function getCpiYearly() {
  return axios.get('http://127.0.0.1:8000/api/cpi_yearly/').then((response) => {
    return response.data.data;
  })
}

function getUnemployment() {
  return axios.get('http://127.0.0.1:8000/api/unemployment/').then((response) => {
    return response.data.data;
  })
}

function getImmigration() {
  return axios.get('http://127.0.0.1:8000/api/immigration/').then((response) => {
    return response.data.data;
  })
}

function getDeportation() {
  return axios.get('http://127.0.0.1:8000/api/deportation/').then((response) => {
    return response.data.data;
  })
}

function getImmigrationDeportation() {
  return axios.get('http://127.0.0.1:8000/api/immigration_deportation/').then((response) => {
    return response.data.data;
  })
}

function getDepartmentSpending() {
  return axios.get('http://127.0.0.1:8000/api/spending/').then((response) => {
    return response.data.data;
  })
}

function getGasPrices() {
  return axios.get('http://127.0.0.1:8000/api/gas/').then((response) => {
    return response.data.data;
  })
}

function getOrders() {
  return axios.get('http://127.0.0.1:8000/api/orders/').then((response) => {
    return response.data.data;
  })
}

function getDeficit() {
  return axios.get('http://127.0.0.1:8000/api/deficit/').then((response) => {
    return response.data.data;
  })
}

function getInitialApproval() {
  return axios.get('http://127.0.0.1:8000/api/initial_approval/').then((response) => {
    return response.data.data;
  })
}

function getFinalApproval() {
  return axios.get('http://127.0.0.1:8000/api/final_approval/').then((response) => {
    return response.data.data;
  })
}

function getTemperature() {
  return axios.get('http://127.0.0.1:8000/api/temperature/').then((response) => {
    return response.data.data;
  })
}

export { getGdp, getCpi, getCpiYearly, getUnemployment, getImmigration, getDeportation, getImmigrationDeportation,
    getDepartmentSpending, getGasPrices, getOrders, getDeficit, getInitialApproval, getFinalApproval, getTemperature};
