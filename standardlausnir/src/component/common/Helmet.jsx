import React from "react";
import { Helmet } from 'react-helmet'

export default function PageHelmet() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Standard lausnir</title>
        <meta name="description" content="Standardlausnir - Persónuleg og áreiðanleg tölvuþjónusta." />
      </Helmet>
    </React.Fragment>
  )
}
