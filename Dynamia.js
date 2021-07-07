//SOAL NO 1

let arr1 = [1,2,3,4,5]
let arr2 = [1,3,5,7,9]

let arr3 = arr1.concat(arr2)
arr3 = arr3.filter((item, i)=>{
    return (arr3.indexOf(item) == i)
})
console.log(arr3) //a

let arr4 = []
for(let i = 0 ; i < arr1.length ; i++){
    for(let j = 0 ; j < arr2.length ; j++){
        if(arr1[i] === arr2[j]){
            arr4.push(arr1[i])
        }
    }
}
console.log(arr4) //b


let arr5 = []
for(let i = 0 ; i < arr1.length ; i++){
    let flag = false
    for(let j = 0 ; j < arr2.length ; j++){
        if(arr1[i] === arr2[j]){
            flag = true
        }
    }
    if (flag === false){
        arr5.push(arr1[i])
    }
}
console.log(arr5) //c



//soal No 2
class bangunDatar {
    constructor(panjang, diameter, alas, tinggi){
        this.panjang = 0
        this.diameter = 0
        this.alas = 0
        this.tinggi = 0
        this.jenisBangun
        this.kelilingPersegi 
        this.luasPersegi 
    }
    keliling(){
        if(this.jenisBangun === "persegi"){
            this.kelilingPersegi = this.panjang * 4
        }

    }
    luas (){
        if(this.jenisBangun === "persegi"){
            this.luasPersegi = this.panjang * this.panjang
        }
    }

}

class persegi extends bangunDatar {
    constructor(){
        super(3, 0, 0, 0)
        // this.kelilingPersegi = 0
        // this.luasPersegi = 0
        this.jenisBangun = "persegi"
    }
    keliling(){
        console.log(this.kelilingPersegi)
    }
    luas(){
      this.luasPersegi = this.panjang * this.panjang
    }

}

class lingkaran extends bangunDatar{
    constructor(){
        super(0, 6, 0, 0)
    }

}

class segitiga extends bangunDatar{
    constructor(){
        super(0, 0, 3, 2)
    }

}
