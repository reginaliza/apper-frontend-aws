class Lab2
{
  constructor () 
  {
    this.top = null
  }

  push(element)
  {
    if (typeof element == 'string') {
      var node=new newNode(element)
    return node //returns inputs
    node.next=this.top
    this.top=node
    } else
      return
    
  }

  pop()
  {
    var temp=this.top
    this.top=this.top.next
    temp=null
  }

  check()
  {
    
      var temp=this.top
      while(temp!=null)
      {
        return temp.data // returns stack
        temp=temp.next
      }
  }

  peek()
  {
    var temp=this.top
    return temp.data // returns top element
  }
  
}
  
class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}
const stack = new Lab2()
stack.push(11) //will not be added to stack because stack only accepts strings
stack.push(`reg`)
stack.push(`regina`)
stack.push(`diloy`)
stack.push(55) //will not be added to stack because stack only accepts strings
stack.push(`gcash`)
//stack: gcash, diloy, regina, reg

stack.pop() //gcash is removed from stack
stack.check() //stack is now diloy, regina, reg
stack.peek() //top of stack is diloy