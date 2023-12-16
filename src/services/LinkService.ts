import AbstractService from './AbstractService';
import {context} from "../types";

export class LinkService extends AbstractService {
    constructor(context: context) {
        super('link', context);
    }
}

// noinspection JSUnusedGlobalSymbols
export default LinkService;
