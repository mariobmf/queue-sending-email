import 'reflect-metadata';
import 'dotenv/config';
import { container } from 'tsyringe';
import './container';
import { ProcessMailQueueJob } from './jobs/ProcessMailQueueJob';

const processMailQueueJob = container.resolve(ProcessMailQueueJob);
processMailQueueJob.execute();
console.log('Queue ready to receive requests!');

