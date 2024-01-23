'use client';
import React, { useState } from 'react';
import EmptyState from '@/components/admin/problem-statements/EmptyState';
import NewIdeaModal from '@/components/admin/problem-statements/NewIdeaModal';
import Problems from '@/components/admin/problem-statements/Problems';

export interface ProblemsDataProps {
  id: number;
  title: string;
  owner: string;
  description: string;
  createdAt: string;
}
const currentDate: Date = new Date();

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};

const formattedDate = new Intl.DateTimeFormat('en-NG', options).format(
  currentDate
);

const problemData: ProblemsDataProps[] = [
  {
    id: 1,
    owner: 'John Doe',
    title: 'John Doe Project',
    description:
      'I would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism',
    createdAt: formattedDate
  },
  {
    id: 2,
    owner: 'John Doe',
    title: 'John Doe Project',
    description:
      'I would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism would like for the footer to be bigger and the land page to be more interesting add more pictures better colors smaller icons , styles like glass morphism',
    createdAt: formattedDate
  }
];

const ProblemStatements: React.FC = () => {
  const [isIdeaModal, setIsIdeaModal] = useState<boolean>(false);
  return (
    <div className="pt-10 lg:pt-2">
      {problemData.length > 0 ? (
        <Problems
          problemData={problemData}
          openNewIdeaModal={() => setIsIdeaModal(true)}
        />
      ) : (
        <EmptyState openNewIdeaModal={() => setIsIdeaModal(true)} />
      )}
      {isIdeaModal && (
        <NewIdeaModal
          isOpen={isIdeaModal}
          onClose={() => setIsIdeaModal(false)}
        />
      )}
    </div>
  );
};

export default ProblemStatements;
