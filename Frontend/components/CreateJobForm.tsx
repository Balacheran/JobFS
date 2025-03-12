import { useForm, Controller } from 'react-hook-form';
import { Modal, Box, Button, TextInput, Textarea, Group, Grid, Select } from '@mantine/core';

interface FormValues {
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  minSalary: string;
  maxSalary: string;
  deadline: string;
  description: string;
}

interface CreateJobFormProps {
  opened: boolean;
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
}

export default function CreateJobForm({ opened, onClose }: CreateJobFormProps) {
  const { control, register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
    reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="auto"
      closeButtonProps={{ display: 'none' }}
      withCloseButton={false}
      styles={{
        content: {
          width: 748,
          height: 779,
          borderRadius: 16,
          background: '#FFFFFF',
          boxShadow: '0px 0px 24px 0px #A9A9A940',
          padding: '30px'
        }
      }}
    >
      {/* Reduced Space Above Title */}
      <Box style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', marginTop: '-10px' }}>
        Create Job Opening
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Grid gutter="md">
          {/* Column 1 */}
          <Grid.Col span={6}>
            <TextInput
              label="Job Title"
              placeholder="Full Stack Developer"
              {...register('jobTitle', { required: 'Job title is required' })}
              error={errors.jobTitle?.message}
            />

            {/* Company Name with Increased Height */}
            <Controller
              control={control}
              name="location"
              rules={{ required: 'Location is required' }}
              render={({ field }) => (
                <Select
                  label="Location"
                  placeholder="Select Location"
                  data={['Chennai', 'Madurai', 'Kochi']}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.location?.message}
                  mt="md"
                  styles={{ input: { height: '58px' } }}
                />
              )}
            />

            <Group mt="md" grow>
              <TextInput
                label="Salary Range"
                placeholder="₹0"
                {...register('minSalary', { required: 'Minimum salary is required' })}
                error={errors.minSalary?.message}
              />
              <TextInput
                label=" "
                placeholder="₹12,00,000"
                {...register('maxSalary', { required: 'Maximum salary is required' })}
                error={errors.maxSalary?.message}
              />
            </Group>
          </Grid.Col>

          {/* Column 2 */}
          <Grid.Col span={6}>
            <TextInput
              label="Company Name"
              placeholder="Enter Company"
              {...register('companyName', { required: 'Company is required' })}
              error={errors.companyName?.message}
            />

            {/* Job Type with Increased Height */}
            <Controller
              control={control}
              name="jobType"
              rules={{ required: 'Job type is required' }}
              render={({ field }) => (
                <Select
                  label="Job Type"
                  placeholder="Select job type"
                  data={['Full-time', 'Part-time', 'Contract']}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.jobType?.message}
                  mt="md"
                  styles={{ input: { height: '58px' } }}
                />
              )}
            />

            <TextInput
              label="Application Deadline"
              type="date"
              {...register('deadline', { required: 'Application deadline is required' })}
              error={errors.deadline?.message}
              mt="md"
            />
          </Grid.Col>
        </Grid>

        {/* Job Description with Increased Height */}
        <Textarea
          label="Job Description"
          placeholder="Please share details about the role..."
          {...register('description', { required: 'Job description is required' })}
          error={errors.description?.message}
          minRows={6}
          mt="md"
        />

        {/* Action Buttons */}
        <Group justify="space-between" mt="md" style={{ position: 'absolute', bottom: '30px', width: 'calc(100% - 60px)' }}>
  <Button variant="outline" color="gray" onClick={onClose} style={{ height: '48px' }}>
    Save Draft
  </Button>
  <Button
    type="submit"
    color="blue"
    style={{
      height: '48px',
      fontWeight: 'bold'
    }}
  >
    Publish
  </Button>
</Group>

      </form>
    </Modal>
  );
}