import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CreateJobForm from '@/components/CreateJobForm';
import JobBoard from '@/components/JobBoard';

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

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [jobs, setJobs] = useState<JobDetails[]>([]);

  const handleSubmit = (data: JobDetails) => {
    setJobs((prevJobs) => [...prevJobs, data]);
    setOpened(false);
  };

  return (
    <>
      <div>
        <JobBoard jobs={jobs} /> {/* ✅ Pass jobs state */}
      </div>
      <Navbar onCreateJobClick={() => setOpened(true)} />
      <CreateJobForm
        opened={opened}
        onClose={() => setOpened(false)}
        onSubmit={handleSubmit} // ✅ Pass handleSubmit function
      />
    </>
  );
}
