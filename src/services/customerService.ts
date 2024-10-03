import axios from 'axios';

const API_URL = 'http://localhost:8080';

export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age?: number;
  address: string;
  active: boolean;
}

export const fetchCustomers = async (): Promise<Customer[]> => {
  const response = await axios.get(`${API_URL}/customers`);
  return response.data;
};

export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const response = await axios.post(`${API_URL}/customers`, customer);
  return response.data;
};

export const updateCustomer = async (customer: Customer): Promise<Customer> => {
  const response = await axios.put(`${API_URL}/customers/${customer.id}`, customer);
  return response.data;
};

export const deleteCustomer = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/customers/${id}`);
};
