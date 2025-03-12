import { Repository, DataSource, DeleteResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsRepository extends Repository<Job> {
  constructor(private dataSource: DataSource) {
    super(Job, dataSource.createEntityManager());
  }

  async createJob(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.create(createJobDto);
    return this.save(job);
  }

  async getJobById(id: number): Promise<Job | null> {
    return this.findOne({ where: { id } });
  }

  async getAllJobs(): Promise<Job[]> {
    return this.find();
  }

  async updateJob(id: number, updateData: Partial<Job>): Promise<Job> {
    await this.update(id, updateData);
    const updatedJob = await this.findOne({ where: { id } });
    
    if (!updatedJob) {
      throw new Error(`Job with ID ${id} not found after update`);
    }
    
    return updatedJob;
  }

  async deleteJob(id: number): Promise<boolean> {
    const result: DeleteResult = await this.delete(id);
    
    // Safely handle undefined or null affected property
    return result.affected ? result.affected > 0 : false;
  }
}