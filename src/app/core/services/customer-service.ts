import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signal, signal, computed } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private http = inject(HttpClient);
  private readonly apiUrl = '/api/customers';

  private customersSignal = signal<Customer[]>([]);
  readonly customers: Signal<Customer[]> = computed(() => this.customersSignal());

  getCustomers() {
    this.http.get<Customer[]>(this.apiUrl).subscribe(customers => {
      this.customersSignal.set(customers);
    });
  }

  addCustomer(customer: Omit<Customer, 'id'>) {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
