import * as React from "react";
import Head from "next/head";
import { deepOrange, grey } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {
  Box,
  TextField,
  Checkbox,
  Button,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const Home: React.FunctionComponent = () => {
  const query = useMediaQuery("(max-width: 991px)");
  return (
    <div>
      <Head>
        <title>Postman</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://kit.fontawesome.com/ae9bd935ec.js" defer></script>
      </Head>

      <React.Fragment>
        <CssBaseline />
        {query ? (
          <StyledContainer maxWidth="sm">
            <Box height="620px" padding="10px 20px">
              <Box
                width="100%"
                height="50px"
                display="flex"
                margin="10px 0"
                alignItems="center"
                justifyContent="space-between"
              >
                <h2 style={{ margin: "10px 0" }}>Create Account</h2>
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  <span style={{ color: "orange" }}>Sign in</span> and Instead?
                </label>
              </Box>
              <label style={{ fontSize: "13px", fontWeight: "bold" }}>
                Email
              </label>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
              />
              <label style={{ fontSize: "13px", fontWeight: "bold" }}>
                Username
              </label>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
              ></StyledTextField>
              <Box
                width="100%"
                height="10px"
                display="flex"
                justifyContent="space-between"
              >
                <label style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Password
                </label>
                <a style={{ color: "#ccc", cursor: "pointer" }}>SHOW</a>
              </Box>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
                type='password'
              ></StyledTextField>
              <Box
                width="100%"
                height="50px"
                display="flex"
                alignItems="center"
              >
                <StyledCheckBoxGrey
                  checked={false}
                  name="checkedB"
                  color="default"
                />
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  I agree to the{" "}
                  <span style={{ color: "orange" }}>Terms of Use</span> and{" "}
                  <span style={{ color: "orange" }}>Privacy Policy</span>
                </label>
              </Box>
              <Box
                width="100%"
                height="50px"
                display="flex"
                alignItems="center"
              >
                <StyledCheckBox
                  checked={true}
                  name="checkedB"
                  color="default"
                />
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Keep me signed in
                </label>
              </Box>
              <StyledButton variant="contained" color="primary" fullWidth>
                Create free account
              </StyledButton>
              <Box
                width="100%"
                height="20px"
                display="flex"
                justifyContent="center"
                margin="15px 0"
                alignItems='center'
              >
                <div style={{width:'150px', backgroundColor:'#eee', height:'2px'}}></div>
                <span style={{ color: "#999", margin:'0 10px', fontWeight:'bold' }}>or</span>
                <div style={{width:'150px', backgroundColor:'#eee', height:'2px'}}></div>
              </Box>
              <StyledButtonGoogle variant="contained" color="primary" fullWidth>
                <i
                  style={{ position: "absolute", left: "10px" }}
                  className="fab fa-google"
                ></i>
                Sign up with Google
              </StyledButtonGoogle>
            </Box>
          </StyledContainer>
        ) : (
          <StyledContainerDesktop maxWidth="md">
            <Box width="50%" height="100%" position="relative">
              <Typography
                component="div"
                style={{
                  background: "url(./postman.jpg)",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginTop: "0",
                  marginLeft: "0",
                  position: "absolute",
                  padding:'20px 0'
                }}
              >
                <Box
                  display="flex"
                  flexDirection='column'
                  alignItems='center'
                  width="100%"
                  height="auto"
                  justifyContent="center"
                  position='relative'
                >
                  <Typography
                    component="div"
                    style={{
                      background: "url(./logo.png)",
                      width: "250px",
                      height: "100px",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      marginTop: "0",
                      marginLeft: "0",
                    }}
                  >
                  </Typography>
                  <Typography
                    component="div"
                    style={{
                    width:'100%',
                    alignSelf:'center',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center'
                  }}
                >
                  <h2 style={{color: 'white', textAlign:'center'}}>Why Sign Up?</h2>
                  <ul style={{color:'white', opacity:'.95', fontSize:'13px', width:'400px'}}>
                    <li style={{margin:'10px 0'}}>Organize all your API development within Postman Workspaces</li>
                    <li style={{margin:'10px 0'}}>Sync Your Postman data across devices</li>
                    <li style={{margin:'10px 0'}}>Backup your data to the Postman cloud</li>
                    <li style={{margin:'10px 0'}}>It's free!</li>
                  </ul>
                </Typography>
                </Box>
              </Typography>
            </Box>
            <Box width="50%" height="100%">
              <Typography
                component="div"
                style={{
                  backgroundColor: "white",
                  height: "100%",
                  MozBackgroundSize: "contain",
                  padding:'20px'
                }}
              >
              <Box
                width="100%"
                height="50px"
                display="flex"
                margin="0"
                alignItems="center"
                justifyContent="space-between"
              >
                <h2 style={{ margin: "10px 0" }}>Create Account</h2>
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  <span style={{ color: "orange" }}>Sign in</span> and Instead?
                </label>
              </Box>
              <label style={{ fontSize: "11px", fontWeight: "bold" }}>
                Email
              </label>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
              />
              <label style={{ fontSize: "11px", fontWeight: "bold" }}>
                Username
              </label>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
              ></StyledTextField>
              <Box
                width="100%"
                height="10px"
                display="flex"
                justifyContent="space-between"
              >
                <label style={{ fontSize: "11px", fontWeight: "bold" }}>
                  Password
                </label>
                <a style={{ color: "#ccc", cursor: "pointer", fontSize:'12px' }}>SHOW</a>
              </Box>
              <StyledTextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                fullWidth
                type="password"
              ></StyledTextField>
              <Box
                width="100%"
                height="50px"
                display="flex"
                alignItems="center"
              >
                <StyledCheckBoxGrey
                  checked={false}
                  name="checkedB"
                  color="default"
                />
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  I agree to the{" "}
                  <span style={{ color: "orange" }}>Terms of Use</span> and{" "}
                  <span style={{ color: "orange" }}>Privacy Policy</span>
                </label>
              </Box>
              <Box
                width="100%"
                height="50px"
                display="flex"
                alignItems="center"
              >
                <StyledCheckBox
                  checked={true}
                  name="checkedB"
                  color="default"
                />
                <label style={{ fontSize: "12px", fontWeight: "bold" }}>
                  Keep me signed in
                </label>
              </Box>
              <StyledButton variant="contained" color="primary" fullWidth>
                Create free account
              </StyledButton>
              <Box
                width="100%"
                height="20px"
                display="flex"
                justifyContent="center"
                margin="15px 0"
                alignItems='center'
              >
                <div style={{width:'150px', backgroundColor:'#eee', height:'2px'}}></div>
                <span style={{ color: "#aaa", margin:'0 10px', fontWeight:'bold' }}>or</span>
                <div style={{width:'150px', backgroundColor:'#eee', height:'2px'}}></div>
              </Box>
              <StyledButtonGoogle variant="contained" color="primary" fullWidth>
                <i
                  style={{ position: "absolute", left: "10px" }}
                  className="fab fa-google"
                ></i> 
                Sign up with Google
              </StyledButtonGoogle>
              </Typography>
            </Box>
          </StyledContainerDesktop>
        )}
      </React.Fragment>

      <style jsx global>{`
        body {
          margin: 0;
          background-color: "white";
        }

        .labels {
          font-weight: bold;
          font-size: "10px";
        }
      `}</style>
    </div>
  );
};

const StyledContainer = withStyles({
  root: {
    backgroundColor: "white",
    height: "100vh",
  },
})(Container);

const StyledContainerDesktop = withStyles({
  root: {
    backgroundColor: "trnasparent",
    height: "100vh",
    display: "flex",
    padding: "10px 0",
  },
})(Container);

const StyledTextField = withStyles({
  root: {
    border: ".5px solid",
    borderColor: "#ddd",
    boxShadow: "none",
    margin: "10px 0",
    "&:hover fieldset": {
      borderColor: "orange !important",
    },
    "&:focus": {
      borderColor: "red !important",
    },
  },
})(TextField);

const StyledCheckBox = withStyles({
  root: {
    color: deepOrange[400],
    "&$checked": {
      color: deepOrange[600],
    },
  },
})(Checkbox);

const StyledCheckBoxGrey = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[600],
    },
  },
})(Checkbox);

const StyledButton = withStyles({
  root: {
    backgroundColor: "rgba(248, 82, 21, 0.76)",
    padding: "10px 0",
    boxShadow: "none",
    textTransform: "none",
    "&:hover ": {
      backgroundColor: "rgba(221, 69, 13, 0.76) !important",
    },
  },
})(Button);

const StyledButtonGoogle = withStyles({
  root: {
    position: "relative",
    backgroundColor: "rgba(10, 113, 197, 0.884)",
    padding: "10px",
    boxShadow: "none",
    display: "flex",
    textTransform: "none",
    "&:hover ": {
      backgroundColor: "rgba(7, 99, 173, 0.884) !important",
    },
  },
})(Button);

export default Home;
