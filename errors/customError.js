import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = ' NotFoundError';
    this.statusCodes = StatusCodes.NOT_FOUND;
  }
}
