class Karatavas {
constructor(id){
    this.konteiners=document.getElementById(id);
   // console.log(this.konteiners);
    if (this.konteiners)
{    this.konteiners.innerHTML ="Jaunā spēle";
}
this.statuss=Karatavas.STATUSS_NEINICIALIZETS;
}
novakt(){
    let statuss=123; // tā nevajadzētu rakstīt
    console.log( "statuss=", statuss);
    console.log( "this.statuss=", this.statuss);
    if (this.statuss === Karatavas.STATUSS_NOVAKTS) return;
    if (this.konteiners){
        this.konteiners.innerHTML="";
    }
    delete this.konteiners;   
    this.statuss=Karatavas.STATUSS_NOVAKTS;
    }
}
/*
0= neinicializētā spēle
1= ir uzdots uzdevums
2= spēle beigusies ar uzvaru
3= spēle beigusies ar zaudējumu
9= spēle ir novākta no ekrāna
*/
if (this.statuss ==2) adfdf

//Statiskās propertijas
let STATUSS_NEINICIALIZETS; // 
Karatavas.STATUSS_NEINICIALIZETS =0; //neinicializētā spēle
Karatavas.STATUSS_SPELE =1; //ir uzdots uzdevums
Karatavas.STATUSS_UZVARA =2; //spēle beigusies ar uzvaru
Karatavas.STATUSS_SAGRAVE =3; //spēle beigusies ar zaudējumu
Karatavas.STATUSS_NOVAKTS =9; //spēle ir novākta no ekrāna