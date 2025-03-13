import { Flex } from '@mantine/core';
import JobCard from './JobCard';
import { JobDetails } from '@/services/jobService';

interface JobBoardProps {
  jobs: JobDetails[];
}

export default function JobBoard({ jobs }: JobBoardProps) {
  // Handle case when jobs array is empty
  if (!jobs || jobs.length === 0) {
    return (
      <Flex
        direction="row"
        gap={16}
        wrap="wrap"
        justify="center"
        style={{
          maxWidth: '1312px',
          width: '100%',
          margin: '32px auto 0',
        }}
      >
        <div>No jobs available</div>
      </Flex>
    );
  }

  return (
    <Flex
      direction="row"
      gap={16}
      wrap="wrap"
      justify="center"
      style={{
        maxWidth: '1312px',
        width: '100%',
        margin: '32px auto 0',
      }}
    >
      {jobs.map((job) => (
        <JobCard 
          key={job._id}
          {...job}
        />
      ))}
    </Flex>
  );
}