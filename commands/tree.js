function treeFn(dirpath){
    if(dirpath==undefined){
        treehelper(process.cwd(),"");
        return;
    }else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist){
            treehelper(dirpath,"");
        }else{
            console.log("kindly enter the correct path");
            return;
        }
    }
}
function treehelper(dirpath,indent){
    let isFile=fs.lstatSync(dirpath).isFile();
    if(isFile){
        let fileName=path.basename(dirpath);
        console.log(indent+"|-----"+fileName);
    }else{
        let dirName=path.basename(dirpath);
        console.log(indent+"---|"+dirName);
        let childrens=fs.readdirSync(dirpath);
        for(let i=0;i<childrens.length;i++){
            let childpath= path.join(dirpath,childrens[i]);
            treehelper(childpath,indent+"\t");
        }
    }
}
module.exports={
    treeKey:treeFn
}