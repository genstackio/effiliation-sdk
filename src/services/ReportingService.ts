import AbstractService from './AbstractService';
import {context} from '../types';

export class ReportingService extends AbstractService {
    constructor(context: context) {
        super('reporting', context);
    }
}

export default ReportingService;
