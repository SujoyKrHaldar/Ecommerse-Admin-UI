import Header from "./Header";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-zinc-200 w-full h-screen pt-16">{children}</main>
    </>
  );
}

export default Layout;
