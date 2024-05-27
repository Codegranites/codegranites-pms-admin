'use client';

import React, { useState } from 'react';
import Container from '../transaction-container/container';
import { Folder } from '../svg-icons/svg-icons';

const projects = [
  {
    id: 'project1',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project2',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project3',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project4',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project5',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project6',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  },
  {
    id: 'project7',
    title: 'Dashboard Design',
    description: 'Project Description',
    project_owner: 'John Doe',
    start_date: '11th Nov. 2023',
    end_date: '11th Dec. 2023',
    status: 'Completed'
  }
];

function HistoryComponent() {
  const [projectList, setProjectList] = useState(projects);
  return (
    <Container
      isEmpty={projectList.length > 0}
      title="All Completed Projects"
      Icon={Folder}
      emptyIllustration="/assets/empty-history.png"
      emptyText="Oops! There are no completed projects yet"
    >
      <table className="w-full text-header text-center">
        <thead>
          <tr>
            <th className="p-4 font-medium"></th>
            <th className="p-4 text-left w-1/4 font-medium">Project Title</th>
            <th className="p-4 font-medium">Project Owner</th>
            <th className="p-4 font-medium">Start Date</th>
            <th className="p-4 font-medium">Due Date</th>
            <th className="p-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((item, index) => {
            return (
              <tr key={item.id} className=" border-t border-[#CAC4D0]">
                <td className="pl-4 p-2 py-4">
                  <span className="table-numbering">{index + 1}</span>
                </td>
                <td className="p-2">
                  <div className="flex flex-col text-left">
                    <h4>{item.title}</h4>
                    <p className="whitespace-nowrap text-ellipsis overflow-hidden">
                      {item.description}
                    </p>
                  </div>
                </td>
                <td className="p-2">{item.project_owner}</td>
                <td className="p-2">{item.start_date}</td>
                <td className="p-2">{item.end_date}</td>
                <td className="p-2 pr-4">
                  <div className="rounded-full py-2 px-3 mx-auto w-fit bg-[#80BD92] text-white">
                    {item.status}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

export default HistoryComponent;
