import React from 'react';
import {CVFrontpage} from "./CVDoc";
import ReactPDF, {Font} from "@react-pdf/renderer";
import path from 'path'

Font.register({
	family: 'DefaultFont',
	fonts: [
		{ src: path.join(__dirname, '../../public/fonts/Montserrat-Regular.ttf')},
		{
      src: path.join(__dirname, '../../public/fonts/Montserrat-SemiBold.ttf'),
			fontWeight: 700
		},
		{
			src: path.join(__dirname, '../../public/fonts/Montserrat-Italic.ttf'),
			fontStyle: 'italic'
		}
	]
})

ReactPDF.render(
	<CVFrontpage/>,
	path.join(__dirname, '../../public/Martin_C_Dammrath_Software_Developer.pdf')
)



