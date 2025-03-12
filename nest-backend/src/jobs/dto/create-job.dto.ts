import { 
    IsString, 
    IsEnum, 
    IsDate, 
    IsNumber, 
    IsOptional,
    IsArray,
    ArrayNotEmpty 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { JobType } from '../job.entity';
  
  export class CreateJobDto {
    @IsString()
    jobTitle: string;
  
    @IsString()
    companyName: string;
  
    @IsString()
    location: string;
  
    @IsEnum(JobType)
    jobType: JobType;
  
    @IsOptional()
    @IsNumber()
    salaryMin?: number;
  
    @IsOptional()
    @IsNumber()
    salaryMax?: number;
  
    @IsString()
    jobDescription: string;
  
    @IsString()
    requirements: string;  // Change back to string
  
    @IsString()
    responsibilities: string;  // Change back to string
  
    @Type(() => Date)
    @IsDate()
    applicationDeadline: Date;
  }