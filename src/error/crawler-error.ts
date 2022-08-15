export class CrawlerError extends Error {
    constructor(message: string, options?: { cause: ErrorOptions['cause'] | unknown }) {
        let cause: Error | undefined;
        if (options?.cause) {
            if (options?.cause instanceof Error) {
                cause = options.cause;
            } else {
                cause = new Error(String(options?.cause));
            }
            super(message, { cause });
        } else {
            super(message);
        }
    }
}
