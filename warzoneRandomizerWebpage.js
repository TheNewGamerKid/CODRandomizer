 // Type of Weapon Randomization

 let min_type = 1;
 let max_type = 8;

 // Primary Assult Rifle Class Randomization

 let min_ar = 1;
 let max_ar = 15;

 // Attachments for the Primary Randomization

 let min_a1 = 1;
 let max_a1 = 9;
 let min_a2 = 1;
 let max_a2 = 9;
 let min_a3 = 1;
 let max_a3 = 9;
 let min_a4 = 1;
 let max_a4 = 9;
 let min_a5 = 1;
 let max_a5 = 9;
 let min_body = 1;
 let max_body = 7;
 let min_muzzle = 1;
 let max_muzzle = 8;
 let min_barrel = 1;
 let max_barrel = 8;
 let min_optic = 1;
 let max_optic = 14;
 let min_mag = 1;
 let max_mag = 8;
 let min_underbarrel = 1;
 let max_underbarrel = 8;
 let min_stock = 1;
 let max_stock = 8;
 let min_handle = 1;
 let max_handle = 8;
 let max_perks = 11;
 let min_perks = 1;

 function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }

  include("WRWPrimaryAr.js")
    

 
     // let primary_type = Math.floor(Math.random() * (max_type - min_type) + min_type)

     let primary_ar = Math.floor(Math.random() * (max_ar - min_ar) + min_ar)

     let primary_attachments1 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
     let primary_attachments2 = Math.floor(Math.random() * (max_a2 - min_a2) + min_a2)
     let primary_attachments3 = Math.floor(Math.random() * (max_a3 - min_a3) + min_a3)
     let primary_attachments4 = Math.floor(Math.random() * (max_a4 - min_a4) + min_a4)
     let primary_attachments5 = Math.floor(Math.random() * (max_a5 - min_a5) + min_a5)


     let body = Math.floor(Math.random() * (max_body - min_body) + min_body)
     let muzzle = Math.floor(Math.random() * (max_muzzle - min_muzzle) + min_muzzle)
     let barrel = Math.floor(Math.random() * (max_barrel - min_barrel) + min_barrel)
     let optic = Math.floor(Math.random() * (max_optic - min_optic) + min_optic)
     let mag = Math.floor(Math.random() * (max_mag - min_mag) + min_mag)
     let underbarrel = Math.floor(Math.random() * (max_underbarrel - min_underbarrel) + min_underbarrel)
     let stock = Math.floor(Math.random() * (max_stock - min_stock) + min_stock)
     let handle = Math.floor(Math.random() * (max_handle - min_handle) + min_handle)
     let perks =  Math.floor(Math.random() * (max_perks - min_perks) + min_perks)
 
/* let primary_smg = Math.floor(Math.random() * (max - min) + min)
let primary_shotgun = Math.floor(Math.random() * (max - min) + min)
let primary_lmg = Math.floor(Math.random() * (max - min) + min)
let primary_mk = Math.floor(Math.random() * (max - min) + min)
let primary_tcr = Math.floor(Math.random() * (max - min) + min)
let primary_sniper = Math.floor(Math.random() * (max - min) + min) */

