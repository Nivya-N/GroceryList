
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
           var response =JSON.parse( this.responseText);
        //    console.log(response);
            var list = response.list;
           // console.log(list[1].SlNo);
            var i;
            var output="";
            for (i=0;i<list.length;i++)
            {
                output += `<tr>
                <td>${list[i].SlNo}</td>
                <td>${list[i].Name}</td>
                <td>${list[i].Quantity}</td>
                <td>${list[i].Unit}</td>
                <td>${list[i].Department}</td>
                <td>${list[i].Notes}</td>
                </tr>`
            }
            document.getElementById("body").innerHTML = output;
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
