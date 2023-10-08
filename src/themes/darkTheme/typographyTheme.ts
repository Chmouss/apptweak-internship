//gere les variantes de texte

import { PRIMARY_COLOR, PRIMARY_COLOR_DARK } from "./colors"

export const typography = {
    allVariants: {
        fontFamily: 'Muli',
        margin: 0,

    },
    body2: {
        fontWeight: 'bold',
        fontSize: '1rem',
    }
}

//root apply a tout le monde, sinon specifier variante
export const MuiTypography = {
    styleOverrides: {
        root: {color:PRIMARY_COLOR},
        gutterBottom: {marginBottom: 30},
        h3: {fontWeight:"bold", fontSize:30},
        h4: {fontSize:20, color:PRIMARY_COLOR_DARK}
    }
}