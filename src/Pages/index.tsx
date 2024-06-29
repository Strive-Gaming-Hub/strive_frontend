import Container from "@/app/components/Common/Container";
import React from "react";

export default function Home() {
  return (
    <>
      <Container height="6.5rem" title="First Container" content="Content for the first container goes here..." />
      <Container  height="100%" title="Second Container" content="Content for the second container goes here..." />
    </>
  );
}
