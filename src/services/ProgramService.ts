import AbstractService from './AbstractService';
import { context, Program, options } from '../types';

export class ProgramService extends AbstractService {
    constructor(context: context) {
        super('program', context);
    }
    async findPrograms(options?: options): Promise<Program[]> {
        return this.findDocuments<Program[]>('/programs.json', options);
    }
}

// noinspection JSUnusedGlobalSymbols
export default ProgramService;
