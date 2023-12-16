export type context = { fetch: Function; endpoint: string };

export type options = {
    cache?: boolean;
};

export type endpoints = {
    program: string;
    reporting: string;
    link: string;
};

export type Program = {
    id_affilieur: number;
    id_programme: number;
    date_debug: string;
    date_fin: string;
    description: string;
    siteannonceur: string;
    urlannonceur: string;
    id_session: number;
    url_inscription: string;
    categories: string;
    responsable: string;
    tm: string;
    etat: string;
    url: string;
    urllo: string;
    url_tracke: string;
    nom: string;
    typecom: string;
    pays: string;
    dureecookies: number;
    dureecookiespi: number;
    scoredb: string;
    // ...
};
