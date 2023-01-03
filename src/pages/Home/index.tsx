import React, { Fragment } from "react";
import { Button, Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-3xl  font-bold underline">Hello world!</h1>
      <Typography variant="h1">Material Tailwind</Typography>
      <Typography variant="h2">Material Tailwind</Typography>
      <Typography variant="h3">Material Tailwind</Typography>
      <Typography variant="h4">Material Tailwind</Typography>
      <Typography variant="h5">Material Tailwind</Typography>
      <Typography variant="h6">Material Tailwind</Typography>
      <Typography variant="lead">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
      <Typography variant="paragraph">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
      <Typography variant="small">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
      </Typography>
    </Fragment>
  );
}
