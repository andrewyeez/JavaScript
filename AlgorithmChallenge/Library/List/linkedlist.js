function SinglyList(){
  this.size = 0;
  this.head = null;
  /**
   * [Node]
   *
   *  This is a Node object. It has two properties.
   *  1) Value -> is the value of the node
   *  2) Next -> will hold the next node
   *  A linked list is compromised of Nodes that are
   *  connected sequentially.
   *
   * @param  {[*]} value [value of the node]
   */
  this.node = function(value){
    this.value = value;
    this.next = null;
  }
  /**
   * [Add]
   *
   * Takes a parameter and uses it to initialize the value of a new NODE
   * Next we iterate through the Linked List and add the new NODE
   * to the tail of the Linked List
   *
   * @param  {[*]}          [Value to use to create the new NODE]
   * @return {[Node]}       [returns the node that was added]
   */
  this.add = function(value){
    var node = new this.node(value);
    if(!this.head){ this.head = node; }
    else{ this.tail().next = node; }
    this.size++;
    return node;
  }
  /**
   * [Tail]
   *
   * Iterate over the linked list and return the last node.
   * IF the user passes a parameter, the function will also output
   * the values of each node it passes
   *
   * @param  {[boolean]} output [IF there is a value entered,
   *                             the tail method will output
   *                             the values of the node ]
   * @return {[Node]}           [Returns the last node in the list]
   */
  this.tail = function(output){
    var currentNode = this.head;
    var output = output || false; // optional
    if(output){
      var count = 0;
      console.log("-----------------------------");
      console.log("Node "+count+": "+currentNode.value);
      while(currentNode.next){
        currentNode = currentNode.next;
        count++;
        console.log("Node "+count+": "+currentNode.value);
      }
      console.log("-----------------------------");
    }
    else{while(currentNode.next){ currentNode = currentNode.next; }}
    return currentNode;
  }
  /**
   * [Find By Value]
   *
   * Searches for the value given by the parameter.
   *
   * @param  {[*]} value   [value to look for]
   * @return {[Node]}      [Returns node that contains the value]
   */
  this.findByValue = function(value){
    var currentNode = this.head;
    while(currentNode){
      if(currentNode.value == value){ return currentNode; }
      currentNode = currentNode.next;
    }
    return false;
  }
  /**
   * [Find By Position]
   *
   * Searches for the position given by the parameter.
   *
   * @param  {[Number]}    [The position in the link to look for]
   * @return {[Node]}      [Returns the node of the position]
   */
  this.findByPosition = function(position){
    var currentPosition = 0;
    var currentNode = this.head;
    while(currentNode){
      if(currentPosition++ == position){ return currentNode; }
      currentNode = currentNode.next;
    }
    return false;
  }
}
