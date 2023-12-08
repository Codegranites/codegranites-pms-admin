import Image from 'next/image';
import Button from '@ui/Button';
import { ArrowLeft } from 'iconsax-react';

function ErrorPage() {
	return (
		<section className="h-screen border border-[#E1E1E1] rounded-2xl">
			<header className="flex pr-6 gap-3 border-b border-b-[#E1E1E1] pl-8 pb-4 pt-6">
				<Image src="/logo.svg" alt="Logo" width={225} height={76} />
			</header>
			<div className="flex flex-col items-center py-14 px-4">
				<div className="relative w-full max-w-sm aspect-[421/342] mb-5">
					<Image src="/404.svg" fill alt="404 Error" />
				</div>
				<h2 className="mb-6 text-black font-bold lg:text-6xl text-3xl">Oops!</h2>
				<p className="max-w-[996px] text-center text-xl mb-5">
					We are sorry - we can&apos;t seem to find the page you are looking for. We might have moved or deleted the
					page you are looking for, or you might have typed in the wrong URL into the address bar.
				</p>
				<Button
					intent={'primary'}
					className="w-[300px] h-[80px] text-xl"
					leftIcon={<ArrowLeft size="32" color="#ffffff" />}
					href="/"
				>
					Return Home
				</Button>
			</div>
		</section>
	);
}

export default ErrorPage;
