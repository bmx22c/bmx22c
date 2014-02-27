//Variables pour commandes
function procCmd(cmd)
{
var cmd = cmd.split(" ");


//Résultats commandes
if(cmd[0]=="MoBlocks")
{
addItemInventory(189,64);
addItemInventory(190,64);
addItemInventory(191,64);
addItemInventory(192,64);
addItemInventory(120,64);
clientMessage("Mo'Blocks added to your inventory.");
}
}





//Block emeraude
var initialized = false; 
var b_emerald= 189; 
function selectLevelHook() { 

//--------

if (!initialized) 
{ 

//--------		

Block.defineBlock(b_emerald, "Emerald block", 			[
["emerald_block", 0],
["emerald_block", 0], 			
["emerald_block", 0], 
["emerald_block", 0],
["emerald_block", 0], ["emerald_block", 0]]);

//--------	

Block.setShape(b_emerald, 0, 0, 0, 1, 1, 1); 		
Block.setDestroyTime(b_emerald, 0.5); 		
initialized = true;
   }
} 
//Fin block emeraude






//Redstone block
var initialized = false; 
var b_redstone= 190; 
function selectLevelHook() { 

//----------

if (!initialized) 
{ 

//----------

Block.defineBlock(b_redstone, "Redstone block", 			[
["redstone_block", 0],
["redstone_block", 0], 			
["redstone_block", 0], 
["redstone_block", 0],
["redstone_block", 0], ["redstone_block", 0]]);

//-----------		

Block.setShape(b_redstone, 0, 0, 0, 1, 1, 1); 		
Block.setDestroyTime(b_redstone, 0.5); 		
initialized = true;
   }
} 
//Fin redstone block





//Lampes redstone
function newLevel(){   

Block.defineBlock(120, "Redstone Lamp",[
["redstone_lamp_off", 0], 
["redstone_lamp_off", 0],   
["redstone_lamp_off", 0], 
["redstone_lamp_off", 0],   
["redstone_lamp_off", 0], 
["redstone_lamp_off", 0]]);  
Block.setShape(120, 0, 0, 0, 1, 4/4,1);  
Block.setDestroyTime(120,.25);  
  
Block.defineBlock(121, "Redstone Lamp",[
["redstone_lamp_on",0], 
["redstone_lamp_on",0],
["redstone_lamp_on",0], 
["redstone_lamp_on",0],   
["redstone_lamp_on",0], 
["redstone_lamp_on",0]]);
Block.setShape(121,0,0,0,1, 4/4,1);  
Block.setDestroyTime(121,.25);

}
function useItem(x,y,z,itemId,blockId){
if(blockId==120){
getTile(x,y,z);
setTile(x,y,z,121)
Block.setLightLevel(121,15);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);    
}else if(blockId==121){
getTile(x,y,z);
setTile(x,y,z,120)
Block.setLightLevel(120,0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
}}
//Fin lampes redstone





//Block de commande
var initialized = false; 
var b_command_block= 191; 
var currentWorkbenchX, currentWorkbenchY, currentWorkbenchZ;
var needToSwitchBack = false;
function selectLevelHook() { 

//--------

if (!initialized) 
{ 

//--------		

Block.defineBlock(b_command_block, "Command block", 			[
["command_block", 0],
["command_block", 0], 			
["command_block", 0], 
["command_block", 0],
["command_block", 0], 
["command_block", 0]]);

//--------	

Block.setShape(b_command_block, 0, 0, 0, 1, 1, 1); 		
Block.setDestroyTime(b_command_block, 2.0); 		
initialized = true;
   }
} 

//--------

function useItem(x, y, z, itemId, blockId, side) {
        if (blockId == b_command_block) {
                currentWorkbenchX = x;
                currentWorkbenchY = y;
                currentWorkbenchZ = z;
                setTile(x, y, z, 58);
                needToSwitchBack = true;
        }
}

//--------

function modTick() {
        if (needToSwitchBack) {
                needToSwitchBack = false;
                setTile(currentWorkbenchX, currentWorkbenchY, currentWorkbenchZ, b_command_block);
        }
}
//Fin command_block




//Table enchentement

var initialized = false; 
var b_enchantment_table_id= 192; 
var currentWorkbenchX, currentWorkbenchY, currentWorkbenchZ;
var needToSwitchBack = false;
function selectLevelHook() { 

//--------

if (!initialized) 
{ 

//--------		

Block.defineBlock(b_enchantment_table_id, "Table d'enchantement", 			[
["enchantment_table_bottom", 0],
["enchantment_table_top", 0], 			
["enchantment_table_side", 0], 
["enchantment_table_side", 0],
["enchantment_table_side", 0], 
["enchantment_table_side", 0]]);

//--------	

Block.setShape(b_enchantment_table_id, 0, 0, 0, 1, 3/4, 1); 		
Block.setDestroyTime(b_enchantment_table_id, 2.0); 		
initialized = true;
   }
} 

//--------

function useItem(x, y, z, itemId, blockId, side) {
        if (blockId == b_enchantment_table_id) {
                currentWorkbenchX = x;
                currentWorkbenchY = y;
                currentWorkbenchZ = z;
                setTile(x, y, z, 58);
                needToSwitchBack = true;
        }
}

//--------

function modTick() {
        if (needToSwitchBack) {
                needToSwitchBack = false;
                setTile(currentWorkbenchX, currentWorkbenchY, currentWorkbenchZ, b_enchantment_table_id);
        }
}
//Fin table d'enchantement
