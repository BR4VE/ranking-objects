function Ranking(objArray,value,boolean){
    this.value = value;
    this.objArray = objArray;
    this.boolean = boolean;
    this.arrayLength = objArray.length;
    this.ranked = [];
    this.rank = function(){
        while(this.arrayLength >= 0){
            var biggest = 0;
            var indexOfBiggest = 0;
            for(var i = 0; i < this.objArray.length;i++){
                if(this.objArray[i] !== undefined){
                    if(this.objArray[i][this.value] > biggest){
                        biggest = this.objArray[i][this.value];
                        indexOfBiggest = i;
                    }
                }
            }
            if(biggest !== 0){
                this.ranked.push(this.objArray[indexOfBiggest]);
                this.objArray.splice(indexOfBiggest,1);

            }
            this.arrayLength -=1;
        }
        if(this.boolean){
            //do nothing
        }
        else{
            this.ranked.reverse();
        }
    }
    this.rank();
    
}

