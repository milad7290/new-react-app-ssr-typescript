export const ErrorMessage = (err: any) =>
    err.message ? err.message : typeof err === 'string' ? err : JSON.stringify(err);
