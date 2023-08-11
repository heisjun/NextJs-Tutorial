import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
