export class NFEProcessingError extends Error {
  public readonly code: string;
  public readonly correlationId?: string;
  public readonly cause?: Error;

  constructor(
    message: string,
    code: string,
    correlationId?: string,
    cause?: Error
  ) {
    super(message);
    this.name = 'NFEProcessingError';
    this.code = code;
    this.correlationId = correlationId;
    this.cause = cause;
  }
}

export class ValidationError extends NFEProcessingError {
  constructor(message: string, correlationId?: string, cause?: Error) {
    super(message, 'VALIDATION_ERROR', correlationId, cause);
    this.name = 'ValidationError';
  }
}

export class DuplicateNFEError extends NFEProcessingError {
  constructor(chaveAcesso: string, correlationId?: string) {
    super(`NFE ${chaveAcesso} already exists`, 'DUPLICATE_NFE', correlationId);
    this.name = 'DuplicateNFEError';
  }
}

export class ExternalAPIError extends NFEProcessingError {
  constructor(message: string, correlationId?: string, cause?: Error) {
    super(message, 'EXTERNAL_API_ERROR', correlationId, cause);
    this.name = 'ExternalAPIError';
  }
}