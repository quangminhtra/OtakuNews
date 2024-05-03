import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;  /* Default to a clean, readable font */
}

body {
    color: #2C3E50;
    background-color: rgb(27, 18, 18);
    font-size: 25px;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Permanent Marker', cursive;  /* Give headers a playful, handwritten style */
}

a {
    color: #E74C3C;
}

a:hover {
    color: #C0392B;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #FF4081, #FF80AB);
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background-color: #f4f4f4;
}
`;


export default GlobalStyle;