
function purchase(user, type, img=null, discount=null, model=null, expire=null, sneakerId=null) {

    let html;
    if (type === 'discount') {
        html=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,700&display=swap" rel="stylesheet">
            <title>Document</title>
        </head>
        <body class="bg-light">
          <style>
            .logo{
              margin: 1rem auto;
              background-color: black;
              width: 15rem;
              height: 4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              color: snow;
              border-radius: 1rem;
              font-size: 3rem;
              font-family: 'Fredoka', sans-serif;
            }
            .status{
              color: blueviolet;
              display: inline !important;
            }
            .img{
              display: block;
              margin:3rem auto;
              width: 20rem;
            }
            .btnn{
              display: block;
            }
            body{
              text-align: center;
            }
          </style>
            <div class="container">
              <div class="card my-10">
                <div class="card-body">
                  <h1 class="logo">Arcane</h1>
                  <h1 class="h2 mb-2">Hey! ${user} The sneaker ${model} has the <p class="h2 status">%${discount}</p> until ${expire}</h1>
                  <h5 class="text-teal-700">Run and buy just for a few time</h5>
                  <img class="img" src="${img}" alt="">
                  <a class="btn btn-outline-warning btnn" href="http://arcanesneakers.netlify.app/detail/${sneakerId}" target="_blank">See my order</a>
                </div>
              </div>
            </div>
          </body>
        </html>
        `
    }else{
        html=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400;1,500;1,700&display=swap" rel="stylesheet">
            <title>Document</title>
        </head>
        <body class="bg-light">
          <style>
            .logo{
              margin: 1rem auto;
              background-color: black;
              width: 15rem;
              height: 4rem;
              display: flex;
              justify-content: center;
              align-items: center;
              color: snow;
              border-radius: 1rem;
              font-size: 3rem;
              font-family: 'Fredoka', sans-serif;
            }
            .status{
              color: blueviolet;
              display: inline !important;
            }
            .img{
              display: block;
              margin:3rem auto;
              width: 20rem;
            }
            .btnn{
              display: block;
            }
            body{
              text-align: center;
            }
          </style>
            <div class="container">
              <div class="card my-10">
                <div class="card-body">
                  <h1 class="logo">Arcane</h1>
                  <h1 class="h2 mb-2">Hey! ${user} Your status order is <p class="h2 status">${type}</p></h1>
                  <h5 class="text-teal-700">You can see your status order in the Arcane web</h5>
                  <img class="img" src="https://i.postimg.cc/t4DC2dLv/logos.png" alt="">
                  <a class="btn btn-outline-warning btnn" href="http://arcanesneakers.netlify.app" target="_blank">See my order</a>
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