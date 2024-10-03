import React, { useState, useEffect } from 'react';
import { fetchCustomers, deleteCustomer, Customer, updateCustomer, createCustomer } from '../services/customerService';
import CustomerForm from './CustomerForm';

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      const data = await fetchCustomers();
      setCustomers(data);
    };

    loadCustomers();
  }, []);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      await deleteCustomer(id);
      setCustomers(customers.filter((customer) => customer.id !== id));
    }
  };

  const handleFormSubmit = async (customer: Customer) => {
    if (selectedCustomer) {
      await updateCustomer(customer);
    } else {
      await createCustomer(customer);
    }
    setSelectedCustomer(null);
    const data = await fetchCustomers();
    setCustomers(data);
  };

  return (
    <div>
      <CustomerForm 
        initialValues={selectedCustomer || {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          age: undefined,
          address: '',
          active: false,
        }}
        onSubmit={handleFormSubmit}
      />
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName} - {customer.phoneNumber}
            <button onClick={() => setSelectedCustomer(customer)}>Edit</button>
            <button onClick={() => handleDelete(customer.id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
