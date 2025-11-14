
        <script>
        let num = document.getElementById("num");
        document.getElementById("nErr").textContent=num?"":" * invalid";
        const b=document.getElementById("btn");
            num.oninput = function() {
        let regex = /^(\(\d{3}\)\s?\d{3}\d{4}|\d{3}\d{3}\d{4})$/
        if(regex.test(num.value)) {
            msg.style.color = "green"
            msg.innerText = "Valid number"
        } else {
            msg.style.color = "red"
            msg.innerText = "Invalid number"
      }
      <script>
         num = document.getElementById("num");
        document.getElementById("nErr").textContent=num?"":" * invalid";
        const b=document.getElementById("btn");
            num.oninput = function() {
        let regex = /^(\(\d{3}\)\s?\d{3}\d{4}|\d{3}-\d{3}\d{4})$/
        if(regex.test(num.value)) {
            msg.style.color = "green"
            msg.innerText = "Valid number"
        } else {
            msg.style.color = "red"
            msg.innerText = "Invalid number"
        }
        let num = document.getElementById();
        if(test(mean.value)){
            if(num != -1){
                num.test = num/mean;
            }let
        } 
    }
  </script>
    }
  </script>
</body>
</html>