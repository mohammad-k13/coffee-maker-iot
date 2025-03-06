export default function sortListBy(list:any[],k:string,desc=false){

    return list.sort((a:any,b:any)=>a[k] > b[k] ? desc?-1:1:desc?1:-1 );
}
