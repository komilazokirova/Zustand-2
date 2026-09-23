
import { useBoardStore } from "./store/useBoardStore";
import { useNotificationStore } from "./store/useNotificationStore";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const addBoard = useBoardStore((state) => state.addBoard);
  const boards = useBoardStore((state) => state.boards);

  const messages = useNotificationStore((state) => state.messages);
  const clearAll = useNotificationStore((state) => state.clearAll);

  return (
    <div>
      <h1>Trello Lite</h1>

      <h2>
        User: {user ? user.name : "Login qilinmagan"}
      </h2>

      {/* Login */}
      <button
        onClick={() =>
          login(
            {
              id: 1,
              name: "Komila",
              email: "komila@gmail.com",
            },
            "abc123"
          )
        }
      >
        Login
      </button>

      <button onClick={logout}>Logout</button>

      <hr />

      {/* Board yaratish */}
      <button onClick={() => addBoard("Frontend Board")}>
        Create Board
      </button>

      <h2>Boards</h2>

      {boards.map((board) => (
        <p key={board.id}>{board.title}</p>
      ))}

      <hr />

      {/* Notifications */}
      <h2>Notifications</h2>

      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      <button onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default App;
