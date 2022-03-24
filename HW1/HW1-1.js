class Lab1 {
  constructor(){
    this.nums = []
  }

transform(num){
  if(typeof num == 'number'){
    console.log(`Input Values: ${num}`)
    this.nums.push(num * num)
    this.nums.sort(function(a, b){return a-b});  
    
  }
  else 
    console.log('Error. Input is not an integer.')
}  
show(){
  console.log(`====================`)
  console.log(`Inputs squared and sorted in ascending order:`)
  console.log(this.nums)
}
}
  const my_lab = new Lab1()
  my_lab.transform('reg')
  my_lab.transform(4)
  my_lab.transform(9)
  my_lab.transform(5)
  my_lab.transform(3)
  my_lab.transform(8)
  my_lab.show()
  
