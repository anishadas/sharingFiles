import { Paper, Typography, styled, createTheme, } from "@mui/material";


export const MyPaper1 = styled(Paper)(({ theme }) => ({
    backgroundColor:theme.palette.primary.light,
    display: "flex",
    padding: "2px 5px 0 5px",
    alignItems: "center",
    lineHeight: "20px",
    width: "80%",
    justifyContent:"center",
    lineBreak: "anywhere",
}))
   

export const MyTypography2 = styled(Typography)({
    color: "white",
    paddingLeft: "15px"
})



export const darkTheme = createTheme({
    palette: {
        primary: {
            light: "#005f69",
            main: "#445566",
            dark: "#778899",
            contrastText: "white"
        },
        secondary: {
            light: "#f0e6e6",
            main: "#c93434",
            dark: "#3c3c3c",
            contrastText: "#000"
        }
    }
});

darkTheme.typography.body1 = {
    paddingRight: "10px",
    fontSize: '0.7rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',

    },

};



export const MyPaper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: theme.palette.primary.light,
    textAlign: 'center',
    color: "white",
    lineHeight: '60px',
    height: "70%",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "30px",
    padding:"10px"
}));

export const MyTypography1 = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    display: "flex",
    alignItems: "center"
}))
   

export const MyTypography3 = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
}))
