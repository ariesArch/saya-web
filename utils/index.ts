import { ServerResponse } from "http";

export const redirectTo = (status: number, location: string, res: ServerResponse) => {
    res.writeHead(status, {
        Location: location,
    });
    res.end();
};

export const emptyFunction = () => {
    // do nothing
};
