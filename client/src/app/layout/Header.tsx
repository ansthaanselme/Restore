import { AppBar, Switch, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    handleThemeChange:() => void;
}

export default function Header({darkMode, handleThemeChange} : Props) {
    return (
        <AppBar position="static" sx={{mb:4}}>
            
            <Typography variant="h6">
                RE-STORE         
            
            <Switch checked={darkMode} onChange={handleThemeChange} />
            </Typography>
            

        </AppBar>
    )
}