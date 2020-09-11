export class InvalidCredentialsError extends Error {
  constructor(args) {
    super(args);
    this.name = 'InvalidCredentialsError';
    this.status = 500;
  }
}
