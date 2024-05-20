function initializeWeapons()
{
   weapons[0] = new weaponType("fist","fist","fistRun","",0,false,false,true,false,5,17,1,3,0); ## third value is the speed so 1
   weapons[1] = new weaponType("fist","fist","fistRun","",0,false,false,true,false,5,17,1,3,0); ## 1
   weapons[2] = new weaponType("bat","bat","batRun","Bat",2,false,false,true,false,19,20,0.9,1,45); ## 0.9
   weapons[3] = new weaponType("sword","swordRun","swordRun","Sword",1,false,false,true,false,8,12,1,3,30); ## 1
   weapons[4] = new weaponType("glock","glock","glockRun","Bullet",3,true,false,true,true,13,18,0.8,1,0); ## 0.8
   weapons[5] = new weaponType("ak47","ak47","ak47Run","Bullet",3,true,false,true,true,11,14,0.7,3,0); ## 0.7
   weapons[6] = new weaponType("shotgun","shotgun","shotgunRun","Shotgun",3,true,false,true,true,20,40,0.7,1,0); ## 0.7
   weapons[7] = new weaponType("sledge","sledge","sledgeRun","Sword",1,true,false,true,false,80,65,0.7,1,0); ## 0.7
   weapons[8] = new weaponType("flamethrower","flamethrower","flamethrowerRun","",0,false,false,true,true,11,15,0.75,1,0); ## 0.75
   weapons[9] = new weaponType("railgun","railgun","railgunRun","Shotgun",3,true,true,true,true,50,80,0.65,1,0); ## 0.65
   weapons[10] = new weaponType("chainsaw","chainsaw","chainsawRun","Sword",1,false,false,true,false,21,22,0.8,3,0); ## 0.8
   weapons[11] = new weaponType("lasersword","lasersword","laserswordRun","",0,false,false,true,false,10,15,1,3,30); ## 1
   weapons[12] = new weaponType("helmet","helmet","helmetRun","",0,false,false,true,false,6,13,0.9,1,0); ## 0.9
   weapons[13] = new weaponType("chaingun","chaingun","chaingunRun","Bullet",3,false,false,true,true,9,11,0.7,1,0); ## 0.7
   numWeapons = 14;
}
function weaponType(aa, ia, ra, ba, bv, pa, pal, au, r, d, rt, ws, v, dr, ktn, kt)
{
   this.attackAnim = aa;
   this.idleAnim = ia;
   this.runAnim = ra;
   this.bloodAnim = ba;
   this.bloodVariations = bv;
   this.particleAnim = pa;
   this.particleAnimLow = pal;
   this.automatic = au;
   this.range = r;
   this.damage = d;
   this.qxihXk = rt;
   this.walkingSpeed = ws;
   this.variations = v;
   this.deathRotation = dr;
   this.killTextNum = 0;
   this.killTextPre = new Array();
   this.killTextPost = new Array();
}
