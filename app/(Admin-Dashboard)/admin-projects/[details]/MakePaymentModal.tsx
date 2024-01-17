'use client';

import { X } from 'lucide-react';
import { cn, formatPrice } from '@/utils/util';
import { useState } from 'react';
import { ProjectCardProps } from '@/libs/projects';

interface MakePaymentModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  project?: ProjectCardProps;
}

type PaymentProps = {
  id?: number;
  label: string;
};
const PAYMENTS: PaymentProps[] = [
  {
    id: 1,
    label: 'initial'
  },
  {
    id: 2,
    label: 'final'
  },
  {
    id: 3,
    label: 'full'
  }
];

const MakePaymentModal = ({
  openModal,
  setOpenModal,
  project
}: MakePaymentModalProps) => {
  const [selectedPayment, setSelectedPayment] = useState<
    PaymentProps['label'] | null
  >(null);
  const [amount, setAmount] = useState<number | null>(null);

  return (
    <>
      {openModal && (
        <div
          aria-hidden
          className={cn(
            ' fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]',
            openModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setOpenModal(false)}
        />
      )}

      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'py-6   flex flex-col w-[360px] h-[350px] min-[450px]:h-[380px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[459px] justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 z-[999]  transition-all opacity-0 select-none ',
          openModal
            ? 'scale-100 duration-500 opacity-100 rounded-xl md:rounded-2xl'
            : 'scale-0 duration-200 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium text-header">
            Make Payment
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setOpenModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full h-full pt-2 sm:pt-8 items-center flex-col gap-y-5">
          <p className="text-center text-sm md:text-base">
            Make payment to enable us continue with this project
          </p>
          <p className="text-center text-sm md:text-base font-semibold">
            Select payment type
          </p>
          <div className="flex flex-col gap-y-3 md:gap-y-5">
            {PAYMENTS.map(payment => (
              <p
                key={payment.id}
                className={cn(
                  'text-center text-sm md:text-base flex items-center gap-x-2 transition-all duration-300',
                  selectedPayment === 'final' && payment.label !== 'final'
                    ? 'opacity-40'
                    : ''
                )}
              >
                <button
                  onClick={() => {
                    setSelectedPayment(payment.label);
                    if (payment.label === 'initial') {
                      setAmount(project?.initial_payment!);
                    } else if (payment.label === 'final') {
                      setAmount(
                        project?.total_cost! - project?.initial_payment!
                      );
                    } else if (payment.label === 'full') {
                      setAmount(project?.total_cost!);
                    }
                  }}
                  type="button"
                  className={cn(
                    'w-6 h-6 rounded-full border-primary border flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
                    {
                      ' p-1': payment.label === selectedPayment
                    }
                  )}
                >
                  {selectedPayment === payment.label && (
                    <span className="bg-primary h-full w-full rounded-full" />
                  )}
                </button>
                <span className="capitalize">{payment.label} Payment</span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center h-full pt-4 sm:pt-9">
          <button
            type="button"
            tabIndex={0}
            disabled={!amount}
            aria-label="Make Payment"
            className={cn(
              'rounded-lg bg-primary-light text-white min-[450px]:w-[178px] min-[450px]:h-[56px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
              {
                'bg-gray-300 text-primary': !amount
              }
            )}
          >
            Pay {!amount && 'amount'}{' '}
            {amount && <span className="ml-1">{formatPrice(amount)}</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default MakePaymentModal;
