import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Hello" , "हरे कृष्ण!" , "नमस्कारम्", "પ્રણામ", "Bonjour" , "કેમ છો?"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};