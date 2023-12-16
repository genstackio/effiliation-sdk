import {createEnvSdk} from "../../utils";

export const command = ['list-programs', '$0'];

export const describe = 'list publishers programs'

export const builder = {
    apiKey: {
        default: '',
    }
}

export const handler = async argv => {
    const sdk = createEnvSdk({apiKey: argv.apiKey});
    const docs = await sdk.program.findPrograms();

    console.log(docs);
}