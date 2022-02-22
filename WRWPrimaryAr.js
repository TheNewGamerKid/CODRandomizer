
 function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }

  include("WRWFara83.js")
  include("WRWKrig6.js")
  include("WRWC58.js")
  include("WRWCR56Amax.js")
  include("WRWem2.js")
  include("WRWKilo141.js")
  include("WRWXm4.js")
  include("WRWGrau556.js")
  include("WRWM4a1.js")
  include("WRWM13.js")
  include("WRWFal.js")
  include("WRWColdWarAk47.js")
  include("WRWModernWarfareAk47.js")
  include("WRWFFAR.js")

function primaryAr() {

    document.getElementById("primaryAr").innerHTML ="Primary Assault Rifle: " + primary_ar;

    while (primary_attachments1 == primary_attachments2 || primary_attachments1 == primary_attachments3 || primary_attachments1 == primary_attachments4 || primary_attachments1 == primary_attachments5) {
        primary_attachments1 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    }

    while (primary_attachments2 == primary_attachments1 || primary_attachments2 == primary_attachments3 || primary_attachments2 == primary_attachments4 || primary_attachments2 == primary_attachments5) {
        primary_attachments2 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    }

    while (primary_attachments3 == primary_attachments1 || primary_attachments3 == primary_attachments2 || primary_attachments3 == primary_attachments4 || primary_attachments3 == primary_attachments5) {
        primary_attachments3 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    }

    while (primary_attachments4 == primary_attachments1 || primary_attachments4 == primary_attachments2 || primary_attachments4 == primary_attachments3 || primary_attachments4 == primary_attachments5) {
        primary_attachments4 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    }

    while (primary_attachments5 == primary_attachments1 || primary_attachments5 == primary_attachments2 || primary_attachments5 == primary_attachments3 || primary_attachments5 == primary_attachments4) {
        primary_attachments5 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    }

    if (primary_ar == 1) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: FARA 83";
        fara83();
    } else if (primary_ar == 2) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Krig 6";
        krig6();
    } else if (primary_ar == 3) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: C58";
        c58();
    } else if (primary_ar == 4) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: CR-56 AMAX";
        CR56Amax();
    } else if (primary_ar == 5) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: EM2";
        em2();
    } else if (primary_ar == 6) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Kilo 141";
        kilo141();
    } else if (primary_ar == 7) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: XM4";
        Xm4();
    } else if (primary_ar == 8) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Grau 5.56";
        Grau556();
    } else if (primary_ar == 9) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: M4A1";
        M4a1();
    } else if (primary_ar == 10) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: M13";
        M13();
    } else if (primary_ar == 11) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: FAL";
        Fal();
    } else if (primary_ar == 12) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Cold War AK-47";
        ColdWarAk47();
    } else if (primary_ar == 13) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Modern Warfare AK-47";
        ModernWarfareAk47();
    } else if (primary_ar == 14) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: FFAR";
        FFAR();
    } else if (primary_ar == 15) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: RAM-7";
    } else if (primary_ar == 16) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Groza";
    } else if (primary_ar == 17) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: QBZ-83";
    } else if (primary_ar == 18) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: AS VAL";
    } else if (primary_ar == 19) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: AN-94";
    } else if (primary_ar == 20) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: FN-Scar 17";
    } else if (primary_ar == 21) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: FR 5.56";
    } else if (primary_ar == 22) {
        document.getElementById("primaryAr").innerHTML ="Primary - Assault Rifle: Oden";
    }

    document.getElementById("attachments1").innerHTML = primary_attachments1
    document.getElementById("attachments2").innerHTML = primary_attachments2
    document.getElementById("attachments3").innerHTML = primary_attachments3
    document.getElementById("attachments4").innerHTML = primary_attachments4
    document.getElementById("attachments5").innerHTML = primary_attachments5

}