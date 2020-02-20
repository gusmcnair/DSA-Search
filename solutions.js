//Main classes

class _Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
    }
    enqueue(data){
      const node = new _Node(data)
      if(this.first === null){
        this.first = node;
      }
      if(this.last){
        this.last.next = node;
      }
      this.last = node;
    }
  
    dequeue(){
      if(this.first === null){return;}
      const node = this.first;
      this.first = this.first.next;
      if(node === this.last){
        this.last = null;
      }
      return node.value;
    }
  }
  
  class BinarySearchTree {
      constructor(key = null, value = null, parent = null) {
          this.key = key;
          this.value = value;
          this.parent = parent;
          this.left = null;
          this.right = null;
      }
    insert(key, value){
      if(this.key == null){
        this.key = key;
        this.value = value;
      }
    
    else if(key < this.key){
  
      if(this.left == null){
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value)
      }
  
    } else {
      if(this.right == null){
        this.right = new BinarySearchTree(key, value, this)
      } else {
        this.right.insert(key, value)
      }
    }
  }
  find(key){
    if(this.key == key){
      return this.value;
    }
    else if(key < this.key && this.left){
      return this.left.find(key);
    }
    else if(key > this.key && this.right){
      return this.right.find(key);
    }
    else{throw new Error('Key Error')}
  }
  remove(key){
    if(this.key == key){
      if(this.left && this.right){
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key)
      }
      else if(this.left){
        this._replaceWith(this.left)
      }
      else if(this.right){
        this._replaceWith(this.right)
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left){
      this.left.remove(key);
    } else if (key > this.key && this.right){
      this.right.remove(key);
    } else {throw new Error('Key Error')}
  }
  preOrder(values=[]){
    values.push(this.value) 
    if(this.left){
      values = this.left.preOrder(values)
    }
    if(this.right){
      values = this.right.preOrder(values)
    }
    return values;
  }
  inOrder(values=[]){
    if(this.left){
      values = this.left.inOrder(values)
    }
    values.push(this.value)
    if(this.right){
      values = this.right.inOrder(values)
    }
    return values;
  }
  postOrder(values =[]){
    if(this.left){
      values = this.left.postOrder(values)
    }
    if(this.right){
      values = this.right.postOrder(values)
    }
      values.push(this.value);
      return values;
  }
  _replaceWith(node){
    if(this.parent){
      if(this == this.parent.left){
        this.parent.left = node;
      } else if (this == this.parent.right){
        this.parent.right = node;
      }
      if(node){
        node.parent = this.parent
      }
    } else {
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin(){
    if(!this.left){
      return this;
    }
    return this.left._findMin();
  }
  }


//1. Identify sequence of numbers with each recursive call.

/*
1. First call: [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. Second call: [3, 5, 6, 8, 11]
3. Third call: [6, 8, 11]
4. Fourth call: [8, 11]

1. First call: [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
2. Second call: [12, 14, 15, 17, 18]
3. Third call: [15, 17, 18]
4. Fourth call: [17, 18]
5. Fifth call: -1
*/



//2. Linear and binary search

//Linear:

    handleClick = (event) => {
        event.preventDefault();
        let numTicks = 0
        let currValue = document.getElementById('search').value
        for(let i = 0; i < dataset.length; i ++){
          numTicks ++
          if(dataset[i] == currValue){
            this.setState({
              first: numTicks,
              index: i
            })}}    
    
        document.getElementById('search').value = 0}

//Binary

handleClick = (event) => {
    event.preventDefault();
    let currValue = document.getElementById('search').value
      let sortedDataset = dataset.sort((a, b) => a - b)
      let valIndex = this.BinarySearch(sortedDataset, currValue)
      this.setState({
        first: ticks,
        index: valIndex
      })

    document.getElementById('search').value = 0}

BinarySearch = (array, value, start, end) => {
    ticks = ticks + 1
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length: end;

    if(start > end){return -1}

    const index = Math.floor((start + end)/2);
    const item = array[index];
    console.log(start, end)
    if(item == value){
      return index
    }
    else if(item < value){
      return this.BinarySearch(array, value, index + 1, end)
    }
    else if(item > value){
      return this.BinarySearch(array, value, start, index - 1)
    }
  }

  //Number of searches to find value '33': Linear 23, Binary 8



  //3. Find a book
  
  //I would go through the books from start to finish, continually checking the Dewey Dcimal number and title until I'd reached the correct place, then stopping when I got to the correct book.
  
  const books = [
    {
      dewey: "520",
      name: "The Great Gatsby"
    },
    {
      dewey: "525",
      name: "The Mediocre Gatsby"
    },
    {
      dewey: "532",
      name: "I'm Jonathan Safron Foer And I'm A Bad Writer"
    },
    {
      dewey: "540",
      name: "The Grape Gatsby"
    },
    {
      dewey: "580",
      name: "Kanye West: The Graphic Novel"
    },
    {
      dewey: "600",
      name: "Graphic Novel: The Kanye West Album"
    },
    {
      dewey: "605",
      name: "Donkeys: A Practical Guide"
    }
  ]
  
  const searchName = 'The Grape Gatsby'
  
  const searchDewey = 540
  
  function searchNames(books, searchName, searchDewey){
    for(let i = 0; i < books.length; i ++){
      if(searchName == books[i].name && searchDewey == books[i].dewey){
        return books[i]
      }
    }
  }
  
  console.log(searchNames(books, searchName, searchDewey))




  //4. Searching in a BST
  //a. 
  [14, 19, 15, 27, 25, 79, 90, 91, 89, 35]
  //b.
  [8, 6, 5, 7, 10, 9, 11]



  //5. Implement tree traversals:
  //See methods in tree class, above.



  //6. Find the next commanding offier

  function breadthSearch(tree){
    let values = []
    const queue = new Queue();
    queue.enqueue(tree);
    while(queue.first !== null){
      const node = queue.dequeue();
      values.push(node.value);
      if(node.left){
        queue.enqueue(node.left)
      }
      if(node.right){
        queue.enqueue(node.right)
      }
    } return values
  }



  //7. Max profit

let days = [128, 97, 121, 123, 98, 97, 105]
let currMax = 0
let buySell = ''

function findProfit(days){
  for(let i = 0; i < days.length - 1; i ++){
    for(let j = i; j < days.length; j ++){
      let currVal = days[j] - days[i]
      if(currVal > currMax){
        currMax = currVal
        buySell = `Buy on day ${i + 1}, sell on day ${j + 1}`
      }
    }
  } return buySell
}

findProfit(days)
  