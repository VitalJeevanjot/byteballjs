 const client = new byteball.Client();
 client.api.getBots(function(err, result) {
   for(let i=0; i<result.length; i++)
   {
      $('#bots').append('<li><h2>'+ result[i].name +'</h2><p>'+ result[i].description +'</p><br></li>')
   }
 });
