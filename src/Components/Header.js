import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { purple } from '@material-ui/core/colors';
import "./Header.css";
import Button from "./Button";

export default function ButtonAppBar() {
  return(
    <div className="header">
      <div className="header-left">
      <h4 className="title">ILLITRATE</h4>
      </div>
      <div className="header-right">
      <Button buttonName="header-button" label="Login"/>
      </div>
    </div>

  );
}


