
import { useLocation } from "react-router-dom";

export function Component(): JSX.Element {
  const { pathname, search } = useLocation();
  return (
    <div>
      <p>Login</p>
      <p>
        {pathname} - {search}
      </p>
    </div>
  );
}

Component.displayName = "Login";