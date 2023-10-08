import palette from "./paletteTheme";
import { MuiPaper } from "./paper";
import { MuiTableCell } from "./tableCell";
import { MuiTableHead } from "./tableHead";
import { MuiTableRow } from "./tableRow";
import { MuiTypography, typography } from "./typographyTheme";

export const darkTheme = {
    palette, 
    typography,
    components : {
        MuiTypography,
        MuiTableRow,
        MuiTableCell,
        MuiTableHead,
        MuiPaper,
    },
}