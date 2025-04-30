export interface WebCoreConfig {
    headerComponent?: string;
    useHttpLogger?: boolean;
    useEnsureHttp?: boolean;
    ensureHttpConfig?: EnsureHttpConfig;
}

export interface EnsureHttpConfig {
    apiUrl?: string;
    retryCount?: number;
}

export const DEFAULT_ENSURE_HTTP_CONFIG: EnsureHttpConfig = {
    apiUrl: 'http://localhost:8080',
    retryCount: 3
}

export const DEFAULT_WEB_CORE_CONFIG: WebCoreConfig = {
    headerComponent: 'app-header',
    useHttpLogger: true,
    useEnsureHttp: true,
    ensureHttpConfig: DEFAULT_ENSURE_HTTP_CONFIG
}