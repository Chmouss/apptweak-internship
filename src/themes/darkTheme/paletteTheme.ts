import { PaletteMode } from "@mui/material";
import { BACKGROUND_COLOR, ERROR_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "./colors";

export const palette = {
    mode: 'dark' as PaletteMode,
    background: {default: BACKGROUND_COLOR},
    primary: {main:PRIMARY_COLOR},
    secondary: {main:SECONDARY_COLOR},
    error: {main:ERROR_COLOR},
};

export default palette;