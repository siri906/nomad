//atom 이란
// 전역적으로 state를 저장하는 보관함 같은 곳 (버블이라고 이야기 하는것 같음)

import { atom } from "recoil";

// 아톰은 2가지 값을 원한다
// 1. 유일한 key값
// 2. 기본값
export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
