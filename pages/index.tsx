import type { NextPage } from "next";
import Head from "next/head";

import { styled } from "../stitches.config";

const Button = styled("button", {
  backgroundColor: "yellow",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "red",
  },
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>

      <h1>Dev server test</h1>

      <Button>Click me</Button>
    </div>
  );
};

export default Home;
