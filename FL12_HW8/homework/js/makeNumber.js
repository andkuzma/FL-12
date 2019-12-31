function makeNumber(str){
  let StrNum = +(str.replace(/[^\d]/g, ''));
  if(StrNum === 0){
       return '';
  }
  return StrNum;
}
makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd'); 
makeNumber('ijifjgdj'); 