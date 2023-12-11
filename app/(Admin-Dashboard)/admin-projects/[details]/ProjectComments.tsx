/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useStateCtx } from '../../../../context/StateContext';
import Image from 'next/image';
import { DirectRight } from 'iconsax-react';

interface Comment {
	id?: string;
	comment: string;
	time: string;
	author: string;
}

// random unique id generator
const generateId = () => {
	return Math.random().toString(36).substring(2, 9);
};

const ProjectComments = () => {
	const { user } = useStateCtx();
	const [comment, setComment] = useState({
		id: '',
		comment: '',
		time: '',
		author: user?.name
	});
	const [comments, setComments] = useState<Comment[]>([]);

	const handleComment = (e: FormEvent) => {
		e.preventDefault();

		setComments([
			...comments,
			{
				id: generateId(),
				comment: comment.comment,
				time: new Date().toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true
				}),
				author: user?.name
			}
		]);
		setComment({
			id: '',
			comment: '',
			time: '',
			author: user?.name
		});
	};

	// get comments from local storage
	useEffect(() => {
		const storedComments = localStorage.getItem('comments');
		if (storedComments) {
			setComments(JSON.parse(storedComments));
		}
	}, []);

	useEffect(() => {
		// save comments to local storage
		if (!comments || !comments.length) return;
		localStorage.setItem('comments', JSON.stringify(comments));
	}, [comments]);

	return (
		<div className="border-t border-[#e1e1e1] py-6 lg:py-8 mt-4 flex w-full flex-col gap-y-5 lg:gap-y-8 max-lg:items-center">
			<h3 className="text-xl font-medium sm:text-3xl text-header max-lg:w-full text-center">Comments</h3>
			{comments.length > 0 ? (
				<div className="flex w-full max-w-[600px] py-6 flex-col">
					{comments.map((comment) => (
						<div className="flex items-start gap-x-2 py-2 w-full border-b border-[#e1e1e1]" key={comment.id}>
							<Image src={user.image} alt="profile" width={40} height={40} className="rounded-full" />
							<div className="flex flex-col w-full">
								<p className="text-sm lg:text-base font-medium">{comment.author}</p>
								<p className="text-sm">{comment.comment}</p>
								<div className="flex w-full justify-end">
									<p className="text-xs text-header italic">{comment.time}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<p>There are no comments yet for this project</p>
			)}

			<div className="flex items-start gap-x-2 max-lg:w-full max-lg:justify-center">
				<Image src={user.image} alt="profile" width={40} height={40} className="rounded-full" />
				<form className="flex flex-col w-full max-w-[600px] gap-y-2" onSubmit={handleComment}>
					<textarea
						onChange={(e) => setComment({ ...comment, [e.target.name]: e.target.value })}
						value={comment.comment}
						name="comment"
						id="comment"
						placeholder="Leave a comment"
						className="w-full resize-none h-[193px] rounded-xl border border-[#e1e1e1] px-4 py-2 sidebar-scroll outline-none focus-visible:border-primary transition-all duration-300"
					/>

					<div className="flex w-full justify-end">
						<button
							type="submit"
							className="text-sm font-medium mt-2 bg-primary-light text-white h-[48px] hover:bg-primary rounded-lg px-4 transition-all duration-300 flex items-center gap-x-2"
						>
							Comment
							<DirectRight size={18} values="Outline" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProjectComments;