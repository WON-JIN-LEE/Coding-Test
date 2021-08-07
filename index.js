function solution(cacheSize, cities) {
    const city = cities.map(ele=> ele.toLowerCase());
    const cityLen = city.length;
    let time = 0;
    let cache = [];
    
    if(cacheSize === 0) return 5*cityLen;
    
    for(let i = 0 ; i< cityLen; i++){
        
        if(cache.includes(city[i])){
            time +=1;
            cache.splice(cache.indexOf(city[i]), 1);
            cache.push(city[i]);
        }else{
            
            if(cache.length === cacheSize){ cache.shift(); }
            
            cache.push(city[i]);
            time +=5;
            
        }
    }
    
    return time;
}