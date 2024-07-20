// 정확한 use client 의미 => backend 에서 render되고 frontend에서 hydrate 됨
"use client"; //use client 라고 작성해도 서버사이드로 랜더링이 우선시 된다. [use client는 야 이 컴포넌트 or 소스는 javascript 가 필요해 그니까 hydrate해야함 ㅇㅇ]

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationComp() {
  const path = usePathname();
  console.log(path, " test"); // console.log 찍으면 서버쪽에서 된다 [음 근데 이전에는 .... 클라쪽에서 확인이 됐는데 왜지..?  => 'use client' 지시문을 사용하여 console.log를 출력하면 로그가 클라이언트와 서버 모두에 출력됩니다.]
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
