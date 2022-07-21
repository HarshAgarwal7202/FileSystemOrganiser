function helpFn(){
    console.log(`
    List of Commands:
        node main.js tree "directory Path"
        node main.js organize "directory Path"
        node main.js help 
         `);
}
module.exports={
    helpKey:helpFn
}