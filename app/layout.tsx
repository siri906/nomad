import { Metadata } from "next";
import NavigationComp from "../components/NavigationComp";

// metadata 는 서버 컴포넌트에서만 사용가능
export const metadata: Metadata = {
  title: {
    template: "%s | Next js",
    default: "Loading",
  },
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <NavigationComp />
        {children}
      </body>
    </html>
  );
}
