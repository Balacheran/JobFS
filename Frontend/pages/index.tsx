import { useState, useEffect } from 'react';
import { notifications } from '@mantine/notifications';
import Navbar from '@/components/Navbar';
import CreateJobForm from '@/components/CreateJobForm';
import JobBoard from '@/components/JobBoard';
import jobService, { JobDetails } from '@/services/jobService';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedJobs = await jobService.getAllJobs();
        setJobs(fetchedJobs);
      } catch (error: any) {
        const errorMessage = error.message || 'Failed to fetch jobs';
        setError(errorMessage);
        notifications.show({
          title: 'Error',
          message: errorMessage,
          color: 'red'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSubmit = (data: JobDetails) => {
    setJobs((prevJobs) => [...prevJobs, data]);
    setOpened(false);
  };

  // Render loading or error state
  if (isLoading) {
    return <div>Loading jobs...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <>
      <Navbar onCreateJobClick={() => setOpened(true)} />
      <JobBoard jobs={jobs} />
      <CreateJobForm
        opened={opened}
        onClose={() => setOpened(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}