


let radius = process.argv.slice(2)*1;

function area(radius) {
    let area=Math.PI.toFixed(2)*radius**2;
    console.log(`Yarıçapı ${radius} olan dairenin alanı ${area}`);
}

area(radius)