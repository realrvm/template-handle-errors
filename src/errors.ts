type ProjectErrorParams<T> = {
  name: T;
  message: string;
  cause?: any;
};

export class ProjectError<T extends string> extends Error {
  name: T;
  message: string;
  cause?: any;
  constructor({ name, message, cause }: ProjectErrorParams<T>) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
