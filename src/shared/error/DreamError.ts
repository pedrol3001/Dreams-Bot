class DreamError extends Error {
  private firstStack: string | undefined = undefined;

  constructor(msg: string, cause?: Error, public metadata?: Record<string, unknown>) {
    super(msg);

    Object.setPrototypeOf(this, DreamError.prototype);

    if (cause) {
      const causeMessage = cause instanceof Error ? cause.message : `Invalid error object: ${JSON.stringify(cause)}`;

      this.message = `${this.message}: ${causeMessage}`;
    }

    this.metadata = {
      ...(cause instanceof DreamError ? cause.metadata : {}),
      ...metadata,
    };
  }

  public log() {
    const noMetadata = !this.metadata || Object.entries(this.metadata).length === 0;

    if (noMetadata) {
      console.error(this.message);
    } else {
      console.error(this.message, this.metadata);
    }
  }
}

export default DreamError;
