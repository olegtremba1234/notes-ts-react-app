import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import BackgroundImage from '../Images/wood.png'

const GlobalStyles = createGlobalStyle`
${normalize}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0px;
  margin-bottom: 0px;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
input,
textarea {
  display: block;
  outline: transparent;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: currentColor;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
   background-image:linear-gradient(rgba(105, 67, 0, 0.1) 0%, transparent 5.5%), url(${BackgroundImage});
    background-repeat: no-repeat, repeat;
    background-size: auto, 400px 400px;
    overflow-x: hidden;
    padding: 3vh;
    background-color: #f2f2;
}
`

export default GlobalStyles