import Axios, { AxiosResponse } from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "./API_ENDPOINTS";

const axiosInstance = Axios.create({
  baseURL: API_BASE_URL.dev,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @function getUsers
 *
 * @summary FACTORY FUNCTION TO RETRIEVE USERS
 *
 * @returns {Promise<AxiosResponse>}
 */
const getUsers = () => {
  return axiosInstance.get(API_ENDPOINTS.GET_USERS);
};

/**
 * @function createNewUser
 *
 * @param {{ llid: string, email: string, role: string }} data
 *
 * @returns {Promise<AxiosResponse>}
 */
const createNewUser = (data) => {
  return axiosInstance.post(API_ENDPOINTS.CREATE_USER, { ...data });
};

/**
 * @function updateRole
 *
 * @param {string} llid
 * @param {{role: string}} data
 *
 * @returns {Promise<AxiosResponse>}
 */
const updateRole = (llid, data) => {
  if (!llid) throw new Error("LLID is missing");

  return axiosInstance.patch(`${API_ENDPOINTS.UPDATE_ROLE}/${llid}/role`, {
    ...data,
  });
};

/**
 * @function searchUser
 *
 * @param {string} user
 *
 * @returns {Promise<AxiosResponse>}
 */
const searchUser = (user) => {
  if (!user) throw new Error("Cannot Search without User ID");

  return axiosInstance.get(`${API_ENDPOINTS.SEARCH_USER}/${user}`);
};

export { getUsers, createNewUser, updateRole, searchUser };
