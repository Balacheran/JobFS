import { 
    Controller, 
    Post, 
    Get, 
    Put, 
    Delete, 
    Body, 
    Param, 
    ParseIntPipe 
  } from '@nestjs/common';
  import { JobsService } from './jobs.service';  // Ensure correct import
  import { CreateJobDto } from './dto/create-job.dto';
  import { Job } from './job.entity';
  
  @Controller('jobs')
  export class JobsController {
    constructor(private jobsService: JobsService) {}
  
    @Post()
    async createJob(@Body() createJobDto: CreateJobDto): Promise<Job> {
      return this.jobsService.createJob(createJobDto);
    }
  
    @Get()
    async getAllJobs(): Promise<Job[]> {
      return this.jobsService.getAllJobs();
    }
  
    @Get(':id')
    async getJobById(@Param('id', ParseIntPipe) id: number): Promise<Job> {
      return this.jobsService.getJobById(id);
    }
  
    @Put(':id')
    async updateJob(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateData: Partial<Job>
    ): Promise<Job> {
      return this.jobsService.updateJob(id, updateData);
    }
  
    @Delete(':id')
    async deleteJob(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
      return this.jobsService.deleteJob(id);
    }
  }