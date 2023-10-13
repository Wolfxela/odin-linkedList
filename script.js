const nodeMaker = function()
{
    const value = null
    const next = null

    return {value,next}
}
function listMaker()
{
    let head = undefined;
    let tail = undefined;
    let currentNode = undefined;
    const appendNode = function(value)
    {
        let node = nodeMaker()
        node.value = value
        if(head == undefined)
        {
            head = node;
            currentNode = head

        }
        else
        {
            currentNode.next = node
            tail = node
            currentNode = node
        }
    }
    const prepend = function(value)
    {
        let node = nodeMaker()
        node.value = value
        if(head !== undefined)
        {
            node.next = head
        }
        head = node;


    }
    const getHead = function()
    {
        return head
    }
    const getTail = function()
    {
        return tail
    }
    const pop = function()
    {
        tail = at(getSize() - 1)
        if( tail.next !== null)
        {
            tail.next = null
        }
        else
        {
            head = null
        }
        

    }
    const at = function(index)
    {
        let node = head;
        for(let i = 0;i<index;i++)
        {
            if(node == null)
            {
                return console.error("index beyond list size")
            }
            else
            {
                node = node.next
            }
            
           
        }
        return node
        
    }
    const contains = function(value, node = head)
    {
        if(node.value === value)
        {
            return true
        }
        if(node.next == null || node == null)
        {
            return false
        }
        else
        {
            return contains(value,node.next)
        }
    }
    const getSize = function(node = head)
    {
        if(node == null)
        {
            return "no nodes exist"
        }
        else if(node.next == null)
        {
            return 0
        }
        else
        {
            let total = 1;
            return total += getSize(node.next)
        }
    }
    const find = function(value,node = head)
    {
        if(node == null ||node.next == null)
        {
            return null
        }
        else if(node.value === value)
        {
            return 0
        }
        else
        {
            let total = 1;
            return total += find(value,node.next)
        }
    }
    const insertat = function(index,value)
    {
        node = head;
        let createdNode = nodeMaker()
        createdNode.value = value

        if(index <= 0)
        {
            prepend(value)
            return
        }
        else if(index > getSize())
        {
            appendNode(value)
            return
        }
        

        for(let i = 0;i<index;i++)
        {
            if(i == index -1)
            {
                createdNode.next = node.next
                node.next = createdNode
                return
            }
            else
            {
                node = node.next
            }
            
           
        }
    }
    const deletefrom = function(index)
    {
        node = head;
        if(index >= getSize())
        {
            pop()
            return
        }
        

        for(let i = 0;i<index;i++)
        {
            if(i == index -1)
            {
                let nextnode = node.next
                node.next = nextnode.next
                nextnode = null
                return
            }
            else
            {
                node = node.next
            }
            
           
        }
    }
    const tostring = function(node = head)
    {
        if(node == null)
        {
            return "null"
        }
        else
        {
            return node.value + "--->" + tostring(node.next)
        }
    }
    return {appendNode,prepend,getHead,getTail,getSize,pop,at,contains,find,insertat,deletefrom,tostring}
}
//hasvalue

const list = listMaker()
list.appendNode("fox")
list.appendNode("box")
list.insertat(5,"owo")
// console.log(list.getSize())
// console.log(list.contains("owo"))
// console.log(list.find("owo"))
// console.log(list.at(0))
console.log(list.find("box"))

