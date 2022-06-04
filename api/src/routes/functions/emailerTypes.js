
function purchase(user, type, img = null, discount = null, model = null, expire = null, sneakerId = null) {

    let html;
    if (type === 'discount') {
        html = `
        <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body class="bg-light">
  
    <div class="container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;width: 90%;margin: 1rem auto;padding: 1rem;text-align: center;border-radius: 1rem;border: solid 3px rgba(167, 167, 167, 0.75);">
      <div class="card my-10">
        <div class="body">
          <h1 class="logo" style="margin: 1rem auto;background-color: black;text-align: center;width: 15rem;height: 4rem;display: flex;justify-content: center;align-items: center;color: snow;border-radius: 1rem;font-size: 3rem;font-family: 'Fredoka', sans-serif;">Arcane</h1>
          <h1 class="h2 mb-2">Hey!! the Sneaker ${model} has the </h1><p class="h2 status" style="color: blueviolet;display: inline !important;">%${discount} of discount </p>
          <h3 class="text-teal-700">only until ${expire} You can buy this en the next link</h3>
          <img class="img" src=${img} alt="" style="display: block;margin: 3rem auto;width: 20rem;">
          <a class="btn btn-outline-warning btnn" href="http://arcanesneakers.netlify.app/detail/${sneakerId}" target="_blank" style="display: block;">See my order</a>
        </div>
      </div>
    </div>
  </body>
  </html>
        `
    } else {
        html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body class="bg-light">
          
            <div class="container" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;width: 90%;margin: 1rem auto;padding: 1rem;text-align: center;border-radius: 1rem;border: solid 3px rgba(167, 167, 167, 0.75);">
              <div class="card my-10">
                <div class="body">
                  <h1 class="logo" style="margin: 1rem auto;background-color: black;text-align: center;width: 15rem;height: 4rem;display: flex;justify-content: center;align-items: center;color: snow;border-radius: 1rem;font-size: 3rem;font-family: 'Fredoka', sans-serif;">Arcane</h1>
                  <h1 class="h2 mb-2">Your status order is </h1><p class="h2 status" style="color: blueviolet;display: inline !important;">${type}</p>
                  <h3 class="text-teal-700">You can see your status order in the Arcane web</h3>
                  <img class="img" src="https://i.postimg.cc/t4DC2dLv/logos.png" alt="" style="display: block;margin: 3rem auto;width: 20rem;">
                  <a class="btn btn-outline-warning btnn" href="http://arcanesneakers.netlify.app" target="_blank" style="display: block;">See my order</a>
                </div>
              </div>
            </div>
          </body>
        </html>
        `
    }
  
  
  
    return html
  }
  module.exports = {
    purchase
  };