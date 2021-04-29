// Xây hàm kiểm tra va chạm

function checkCrash(obj1, obj2) {
    let lef1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.height;
    let lef2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;
    if (lef1 > right2 || right1 < lef2 || top1 > bottom2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }
}


function checkCrashWithAllEnemie(){
    for (let i = 0; i < enemies.length; i++) {
       if( checkCrash(enemies[i],tank)){
           tank.blood -=10;
           enemies.splice(i,1);
           CheckLoser();
           break;
       }
    }
    for (let i = 0; i < boss.length; i++) {
        if(checkCrash(boss[i],tank)){
            tank.blood -=1;
            boss[i].blood -= 1;
            CheckLoser();
            break;
        }
    }
    for (let i = 0; i < airboss.length; i++) {
        if(checkCrash(airboss[i],tank)){
            tank.blood -=1;
            airboss[i].blood -= 1;
            CheckLoser();
            break;
        }
    }
}
