import instance from "../utils/axiosInstance";
import { DriverData, DriverResponse } from "../types/driver.type";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getDrivers = async (): Promise<DriverResponse[]> => {
  const res = await instance.get<DriverResponse[]>(`${API_URL}/drivers`);
  return res.data;
};

export const getDriver = async (id: number): Promise<DriverResponse> => {
  const res = await instance.get<DriverResponse>(`${API_URL}/drivers/${id}`);
  return res.data;
};

export const createDriver = async (data: DriverData): Promise<DriverResponse> => {
  const res = await instance.post<DriverResponse>(`${API_URL}/drivers`, data);
  return res.data;
};

export const updateDriver = async (id: number, data: DriverData): Promise<DriverResponse> => {
  const res = await instance.put<DriverResponse>(`${API_URL}/drivers/${id}`, data);
  return res.data;
};

export const deleteDriver = async (id: number): Promise<void> => {
  await instance.delete(`${API_URL}/drivers/${id}`);
};