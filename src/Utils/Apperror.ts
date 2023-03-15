export enum HttpCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOTFOUNd = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    CREATED = 201,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 304,
    CONFLICT = 409,
    FORBIDDEN = 403,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    NETWORK_TIMEOUT = 599,
}

interface ErrorArgs {
    name?: string,
    isOperational?: boolean,
    message: string,
    httpCode: HttpCode
}

export class AppError extends Error {
    public readonly name: string
    public readonly isOperational: boolean = true
    public readonly httpCode: HttpCode
   constructor(args: ErrorArgs) {
    super(args.message)

    Object.setPrototypeOf(this, new.target.prototype)

    this.httpCode = args.httpCode
    this.name = args.name || "Error"

    if(args.isOperational !== undefined){
        this.isOperational = args.isOperational
    }

    Error.captureStackTrace(this)
   }
}