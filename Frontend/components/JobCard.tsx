import {
  Box,
  Paper,
  Text,
  Button,
  Image,
  Flex,
} from '@mantine/core';
import { JobDetails } from '@/services/jobService';

interface JobCardProps extends Partial<JobDetails> {}

export default function JobCard(job: JobCardProps) {
  // Safe salary formatting
  const formatSalary = (min?: number, max?: number) => {
    // Check if both min and max are valid numbers
    if (min === undefined || max === undefined || isNaN(min) || isNaN(max)) {
      return 'Salary not specified';
    }

    // Format number to LPA (Lakhs Per Annum)
    const formatNumber = (num: number) => {
      return (num / 100000).toFixed(1) + ' LPA';
    };

    return `${formatNumber(min)} - ${formatNumber(max)}`;
  };

  // Provide default values or fallback content
  const jobTitle = job.jobTitle || 'Job Title Not Available';
  const companyName = job.companyName || 'Company Not Specified';
  const location = job.location || 'Location Not Specified';
  const jobDescription = job.jobDescription || 'No description available';

  return (
    <Paper
      w={316}
      h={360}
      radius={12}
      style={{
        background: '#FFFFFF',
        boxShadow: '0px 0px 14px 0px #D3D3D326',
        position: 'relative',
        padding: 0,
        fontFamily: 'Satoshi Variable',
      }}
    >
      {/* Time Tag */}
      <Box
        w={75}
        h={33}
        style={{
          position: 'absolute',
          top: 16,
          left: 222,
          backgroundColor: '#B0D9FF',
          padding: '7px 10px',
          borderRadius: 10,
        }}
      >
        <Text fz={14} fw={500} c="black">
          24h Ago
        </Text>
      </Box>

      {/* Profile Image Frame */}
      <Box
        w={83.46428680419922}
        h={82}
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
          border: '1px solid #FFFFFF',
          boxShadow: '0px 0px 10.25px 0px #94949440',
          borderRadius: 13.18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/assets/image 77.png"
          alt="Profile"
          width={65.89}
          height={65.89}
        />
      </Box>

      {/* Job Title */}
      <Text
        fw={700}
        fz={20}
        lh={1}
        mt={117}
        ml={16}
        c="#000000"
        style={{ width: 190, height: 27, textAlign: 'center' }}
      >
        {jobTitle}
      </Text>

      {/* Job Details */}
      <Flex
        gap={16}
        align="center"
        style={{
          position: 'absolute',
          top: 160,
          left: 16,
          width: 263.0818,
          height: 22,
        }}
      >
        {/* Company */}
        <Flex gap={4} align="center">
          <Image
            src="/assets/Vector1.png"
            alt="Company Icon"
            width={17.1}
            height={13.5}
          />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            {companyName}
          </Text>
        </Flex>

        {/* Location */}
        <Flex gap={4} align="center">
          <Image
            src="/assets/Vector2.png"
            alt="Location Icon"
            width={17.1}
            height={13.5}
          />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            {location}
          </Text>
        </Flex>

        {/* Salary */}
        <Flex gap={4} align="center">
          <Image
            src="/assets/Vector3.png"
            alt="Salary Icon"
            width={17.1}
            height={13.5}
          />
          <Text
            fz={16}
            fw={500}
            style={{ textAlign: 'center', color: '#5A5A5A' }}
          >
            {job.salaryRange 
              ? formatSalary(job.salaryRange.min, job.salaryRange.max) 
              : 'Salary not specified'}
          </Text>
        </Flex>
      </Flex>

      {/* Description */}
      <Text
        component="p"
        fz={14}
        fw={500}
        lh={1.5}
        style={{
          position: 'absolute',
          top: 202,
          left: 16,
          width: 284,
          height: 76,
          color: '#555555',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {jobDescription}
      </Text>

      {/* Apply Button */}
      <Button
        fullWidth
        h={46}
        radius={10}
        style={{
          position: 'absolute',
          left: 'calc(50% - 284px/2)',
          top: 298,
          maxWidth: 284,
          backgroundColor: '#00AAFF',
          boxShadow: '0px 0px 14px rgba(93, 93, 93, 0.15)',
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        Apply Now
      </Button>
    </Paper>
  );
}