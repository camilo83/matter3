import { Footer } from './footer/footer';
import { Header } from './header/header';

export function BasicLayout({ children }: any) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
