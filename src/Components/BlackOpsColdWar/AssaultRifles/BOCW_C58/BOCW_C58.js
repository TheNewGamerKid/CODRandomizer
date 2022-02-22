function c58() {
    if (primary_attachments1 === 1 || primary_attachments2 === 1 || primary_attachments3 === 1 || primary_attachments4 === 1 || primary_attachments5 === 1) {
        if (muzzle == 1) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Muzzle Brake 7.62";
            
        }
        if (muzzle == 2) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Flashguard 7.62";
            
        }
        if (muzzle == 3) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Suppressor";
            
        }
        if (muzzle == 4) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Infantry Compensator";
            
        }
        if (muzzle == 5) {
            document.getElementById("muzzle").innerHTML ="Muzzle: SOCOM Eliminator";
            
        }
        if (muzzle == 6) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Agency Suppressor";
            
        }
        console.log("It worked")
    }
    if (primary_attachments1 === 2 || primary_attachments2 === 2 || primary_attachments3 === 2 || primary_attachments4 === 2 || primary_attachments5 === 2) {
        max_body++
        body = Math.floor(Math.random() * (max_body - min_body) + min_body)
        if (body == 1) {
            document.getElementById("body").innerHTML ="Body: Steady Aim Laser";
            
        }
        if (body == 2) {
            document.getElementById("body").innerHTML ="Body: Mounted Flashlight";
            
        }
        if (body == 3) {
            document.getElementById("body").innerHTML ="Body: SOF Target Designator";
            
        }
        if (body == 4) {
            document.getElementById("body").innerHTML ="Body: SWAT 5mw Laser Light";
            
        }
        if (body == 5) {
            document.getElementById("body").innerHTML ="Body: Tiger Team Spotlight";
            
        }
        if (body == 6) {
            document.getElementById("body").innerHTML ="Body: Ember Sighting Point";
            
        }
        max_body--
        body = Math.floor(Math.random() * (max_body - min_body) + min_body)
        console.log("It worked")  
    }
    if (primary_attachments1 === 3 || primary_attachments2 === 3 || primary_attachments3 === 3 || primary_attachments4 === 3 || primary_attachments5 === 3) {
        if (barrel == 1) {
            document.getElementById("barrels").innerHTML ="Barrels: 15.6\" Ultralight";
            
        }
        if (barrel == 2) {
            document.getElementById("barrels").innerHTML ="Barrels: 15.2\" Calvary Lancer";
            
        }
        if (barrel == 3) {
            document.getElementById("barrels").innerHTML ="Barrels: 18.7\" Reinforced Heavy";
            
        }
        if (barrel == 4) {
            document.getElementById("barrels").innerHTML ="Barrels: 18.7\" Ranger";
            
        }
        if (barrel == 5) {
            document.getElementById("barrels").innerHTML ="Barrels: 18.2\" Takedown";
            
        }
        if (barrel == 6) {
            document.getElementById("barrels").innerHTML ="Barrels: 18.5\" Task Force";
            
        }
        console.log("It worked") 
    }
    if (primary_attachments1 === 4 || primary_attachments2 === 4 || primary_attachments3 === 4 || primary_attachments4 === 4 || primary_attachments5 === 4) {
        if (optic == 1) {
            document.getElementById("optic").innerHTML ="Optics: Millstop Reflex";
            
        }
        if (optic == 2) {
            document.getElementById("optic").innerHTML ="Optics: Visiontech 2x";
            
        }
        if (optic == 3) {
            document.getElementById("optic").innerHTML ="Optics: Kobra Red Dot";
            
        }
        if (optic == 4) {
            document.getElementById("optic").innerHTML ="Optics: Quickstop LED";
            
        }
        if (optic == 5) {
            document.getElementById("optic").innerHTML ="Optics: Axial Arms 3x";
            
        }
        if (optic == 6) {
            document.getElementById("optic").innerHTML ="Optics: Sillix Holoscout";
            
        }
        if (optic == 7) {
            document.getElementById("optic").innerHTML ="Optics: Microflex LED";
            
        }
        if (optic == 8) {    
            document.getElementById("optic").innerHTML ="Optics: Hangman RF";
            
        }
        if (optic == 9) {
            document.getElementById("optic").innerHTML ="Optics: Royal & Cross 4x";
            
        }
        if (optic == 10) {
            document.getElementById("optic").innerHTML ="Optics: SUSAT Multizoom";
    
        }
        if (optic == 11) {
            document.getElementById("optic").innerHTML ="Optics: Diamondback Reflex";
            
        } 
        if (optic == 12) {
            document.getElementById("optic").innerHTML ="Optics: AN/PVS-4 Thermal";
            
        }
        console.log("It worked")
    }
    if (primary_attachments1 === 5 || primary_attachments2 === 5| primary_attachments3 === 5 || primary_attachments4 === 5 || primary_attachments5 === 5) {
        if (stock == 1) {
            document.getElementById("stock").innerHTML ="Stock: Tactical Stock";
            
        }
        if (stock == 2) {
            document.getElementById("stock").innerHTML ="Stock: Marathon Stock";
            
        }
        if (stock == 3) {
            document.getElementById("stock").innerHTML ="Stock: Duster Stock";
            
        } 
        if (stock == 4) {
            document.getElementById("stock").innerHTML ="Stock: CQB Stock";
            
        }
        if (stock == 5) {
            document.getElementById("stock").innerHTML ="Stock: Raider Stock";
            
        }
        if (stock == 6) {
            document.getElementById("stock").innerHTML ="Stock: SAS Combat Stock";
            
        }
        console.log("It worked") 
    }
    if (primary_attachments1 === 6 || primary_attachments2 === 6 || primary_attachments3 === 6 || primary_attachments4 === 6 || primary_attachments5 === 6) {
        if (handle == 1) {
            document.getElementById("handle").innerHTML ="Handle: Speed Tape";
            
        }
        if (handle == 2) {
            document.getElementById("handle").innerHTML ="Handle: Dropshot Wrap";
            
        }
        if (handle == 3) {
            document.getElementById("handle").innerHTML ="Handle: Field Tape";
            
        }
        if (handle == 4) {
            document.getElementById("handle").innerHTML ="Handle: SASR Jungle Wrap";
            
        }
        if (handle == 5) {
            document.getElementById("handle").innerHTML ="Handle: Serpant Wrap";
            
        }
        if (handle == 6) {
            document.getElementById("handle").innerHTML ="Handle: Airborne Elastic Wrap";
            
        }
        console.log("It worked")
    }
    if (primary_attachments1 === 7 || primary_attachments2 === 7 || primary_attachments3 === 7 || primary_attachments4 === 7 || primary_attachments5 === 7) {
        if (mag == 1) {
            document.getElementById("mag").innerHTML ="Magazine: 35 Rd Drum Mag";
            
        }
        if (mag == 2) {
            document.getElementById("mag").innerHTML ="Magazine: Jungle-Style Mags";
            
        }
        if (mag == 3) {
            document.getElementById("mag").innerHTML ="Magazine: 25 Rd Speed Mags";
            
        }
        if (mag == 4) {
            document.getElementById("mag").innerHTML ="Magazine: STANAG 60 Rd Drum";
            
        }
        if (mag == 5) {
            document.getElementById("mag").innerHTML ="Magazine: SAS Mag Clamp";
            
        }
        if (mag == 6) {
            document.getElementById("mag").innerHTML ="Magazine: Salvo 30 Rd Fast Mag";
            
        }
        console.log("It worked")
    }
    if (primary_attachments1 === 8 || primary_attachments2 === 8 || primary_attachments3 === 8 || primary_attachments4 === 8 || primary_attachments5 === 8) {
        if (underbarrel == 1) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Foregrip";
            
        }
        if (underbarrel == 2) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Infiltrator Grip";
            
        }
        if (underbarrel == 3) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Patrol Grip";
            
        }
        if (underbarrel == 4) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Bruiser Grip";
            
        }
        if (underbarrel == 5) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Field Agent Grip";
            
        }
        if (underbarrel == 6) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: SFOD Speedgrip";
            
        }
        console.log("It worked")
    } 
}