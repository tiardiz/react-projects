import Button from '@mui/material/Button';
//import ErrorIcon from '@mui/icons-material/Error';
import {styled} from '@mui/system';

export const BlueButton = styled(Button)(({theme})=>({
backgroundColor: theme === "light"? "yelllow" : "black",
margin: 6,
"&:hover": {backgroundColor: "red"}
}));