$(document).ready(()=>{
  
    var nodes = document.querySelectorAll('.needs_to_be_rendered');
    // use render method to render nodes in real time
    timeago.render(nodes, 'en_US');
    
    // cancel all real-time render task
   // timeago.cancel();
    
    // or cancel for the specific one
  //  timeago.cancel(nodes[0])
})