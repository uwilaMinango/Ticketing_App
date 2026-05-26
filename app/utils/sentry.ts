import * as Sentry from "@sentry/nextjs";

type LogLevel = 'fatal' | 'error' | 'warning' | 'info' | 'debug';

export function logEvent(
    message: string, 
    category: string,
    data?: Record<string, unknown>,// it is no longer any but unknown.
    level: LogLevel = 'info', 
    error?: unknown) {
        Sentry.addBreadcrumb({
            category, 
            message,
            data,
            level
        });

        if(error){
            Sentry.captureException(error, {extra: data});
        } else{
            Sentry.captureMessage(message, level);
        }
    }