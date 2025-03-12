import { Button } from '@mantine/core';
import JobCard from './JobCard';

interface JobDetails {
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  minSalary: string;
  maxSalary: string;
  deadline: string;
  description: string;
}

interface JobBoardProps {
  jobs: JobDetails[]; // ✅ Added jobs prop
}

export default function JobBoard({ jobs }: JobBoardProps) {
  return (
    <div>
      {/* Display Job Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}
