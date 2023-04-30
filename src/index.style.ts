import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Black.otf") format("truetype");
	font-weight: 9000;
	font-style: normal;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-ExtraBold.otf") format("truetype");
	font-weight: 800;
	font-style: ExtraBold;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Bold.otf") format("truetype");
	font-weight: 700;
	font-style: Bold;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-SemiBold.otf") format("truetype");
	font-weight: 600;
	font-style: SemiBold;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Medium.otf") format("truetype");
	font-weight: 500;
	font-style: Medium;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Regular.otf") format("truetype");
	font-weight: 400;
	font-style: Regular;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Light.otf") format("truetype");
	font-weight: 300;
	font-style: Light;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-ExtraLight.otf") format("truetype");
	font-weight: 200;
	font-style: ExtraLight;
}
@font-face {
	font-family: "MyFont";
	src: url("./fonts/Montserrat-Thin.otf") format("truetype");
	font-weight: 100;
	font-style: Thin;
}
* {
	margin: 0;
	padding: 0;
	font-family: "MyFont", "Times New Roman";
}
:root {
	font-size: 16px;
	--black-darkest: #000000;
	--black-darker: #101010;
	--black-dark: #121212;
	--greyest:#242424;
    --font-grey: #d3d3d3;
    --font-white: #ffffff;
	--font-black:#000000;
	--background-white:#ffffff;
	--button-white:#ffffff;

}
`;
