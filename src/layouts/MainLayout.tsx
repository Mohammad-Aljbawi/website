import Header from "./Header";
import Footer from "./Footer";


type MainLayout = {
  children: React.ReactNode;
};

const MainLayout = (props: MainLayout) => {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
