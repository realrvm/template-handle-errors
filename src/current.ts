import { ProjectError } from "./errors";

type CurrentUser = "NO SUCH USER" | "USERS LIMIT REACHED";

export class Current extends ProjectError<CurrentUser> {}
