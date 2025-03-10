import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // ページ読み込み時にスクロール位置をトップにする
  }, []);

  return <>{children}</>;
};

export default Layout;
