import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { 
  IsString, 
  IsEnum, 
  IsDate, 
  IsNumber, 
  IsOptional 
} from 'class-validator';

export enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  INTERNSHIP = 'Internship'
}

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  jobTitle: string;

  @Column()
  @IsString()
  companyName: string;

  @Column()
  @IsString()
  location: string;

  @Column({
    type: 'enum',
    enum: JobType
  })
  @IsEnum(JobType)
  jobType: JobType;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @IsOptional()
  @IsNumber()
  salaryMin?: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @IsOptional()
  @IsNumber()
  salaryMax?: number;

  @Column('text')
  @IsString()
  jobDescription: string;

  @Column('text')
  @IsString()
  requirements: string;  // Changed to string

  @Column('text')
  @IsString()
  responsibilities: string;  // Changed to string

  @Column('timestamp')
  @IsDate()
  applicationDeadline: Date;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}