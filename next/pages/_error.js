import * as React from "react";
import Link from "next/link";

import LoginLayout from "./src/components/LoginLayout";
function CustomError({ statusCode }) {
    return (
        <LoginLayout>
      <div className="container vh-100" >
       
        <div className="d-flex align-items-center justify-content-center vh-100 flex-column">
          <h1>{statusCode}</h1>
          <Link href="/dashboard"><a>Back to Dashboard Page</a></Link>
        </div>
      </div>

     </LoginLayout>
    );
  }
  
  function getInitialProps({ res, err }) {
    let statusCode;
    // If the res variable is defined it means nextjs
    // is in server side
    if (res) {
      statusCode = res.statusCode;
    } else if (err) {
      // if there is any error in the app it should
      // return the status code from here
      statusCode = err.statusCode;
    } else {
      // Something really bad/weird happen and status code
      // cannot be determined.
      statusCode = null;
    }
    return { statusCode };
  }
  
  CustomError.getInitialProps = getInitialProps;
  
  export default CustomError;