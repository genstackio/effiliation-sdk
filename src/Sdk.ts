import ProgramService from './services/ProgramService';
import ReportingService from './services/ReportingService';
import LinkService from './services/LinkService';
import { context, endpoints } from './types';

export class Sdk {
    public program: ProgramService;
    public reporting: ReportingService;
    public link: LinkService;
    constructor({ fetch, endpoints }: { fetch: Function; endpoints: endpoints }) {
        const context = { fetch };
        this.program = new ProgramService(this.createContextFor('program', endpoints, context));
        this.reporting = new ReportingService(this.createContextFor('reporting', endpoints, context));
        this.link = new LinkService(this.createContextFor('link', endpoints, context));
    }
    setApiKey(apiKey: string) {
        this.program.setApiKey(apiKey);
        this.reporting.setApiKey(apiKey);
        this.link.setApiKey(apiKey);
        return this;
    }
    protected createContextFor(type: string, endpoints: any, context: any): context {
        return { ...context, endpoint: endpoints[type] };
    }
}

export default Sdk;
