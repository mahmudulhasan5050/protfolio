import { createMuiTheme } from '@material-ui/core/styles';


const myGreen = "#5aff3d"
export default createMuiTheme({
    palette:{
        common:{
            green: `${myGreen}`
        }
    },
    typography:{
       fontWidth:500
    }
})