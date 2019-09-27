task1 ={
    firstOfTask1: function (request, response)
    {
    const a = request.query["a"] ||1;
    if(a<1){
        response.send("a is not correct")
    }
    let a1 = 1/a;
    let a2 = Math.sin(a);
    if(a1>a2){
        response.send(" 1/a is greater than sin(a)")
    }
    
    response.send(" sin(a) is greater than 1/a")
        
    }
}
module.exports=task1;