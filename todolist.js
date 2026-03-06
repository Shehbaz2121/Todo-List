 let tasksCount = 0;  
   function todoFunc(){
     tasksCount++;
    console.log(tasksCount)
     if (tasksCount >= 9){
        document.getElementById('addButt').style = 'display:none';
        document.getElementById('todo').value = '';    
    }   
    var tasks = document.getElementById('todo').value;
    document.getElementById('showTask').innerHTML += `<li>${tasks}</li>` ;  
    document.getElementById('todo').value = '';
   }