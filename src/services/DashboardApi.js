import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://indicatorsdashboard.herokuapp.com/api',
  timeout: 30000,
  headers: {'Access-Control-Allow-Origin': 'https://indicatorsdashboardfrontend.herokuapp.com'}
});

function getGdp() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/gdp/').then((response) => {
    return response.data.data;
  })
}

function getCpi() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/cpi/').then((response) => {
    return response.data.data;
  })
}

function getUnemployment() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/unemployment/').then((response) => {
    return response.data.data;
  })
}

function getImmigration() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/immigration/').then((response) => {
    return response.data.data;
  })
}

function getDeportation() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/deportation/').then((response) => {
    return response.data.data;
  })
}

function getDepartmentSpending() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/spending/').then((response) => {
    return response.data.data;
  })
}

function getGasPrices() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/gas/').then((response) => {
    return response.data.data;
  })
}

function getOrders() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/orders/').then((response) => {
    return response.data.data;
  })
}

function getDeficit() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/deficit/').then((response) => {
    return response.data.data;
  })
}

function getInitialApproval() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/initial_approval/').then((response) => {
    return response.data.data;
  })
}

function getFinalApproval() {
  return axios.get('https://indicatorsdashboard.herokuapp.com/api/final_approval/').then((response) => {
    return response.data.data;
  })
}

export { getGdp, getCpi, getUnemployment, getImmigration, getDeportation, getDepartmentSpending, getGasPrices,
    getOrders, getDeficit, getInitialApproval, getFinalApproval};
