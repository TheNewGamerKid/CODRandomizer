function ModernWarfareAk47() {
    max_a1 = max_a1 + 1
    primary_attachments1 = Math.floor(Math.random() * (max_a1 - min_a1) + min_a1)
    max_a2 = max_a2 + 1
    primary_attachments2 = Math.floor(Math.random() * (max_a2 - min_a2) + min_a2)
    max_a3 = max_a3 + 1
    primary_attachments3 = Math.floor(Math.random() * (max_a3 - min_a3) + min_a3)
    max_a4 = max_a4 + 1
    primary_attachments4 = Math.floor(Math.random() * (max_a4 - min_a4) + min_a4)
    max_a5 = max_a5 + 1
    primary_attachments5 = Math.floor(Math.random() * (max_a5 - min_a5) + min_a5)

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

    if (primary_attachments1 === 1 || primary_attachments2 === 1 || primary_attachments3 === 1 || primary_attachments4 === 1 || primary_attachments5 === 1) {
        if (muzzle == 1) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Muzzle Brake";
            
        }
        if (muzzle == 2) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Flash Guard";
            
        }
        if (muzzle == 3) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Tactical Suppressor";
            
        }
        if (muzzle == 4) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Lightweight Suppressor";
            
        }
        if (muzzle == 5) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Compensator";
            
        }
        if (muzzle == 6) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Bayonet";
            
        }
        if (muzzle == 7) {
            document.getElementById("muzzle").innerHTML ="Muzzle: Monolithic Suppressor";
            
        }
        console.log("It worked")
    }
    if (primary_attachments1 === 2 || primary_attachments2 === 2 || primary_attachments3 === 2 || primary_attachments4 === 2 || primary_attachments5 === 2) {
        max_body = max_body - 2
        body = Math.floor(Math.random() * (max_body - min_body) + min_body)
        //Body = Laser
        if (body == 1) {
            document.getElementById("body").innerHTML ="Laser: 5mw Laser";
            
        }
        if (body == 2) {
            document.getElementById("body").innerHTML ="Body: 1mw Laser";
            
        }
        if (body == 3) {
            document.getElementById("body").innerHTML ="Body: Tac Laser";
            
        }
        max_body = max_body + 2
        console.log("It worked")  
    }
    if (primary_attachments1 === 3 || primary_attachments2 === 3 || primary_attachments3 === 3 || primary_attachments4 === 3 || primary_attachments5 === 3) {
        max_barrel = max_barrel - 2
        barrel = Math.floor(Math.random() * (max_barrel - min_barrel) + min_barrel)
        if (barrel == 1) {
            document.getElementById("barrels").innerHTML ="Barrels: Spetsanz Elite";
            
        }
        if (barrel == 2) {
            document.getElementById("barrels").innerHTML ="Barrels: 23.0\" RPK Barrel";
            
        }
        if (barrel == 3) {
            document.getElementById("barrels").innerHTML ="Barrels: 8.1\" Compact Barrel";
            
        }
        if (barrel == 4) {
            document.getElementById("barrels").innerHTML ="Barrels: 23.0\" Romanian";
            
        }
        console.log("It worked")
        max_barrel = max_barrel + 2
    }
    if (primary_attachments1 === 4 || primary_attachments2 === 4 || primary_attachments3 === 4 || primary_attachments4 === 4 || primary_attachments5 === 4) {
        max_optic = max_optic + 8
        optic = Math.floor(Math.random() * (max_optic - min_optic) + min_optic)
        if (optic == 1) {
            document.getElementById("optic").innerHTML ="Optics: Cronen LP945 Mini Reflex";
            
        }
        if (optic == 2) {
            document.getElementById("optic").innerHTML ="Optics: Corp Combat Holo Sight";
            
        }
        if (optic == 3) {
            document.getElementById("optic").innerHTML ="Optics: Operator Reflex Sight";
            
        }
        if (optic == 4) {
            document.getElementById("optic").innerHTML ="Optics: Scout Combat Optic";
            
        }
        if (optic == 5) {
            document.getElementById("optic").innerHTML ="Optics: 4.0x Flip Hybrid";
            
        }
        if (optic == 6) {
            document.getElementById("optic").innerHTML ="Optics: Aim-Op Reflex Sight";
            
        }
        if (optic == 7) {
            document.getElementById("optic").innerHTML ="Optics: APX5 Holographic Sight";
            
        }
        if (optic == 8) {    
            document.getElementById("optic").innerHTML ="Optics: Integral Hybrid";
            
        }
        if (optic == 9) {
            document.getElementById("optic").innerHTML ="Optics: Solozero NVG Enhanced";
            
        }
        if (optic == 10) {
            document.getElementById("optic").innerHTML ="Optics: VLK 3.0x Optic";
    
        }
        if (optic == 11) {
            document.getElementById("optic").innerHTML ="Optics: Sniper Scope";
            
        } 
        if (optic == 12) {
            document.getElementById("optic").innerHTML ="Optics: Viper Reflex Sight";
            
        }
        if (optic == 13) {
            document.getElementById("optic").innerHTML ="Optics: G.I. Mini Reflex";
            
        }
        if (optic == 14) {
            document.getElementById("optic").innerHTML ="Optics: PBX Holo 7 Sight";
            
        }
        if (optic == 15) {
            document.getElementById("optic").innerHTML ="Optics: Cronen C480 Pro Optic";
            
        }
        if (optic == 16) {
            document.getElementById("optic").innerHTML ="Optics: Monocle Reflex Sight";
            
        }
        if (optic == 17) {
            document.getElementById("optic").innerHTML ="Optics: Variable Zoom Scope";
            
        }
        if (optic == 18) {
            document.getElementById("optic").innerHTML ="Optics: Canted Hybrid";
            
        }
        if (optic == 19) {
            document.getElementById("optic").innerHTML ="Optics: Merc Thermal Optic";
            
        }
        if (optic == 20) {
            document.getElementById("optic").innerHTML ="Optics: Thermal Hybrid";
            
        }
        max_optic = max_optic - 8
        console.log("It worked")
    }
    if (primary_attachments1 === 5 || primary_attachments2 === 5| primary_attachments3 === 5 || primary_attachments4 === 5 || primary_attachments5 === 5) {
        max_stock--
        stock = Math.floor(Math.random() * (max_stock - min_stock) + min_stock)
        if (stock == 1) {
            document.getElementById("stock").innerHTML ="Stock: Field LMG Stock";
            
        }
        if (stock == 2) {
            document.getElementById("stock").innerHTML ="Stock: Skeleton Stock";
            
        }
        if (stock == 3) {
            document.getElementById("stock").innerHTML ="Stock: No Stock";
            
        }
        if (stock == 4) {
            document.getElementById("stock").innerHTML ="Stock: FSS Close Quarters Stock";
            
        }
        if (stock == 5) {
            document.getElementById("stock").innerHTML ="Stock: FORGE TAC Ultralight";
            
        } 
        max_stock++
        console.log("It worked") 
    }
    if (primary_attachments1 === 6 || primary_attachments2 === 6 || primary_attachments3 === 6 || primary_attachments4 === 6 || primary_attachments5 === 6) {
        max_handle = max_handle - 3
        handle = Math.floor(Math.random() * (max_handle - min_handle) + min_handle)
        //handle = Rear Grip
        if (handle == 1) {
            document.getElementById("handle").innerHTML ="Rear Grip: Granulated Grip Tape";
            
        }
        if (handle == 2) {
            document.getElementById("handle").innerHTML ="Rear Grip: Rubberized Grip Tape";
            
        }
        if (handle == 3) {
            document.getElementById("handle").innerHTML ="Rear Grip: Stippled Grip Tape";
            
        }
        max_handle = max_handle + 3
        console.log("It worked")
    }
    if (primary_attachments1 === 7 || primary_attachments2 === 7 || primary_attachments3 === 7 || primary_attachments4 === 7 || primary_attachments5 === 7) {
        max_mag = max_mag - 3
        mag = Math.floor(Math.random() * (max_mag - min_mag) + min_mag)
        if (mag == 1) {
            document.getElementById("mag").innerHTML ="Magazine: 40 Round Mags";
            
        }
        if (mag == 2) {
            document.getElementById("mag").innerHTML ="5.45x39mm 30 Round Mags";
            
        }
        if (mag == 2) {
            document.getElementById("mag").innerHTML ="75 Round Drum Mags";
            
        }
        max_mag = max_mag + 3
        console.log("It worked")
    }
    if (primary_attachments1 === 8 || primary_attachments2 === 8 || primary_attachments3 === 8 || primary_attachments4 === 8 || primary_attachments5 === 8) {
        max_underbarrel = max_underbarrel + 7
        underbarrel = Math.floor(Math.random() * (max_underbarrel - min_underbarrel) + min_underbarrel)
        if (underbarrel == 1) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Commando Foregrip";
            
        }
        if (underbarrel == 2) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm High-Explosive";
            
        }
        if (underbarrel == 3) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm Incendiary";
            
        }
        if (underbarrel == 4) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: 12 Gauge Deputy";
            
        }
        if (underbarrel == 5) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Merc Foregrip";
            
        }
        if (underbarrel == 6) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm Smokescreen";
            
        }
        if (underbarrel == 7) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Tactical Foregrip";
            
        }
        if (underbarrel == 8) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm Recon";
            
        }
        if (underbarrel == 9) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm Flash";
            
        }
        if (underbarrel == 10) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Ranger Foregrip";
            
        }
        if (underbarrel == 11) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: M203 40mm Concussive";
            
        }
        if (underbarrel == 12) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Operator Foregrip";
            
        }
        if (underbarrel == 13) {
            document.getElementById("underbarrel").innerHTML ="Underbarrel: Bipod";
            
        }
        max_underbarrel = max_underbarrel - 7
        console.log("It worked")
    }if (primary_attachments1 === 9 || primary_attachments2 === 9 || primary_attachments3 === 9 || primary_attachments4 === 9 || primary_attachments5 === 9) {
        if (perks == 1) {
            document.getElementById("perks").innerHTML ="Perk: Heavy Hitter";
            
        }
        if (perks == 2) {
            document.getElementById("perks").innerHTML ="Perk: Recon";
            
        }
        if (perks == 3) {
            document.getElementById("perks").innerHTML ="Perks: Frangible - Wounding";
            
        }
        if (perks == 4) {
            document.getElementById("perks").innerHTML ="Perks: FMJ";
            
        }
        if (perks == 5) {
            document.getElementById("perks").innerHTML ="Perks: Sleight of Hand";
            
        }
        if (perks == 6) {
            document.getElementById("perks").innerHTML ="Perks: Fast Melee";
            
        }
        if (perks == 7) {
            document.getElementById("perks").innerHTML ="Perks: Frangible - Disabling";
            
        }
        if (perks == 8) {
            document.getElementById("perks").innerHTML ="Perks: Fully Loaded";
            
        }
        if (perks == 9) {
            document.getElementById("perks").innerHTML ="Perks: Mo' Money";
            
        }
        if (perks == 10) {
            document.getElementById("perks").innerHTML ="Perks: Presence of Mind";
            
        }
    }

    max_a1 = max_a1 - 1
    max_a2 = max_a2 - 1
    max_a3 = max_a3 - 1
    max_a4 = max_a4 - 1
    max_a5 = max_a5 - 1

}