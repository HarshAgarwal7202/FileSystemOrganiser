#!/usr/bin/env node
let fs=require("fs");
let path=require("path");
// how to take input 
let input=process.argv.slice(2);
let helpObj=require("./commands/help");
let orgObj=require("./commands/organize")
let treeObj=require("./commands/tree");
// console.log(input);
let types={
    media:["mp4","mkv"],
    archives:['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','dmg','pkg','deb']
}

let command=input[0];
switch(command){
    case "tree":
        treeObj.treeKey(input[1]);
        break;
    case "organize":
        orgObj.orgKey(input[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("please input right command");
        break;
}






