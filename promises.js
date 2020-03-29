// * Promise in javascript is a function that needs time to be done such as API calls

// * this is a fake function that returns a promise which needs 1 second to excute
const fakeAPI = () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve("done");
    }, 1000)
  );

// * in the old ways people used to handle promises by then() and catch()
// * its a bad practice to do so now because it can be helish,
// * if there are multiple promises depeneding on each other
// * it means nesting

// * for example lets trying making 2 fakeAPIs, the second one must be called after the first is done.

fakeAPI().then(response => {
  fakeAPI().then(response => console.log(response));
});
// * nesting is ugly, really ugly if they increase in number,
// * and if we have functions that need to wait the response, we need to add them inside then

// * here comes a charming feature called async / away

// or const getData = async () => {}
async function getData() {
  try {
    const res = await fakeAPI();
    const res2 = await fakeAPI();
  } catch (error) {console.log(error)}
}
// * no nesting!! async await will block event loop from going on until the await is done
// * so we can list all the functions we want normally
