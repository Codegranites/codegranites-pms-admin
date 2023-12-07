import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...classes: ClassValue[]) {
	return twMerge(clsx(...classes));
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: 'USD' | 'EUR' | 'GBP' | 'BDT';
		notation?: Intl.NumberFormatOptions['notation'];
	} = {}
) {
	const { currency = 'USD', notation = 'standard' } = options;

	const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
	const newPrice = new Intl.NumberFormat('en-US', {
		currency,
		notation,
		style: 'currency',
		maximumFractionDigits: 0
	}).format(numericPrice);
	return newPrice;
}
