import "./style.css";
import { Current } from "./current";

const users = ["rony", "motya", "klosha", "klushka"];

function getUser() {
  const user = users.filter((e) => e[0] === "k")[0];

  if (!user) {
    throw new Current({
      name: "NO SUCH USER",
      message: "Такого пользователя не существует",
    });
  }

  if (users.length > 5) {
    throw new Current({
      name: "USERS LIMIT REACHED",
      message: "Слишком много пользователей",
    });
  }

  return user;
}

try {
  getUser();
} catch (e) {
  if (e instanceof Current) {
    if (e.name === "NO SUCH USER") {
      console.log(e.message);
    }
  }
}
