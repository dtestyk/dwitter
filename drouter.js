module('drouter', [], function(imports){
  //var log = imports[0]
  
  is_arrays_equal = function(arr1, arr2){
    if(arr1.length !== arr2.length) return false
    for(var i=0; i<arr1.length; i++){
      if(arr1[i] !== arr2[i]) return false
    }
    return true
  }
  is_array_symmetric = function(arr){
    var rev_arr=arr.slice().reverse()
    return is_arrays_equal(arr, rev_arr)
  }

  return Promise.resolve(function(send, process, id, msg){
    var arr=msg.split(': ')
    var text=arr.pop()
    arr.unshift(id)

    var next = null
    var a = arr.slice()
    while(!is_array_symmetric(a)){
      next=a.pop()
    }
    //log('next', next)
    if(next) send(next, msg)
    else process(text)
  })
})