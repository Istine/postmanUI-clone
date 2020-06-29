import * as React from "react";
import Head from "next/head";
import { deepOrange } from '@material-ui/core/colors';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import { Box, TextField, Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Postman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <React.Fragment>
        <CssBaseline />
        <StyledContainer maxWidth="sm">
          <Box height="600px" border='1px solid #ccc' padding='0 20px'>
            <Box width='100%' height='100px' display='flex'>

            </Box>
          <label className='labels'>Email</label>
          <StyledTextField id="outlined-basic" variant="outlined" fullWidth />
          <label className='labels'>Username</label>
          <StyledTextField id="outlined-basic" variant="outlined" fullWidth />
          <label className='labels'>Password</label>
          <StyledTextField id="outlined-basic" variant="outlined" fullWidth />
          <Box width='100%' height='50px' display='flex'>
          <StyledCheckBox
            checked={true}
            name="checkedB"
            color="default"
          />
          <label></label>
            </Box>
          <Box width='100%' height='50px' display='flex'>
          <StyledCheckBox
            checked={true}
            name="checkedB"
            color="default"
          />
          <label></label>
            </Box>
          </Box>
        </StyledContainer>
      </React.Fragment>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 10px 0;
          background-color: 'white';
        }

        .labels {
          font-weight: bold;
          font-size: '11px';
        }
      `}</style>

    </div>
  );
};

const StyledContainer = withStyles({
  root: {
    backgroundColor: 'white'
  },
})(Container);

const StyledTextField = withStyles({
  root: {
    border: '.5px solid #ddd',
    boxShadow: 'none',
    margin: '10px 0'
  },
})(TextField);

const StyledCheckBox = withStyles({
  root: {
    color:deepOrange[400],
    '&$checked': {
      color: deepOrange[600],
  },
  }
})(Checkbox);



export default Home;