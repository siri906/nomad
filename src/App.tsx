import { createGlobalStyle } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import styled from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  // background-color:${(props) => props.theme.bgColor};
  background:linear-gradient(135deg,#e09,#d0e);
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;

}
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box1 = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const 애니 = {
  시작: { scale: 0 },
  끝: {
    scale: 1,
    rotateZ: "360deg",
    transition: { damping: 10, type: "spring" },
  },
};

const 박스애니 = {
  시작: {
    opacity: 0,
    scale: 0.5,
  },
  끝: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const 원애니 = {
  시작: {
    opacity: 0,
    y: 10,
  },
  끝: {
    opacity: 1,
    y: 0,
  },
};

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Wrapper>
          {/* initial => 해당 element 의 초기값 */}
          {/* <Box
            variants={애니}
            initial="시작"
            animate="끝"
            // initial={}
            // transition={} //이건 초기값=> 결과값을 수정하는거
            // animate={{}} // 이건 결과값
          /> */}
          <Box1 variants={박스애니} initial="시작" animate="끝">
            <Circle variants={원애니} />
            <Circle variants={원애니} />
            <Circle variants={원애니} />
            <Circle variants={원애니} />
          </Box1>
        </Wrapper>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
