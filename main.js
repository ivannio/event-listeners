console.log("main.js is linked");

const pies = [
    {
        type:'Pecan',
        image:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/4/27/1/WU0213H_pecan-pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382541369692.jpeg',
        instructorName:'zoee'
    },
    {
        type:'Pumpkin',
        image:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Traditional-Pumpkin-Pie_EXPS_CWON19_9287_E06_07_3b-1-696x696.jpg',
        instructorName:'zoee'
    },
    {
        type:'Chess',
        image:'https://cdn3.tmbi.com/toh/GoogleImagesPostCard/Lemon-Chess-Pie-with-Berry-Sauce_exps62599_TH2379801A07_25_6bC_RMS.jpg',
        instructorName:'michael'
    },
    {
        type:'Apple',
        image:'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/10/main/arkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg',
        instructorName:'michael'
    },
    {
        type:'Cake',
        image:'http://3.bp.blogspot.com/_cd6_MFUGTUE/TI-qhkYbt0I/AAAAAAAAAV8/wJHhnJVi8Lo/s1600/the_cake_is_a_lie_portal.jpg',
        instructorName:'callan'
    },
    {
        type:'Cherry',
        image:'http://images.meredith.com/bhg/images/recipe/p_R115287.jpg',
        instructorName:'callan'
    },
];

const printToDOM = (message, divID) => {
    document.getElementById(divID).innerHTML = message;
}

const piePrinter = (arr) => {
    let pieToPrint = '';
    for (let i = 0; i < arr.length; i++) {
        const pie = arr[i];
        pieToPrint += `
        <div class="pie-card">
        <h1>${pie.type}</h1>
        <img src="${pie.image}">    
        </div>
        `
    }  
    printToDOM(pieToPrint, "pie-div");  
}

const buttonClick = (e) =>{
    const instructor = e.target.id;
    const selectedPies = [];
    for (let i = 0; i < pies.length; i++) {
        const pie = pies[i];
        if (pie.instructorName === instructor) {
            selectedPies.push(pie);
        }        
    }
    piePrinter(selectedPies);
}

document.getElementById('zoee').addEventListener('click', buttonClick);
document.getElementById('michael').addEventListener('click', buttonClick);
document.getElementById('callan').addEventListener('click', buttonClick);

// document.getElementById('zoee').addEventListener('click', (e) =>{
//     const instructor = e.target.id;
//     const selectedPies = [];
//     for (let i = 0; i < pies.length; i++) {
//         const pie = pies[i];
//         if (pie.instructorName === instructor) {
//             selectedPies.push(pie);
//         }        
//     }
//     piePrinter(selectedPies);
// });
// document.getElementById('michael').addEventListener('click', (e) =>{
//     const instructor = e.target.id;
//     const selectedPies = [];
//     for (let i = 0; i < pies.length; i++) {
//         const pie = pies[i];
//         if (pie.instructorName === instructor) {
//             selectedPies.push(pie);
//         }        
//     }
//     piePrinter(selectedPies);
// });
// document.getElementById('callan').addEventListener('click', (e) =>{
//     const instructor = e.target.id;
//     const selectedPies = [];
//     for (let i = 0; i < pies.length; i++) {
//         const pie = pies[i];
//         if (pie.instructorName === instructor) {
//             selectedPies.push(pie);
//         }        
//     }
//     piePrinter(selectedPies);
// });
// // piePrinter(pies);