import { Suspense } from 'react';
import { fetchAllInvoices, fetchCustomers} from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const invoices = await fetchAllInvoices();

  
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Paid Invoices</th>
            <th>Remaining Invoices</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            const paidInvoices = [];
            console.log(invoices);
            const remainingInvoices = [];
            for (const elt of invoices) {
              if (elt.customer_id === customer.id) {
                if (elt.status === 'paid') {
                  paidInvoices.push(elt);
                } else {
                  remainingInvoices.push(elt);
                }
              }
            }
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  <img src={customer.image_url} alt="Profile" />
                </td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{paidInvoices.length}</td>
                <td>{remainingInvoices.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Suspense>
  );
}