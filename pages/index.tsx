import { MainLayout } from "components/layouts";
import { Sidebar } from "components/sidebar";
import type { NextPage } from "next";
import { WelcomeView } from "views/welcome";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <WelcomeView />
    </MainLayout>
  );
};

export default Home;
