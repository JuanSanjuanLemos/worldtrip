import {extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{ 
    gray:{
        "900": "#47585B",
        "600": "#999999",
        "200": "rgba(153, 153, 153, 0.5)",
        "100": "#DADADA",
        "50": "#F5F8FA"
    },
    yellow:{
      "600": "#FFBA08",
      "300": "rgba(255, 186, 8, 0.5)"
    }
  },
  fonts:{
    heading:'Poppins',
    body:'Poppins'
  }
})