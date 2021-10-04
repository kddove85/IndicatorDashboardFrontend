import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 30000,
  headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
});

function getGdp() {
  return axios.get('http://localhost:8000/api/gdp/').then((response) => {
    return response.data.data;
  })
}

function getCpi() {
  return axios.get('http://localhost:8000/api/cpi/').then((response) => {
    return response.data.data;
  })
}

function getUnemployment() {
  return axios.get('http://localhost:8000/api/unemployment/').then((response) => {
    return response.data.data;
  })
}

function getImmigration() {
  return axios.get('http://localhost:8000/api/immigration/').then((response) => {
    return response.data.data;
  })
}

function getDeportation() {
  return axios.get('http://localhost:8000/api/deportation/').then((response) => {
    return response.data.data;
  })
}

function getDepartmentSpending() {
  return axios.get('http://localhost:8000/api/spending/').then((response) => {
    return response.data.data;
  })
}

function getGasPrices() {
  return axios.get('http://localhost:8000/api/gas/').then((response) => {
    return response.data.data;
  })
}

function getOrders() {
  return axios.get('http://localhost:8000/api/orders/').then((response) => {
    return response.data.data;
  })
}

function getDeficit() {
  return axios.get('http://localhost:8000/api/deficit/').then((response) => {
    return response.data.data;
  })
}

function getInitialApproval() {
  return axios.get('http://localhost:8000/api/initial_approval/').then((response) => {
    return response.data.data;
  })
}

function getFinalApproval() {
  return axios.get('http://localhost:8000/api/final_approval/').then((response) => {
    return response.data.data;
  })
}

export { getGdp, getCpi, getUnemployment, getImmigration, getDeportation, getDepartmentSpending, getGasPrices,
    getOrders, getDeficit, getInitialApproval, getFinalApproval};