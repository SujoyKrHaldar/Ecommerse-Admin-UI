import { MetaTags } from "../../components/shared";

function Dashboard() {
  return (
    <>
      <MetaTags
        title="Dashboard • Ecommerse"
        description="Welcome to dashboard"
        conicalRoute="/"
      />
      <section className="container py-16">
        <div className="space-y-8">
          <h2>Welcome, Sujoy</h2>
          <div className="w-full h-[400px] bg-white">

          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
