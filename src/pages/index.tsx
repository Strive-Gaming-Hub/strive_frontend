import Container from "@/app/components/Common/Container";
import React, { useEffect } from "react";
export default function Home({ setLoader = (t: boolean) => {} }) {
  useEffect(() => {
    setLoader(false);
    return () => {
      setLoader(true);
    };
  }, []);
  return (
    <>
      <Container
        height="6.5rem"
        title="First Container"
        content="Content for the first container goes here..."
      />
      <Container
        height="100%"
        title="Second Container"
        content="Content for the second container goes here..."
      />
    </>
  );
}
