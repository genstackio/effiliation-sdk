import { Sdk } from './Sdk';
import crossFetch from 'cross-fetch';

// try to obfuscate a little
const protocol = 'https';
const rootDomain = 'effiliation.com';
const buildEndpoint = (e, n) => `${protocol}://apiv2.${'prod' === e ? '' : `${e}.`}${rootDomain}/apiv2`;

export function createEnvSdk({ fetch, defaultEnv = 'prod', apiKey }: { apiKey?: string; fetch?: Function; defaultEnv?: string } = {}) {
    return createSdk({
        fetch: fetch || ('undefined' !== typeof window && window.fetch ? window.fetch.bind(window) : undefined),
        env:
            process.env.RAZZLE_EFFILIATION_ENV ||
            process.env.STORYBOOK_EFFILIATION_ENV ||
            process.env.EFFILIATION_SDK_ENV ||
            defaultEnv,
        apiKey,
    });
}

export function createSdk({ fetch, env = 'prod', apiKey }: { apiKey?: string; fetch?: Function; env?: string } = {}) {
    const sdk = new Sdk({
        fetch: fetch || crossFetch,
        endpoints: {
            program: buildEndpoint(env, 'program'),
            reporting: buildEndpoint(env, 'reporting'),
            link: buildEndpoint(env, 'link'),
        },
    });
    apiKey = apiKey || process.env.RAZZLE_EFFILIATION_API_KEY || process.env.STORYBOOK_EFFILIATION_API_KEI || process.env.EFFILIATION_API_KEY || undefined;
    if (apiKey) sdk.setApiKey(apiKey);
    return sdk;
}
