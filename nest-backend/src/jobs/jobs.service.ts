import { Injectable, NotFoundException } from '@nestjs/common';
import { JobsRepository } from './jobs.repository';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(private jobsRepository: JobsRepository) {}

  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    // No need for transformation, pass the DTO directly
    return this.jobsRepository.createJob(createJobDto);
  }

  async getAllJobs(): Promise<Job[]> {
    return this.jobsRepository.getAllJobs();
  }

  async getJobById(id: number): Promise<Job> {
    const job = await this.jobsRepository.getJobById(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return job;
  }

  async updateJob(id: number, updateData: Partial<Job>): Promise<Job> {
    // First, verify the job exists
    await this.getJobById(id);
    
    // Then update the job
    return this.jobsRepository.updateJob(id, updateData);
  }

  async deleteJob(id: number): Promise<boolean> {
    // Verify the job exists before deleting
    await this.getJobById(id);
    return this.jobsRepository.deleteJob(id);
  }
}