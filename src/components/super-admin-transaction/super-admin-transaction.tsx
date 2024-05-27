'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './buttons';
import Container from '../transaction-container/container';
import { Transaction } from '../svg-icons/svg-icons';
import CreateTransaction from './modal/modal';

interface Transaction {
  id: string;
  title: string;
  Amount: string;
  payment_type: string;
  date: string;
}

type filter = 'all' | 'initial' | 'final';

enum FILTER {
  ALL = 'all',
  INITIAL = 'initial',
  FINAL = 'final'
}

const transactions = [
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'final',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'final',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'final',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'final',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  },
  {
    id: 'transaction1',
    title: 'Dashboard Design',
    Amount: '100,000',
    payment_type: 'initial',
    date: '11th, Dec, 2023'
  }
];

const SuperAdminTransaction = () => {
  const [transactionsList, setTransactionsList] =
    useState<Transaction[]>(transactions);
  const [activeTab, setActiveTab] = useState<filter>('all');

  const changeFilter = (filter: filter) => {
    setTransactionsList(
      filter === FILTER.ALL
        ? transactions
        : transactions.filter(item => item.payment_type === filter)
    );
    setActiveTab(filter);
  };

  return (
    <div className="pb-4 lg:pb-8">
      <div className="flex lg:flex-row gap-2 lg:gap-3 pb-4 lg:pb-12 overflow-x-scroll">
        <Button
          className="text-xs lg:text-lg"
          changeFilter={changeFilter}
          tab={FILTER.ALL}
          name="All Transactions"
          activeTab={activeTab}
        />
        <Button
          className="text-xs lg:text-lg"
          changeFilter={changeFilter}
          tab={FILTER.INITIAL}
          name="Initial Payments"
          activeTab={activeTab}
        />
        <Button
          className="text-xs lg:text-lg"
          changeFilter={changeFilter}
          tab={FILTER.FINAL}
          name="Final Payments"
          activeTab={activeTab}
        />
        <CreateTransaction btnClass="mt-0 lg:mt-3 lg:mt-0 lg:ml-auto" />
      </div>
      <Container
        isEmpty={transactionsList.length > 0}
        title="All Transactions"
        Icon={Transaction}
        emptyIllustration="/assets/empty-transaction.png"
        emptyText="No transactions have been made yet!"
        Create={CreateTransaction}
      >
        <div className="overflow-x-auto text-xs lg:text-lg">
          <table className="w-full text-header text-center">
            <thead>
              <tr>
                <th className="pl-4 lg:pl-20 p-2 py-4 font-medium"></th>
                <th className="p-2 py-4 text-left lg:w-2/5 font-medium">
                  Project Name
                </th>
                <th className="p-2 py-4 font-medium">Amount</th>
                <th className="p-2 py-4 font-medium">Payment Type</th>
                <th className="p-2 py-4 pr-4 lg:pr-20 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactionsList.map((item, index) => (
                <tr key={item.id} className="border-t border-t-[#CAC4D0]">
                  <td className="pl-4 lg:pl-20 p-2 py-4">
                    <span className="table-numbering">{index + 1}</span>
                  </td>
                  <td className="p-2 lg:w-2/5 py-4 text-left">{item.title}</td>
                  <td className="p-2 py-4">₦{item.Amount}</td>
                  <td
                    className={`p-2 py-4 capitalize ${
                      item.payment_type === 'final'
                        ? 'text-[#008D36]'
                        : 'text-[#665D3A]'
                    }`}
                  >
                    {item.payment_type}
                  </td>
                  <td className="p-2 py-4 pr-4 lg:pr-20 truncate">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default SuperAdminTransaction;
