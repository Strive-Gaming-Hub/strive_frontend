import Container from "@/app/components/Common/Container";
import React from "react";

export default function Home() {
  return (
    <>
      <Container
        showStories={true}
      />
      <Container
        height="100%"
        title="Games for you"
        showGames={true}
      />
    </>
  );
}
