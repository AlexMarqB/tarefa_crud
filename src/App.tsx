import "./App.css";
import { _axios } from "./services/axios";
import { CreateUserForm } from "./components/createUserForm";
import { UpdateUserForm } from "./components/updateUserForm";
import { GetUserById } from "./components/getUserById";
import { ListUsers } from "./components/listUsers";
import { DeleteUser } from "./components/deleteUser";
import { GetUsersByIdade } from "./components/getUsersByIdade";

function App() {

  return (
    <>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
      <CreateUserForm />
      <UpdateUserForm />
      <DeleteUser />
      <GetUserById />
      <GetUsersByIdade />
      <ListUsers />
    </div>
    </>
  );
}

export default App;
