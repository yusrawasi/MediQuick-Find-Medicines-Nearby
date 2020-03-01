import axios from 'axios';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
// set up cookies
const cookies = new Cookies();
let serverUrl = 'http://localhost:3001';

export async function handleAuthSSR(ctx) {
  let token = null;

  // if context has request info aka Server Side
  if (ctx.req) {
    // ugly way to get cookie value from a string of values
    // good enough for demostration
    token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)user_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    // token = ctx.req.headers.cookie;
    console.log('server token', token);
    serverUrl = "http://nginx";

  }
  else {
    // we dont have request info aka Client Side
    token = cookies.get('user_token');
    console.log('client token', token);

  }

  const response = await axios.get(serverUrl+"/api/user", { headers: { 'Authorization': 'bearer '+token } });
    // dont really care about response, as long as it not an error
  console.log("token ping:", response.data);

  if(!response.data.user){
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/panel'
      })
      ctx.res.end()
    } else {
      Router.push('/panel')
    }
  }

  

  // try {
  //   const response = await axios.get("/api/user", { headers: { 'Authorization': 'bearer '+token } });
  //   // dont really care about response, as long as it not an error
  //   console.log("token ping:", response.data)
  // } catch (err) {
  //   // in case of error
  //   // console.log(err.response.data.msg);
  //   console.log("redirecting back to main page");
  //   // redirect to login
    // if (ctx.res) {
    //   ctx.res.writeHead(302, {
    //     Location: '/panel'
    //   })
    //   ctx.res.end()
    // } else {
    //   Router.push('/panel')
    // }
  // }
}