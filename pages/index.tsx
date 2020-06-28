import * as React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const Home: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Postman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
        <Box display='flex'>
          <Typography
            component="div"
            style={{ background: "url(./images/hero.svg)", height: "100vh", width: "50%" }}
          />
          <Typography
            component="div"
            style={{ backgroundColor: "#000000", height: "100vh", width: "50%" }}
          />
        </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};


export default Home