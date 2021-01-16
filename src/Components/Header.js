import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import { purple } from '@material-ui/core/colors';
import "./Header.css";

// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiAppBar-colorPrimary" :{
//         backgroundColor: "#312c51"        
//     },
//     "& .MuiAppBar-positionSticky" :{
//         position: "sticky"
//     },
//     flexGrow: 1,
//   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
//   title: {
//     flexGrow: 1,
//   },
  
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root} >
//       <div className="header">
//       <AppBar position="sticky">
//         <Toolbar>
//           <Typography variant="h6" className={classes.title}>
//             ILLITRATE
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//       </div>
//     </div>
//   );
// }

export default function ButtonAppBar() {
  return(
    <div className="header">
      <h4 className="title">ILLITRATE</h4>
      <button className="loginButton">Login</button>
    </div>

  );
}


