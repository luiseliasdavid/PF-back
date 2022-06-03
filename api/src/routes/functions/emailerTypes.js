try {
  function purchase(user, type) {
    return `<div>
            <a style="width: 20rem" href="https://imgur.com/GDmACyN"><img src="https://i.imgur.com/GDmACyN.png" title="source: imgur.com" /></a>
            <div style="display:block;">
                <div style="display:flex; justify-content:center; align-items: center;">
                <h1>${user}, your status order is ${type}!</h1></div>
            </div>
            <div style="display:flex; justify-content:center; align-items: center;">
                <h3 style="display:block">El vendedor ya despachó tu orden y va en camino.</h3>
            </div>
            <div style="display:flex; justify-content:center; align-items: center;">
                <h3 style="display:block">¡Esperamos que disfrutes tu compra!</h3>
            </div>
            <div style="display:flex; justify-content:flex-end">
                <p>Arcane eComerce</p>
            </div>
        </div>`;
  }
} catch (error) {
  console.log("Error fuction purchase");
}

module.exports = {
  purchase,
};
