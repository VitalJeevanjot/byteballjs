 const client = new byteball.Client('wss://byteball.org/bb-test', true); // for test net client
 const wif = "92jcZ8iVfmAoipDCmNA4ummBYfuCv8YqBjjjhWo1G77foAtyPU8"; // Wif of sender account
 $('.btn').click(() => {
   if ($('#address').val() != "" && $('#amount').val() != "") {
     console.log($('#address').val() + " - " + $('#amount').val())
     const params = {
       outputs: [{
         address: $('#address').val(),
         amount: parseInt($('#amount').val())
       }]
     };
     client.post.payment(params, wif, function(err, result) {
              console.log("HEllo")
       if (!err) {

         $('#un_id').html(result);
         M.toast({
           html: 'Successfully transferred!'
         });
       }
       console.log(err, result);
     });
   } else {
     M.toast({
       html: 'Please enter address and amount correctly!'
     })
   }
 });
