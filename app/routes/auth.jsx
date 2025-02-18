import styles from "../styles/auth.css";

export default function AuthPage() {
  return (
    <div>
      <h1>Auth</h1>
    </div>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles}
  ];
}
