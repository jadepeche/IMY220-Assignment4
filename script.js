$(() => {
    $(".col div:first-child").addClass("name");
    $(".col div:nth-child(2)").addClass("surname");
    $(".col div:nth-child(3)").addClass("email");
    $(".col div:nth-child(4)").addClass("birth");

    $("body").on('click', 'div.details.name button', function()
    {
        var buttonText = $(this).text();
        if(buttonText == "Edit")
        {
            var name = $("div.details.name span").text();
            //override the html in the div - datatype from header and new button
            $("div.details.name").html('<div class="row"><div class="col-8"><input type="text" value='+name+'></input></div><div class="col-4"><button id="btnUpdate" class="btn btn-dark pull-right">Update</button></div></div>');     
        }
        else
        {
            var name = $("div.details.name input").val();
            $("div.details.name").html('<b>Name:</b> <span>'+name+'</span> <button class="btn btn-dark pull-right">Edit</button>');     
        }
        
    });

        


    $("body").on('click', 'div.details.surname button', function()
    {
        var buttonText = $(this).text();
        if(buttonText == "Edit")
        {
            var surname = $("div.details.surname span").text();
            //override the html in the div - datatype from header and new button
            $("div.details.surname").html('<div class="row"><div class="col-8"><input type="text" value='+surname+'></input></div><div class="col-4"><button id="btnUpdate" class="btn btn-dark pull-right">Update</button></div></div>');     
        }
        else
        {
            var surname = $("div.details.surname input").val();
            $("div.details.surname").html('<b>Surname:</b> <span>'+surname+'</span> <button class="btn btn-dark pull-right">Edit</button>');     
        }
        
    });

    $("body").on('click', 'div.details.email button', function()
    {
        var buttonText = $(this).text();
        if(buttonText == "Edit")
        {
            var email = $("div.details.email span").text();
            //override the html in the div - datatype from header and new button
            $("div.details.email").html('<div class="row"><div class="col-8"><input type="text" value='+email+'></input></div><div class="col-4"><button id="btnUpdate" class="btn btn-dark pull-right">Update</button></div></div>');     
        }
        else
        {
            var email = $("div.details.email input").val();
            $("div.details.email").html('<b>Email:</b> <span>'+email+'</span> <button class="btn btn-dark pull-right">Edit</button>');     
        }
        
    });

    $("body").on('click', 'div.details.birth button', function()
    {
        var buttonText = $(this).text();
        if(buttonText == "Edit")
        {
            var birth = $("div.details.birth span").text();
            //override the html in the div - datatype from header and new button
            $("div.details.birth").html('<div class="row"><div class="col-8"><input type="text" value='+birth+'></input></div><div class="col-4"><button id="btnUpdate" class="btn btn-dark pull-right">Update</button></div></div>');     
        }
        else
        {
            var birth = $("div.details.birth input").val();
            $("div.details.birth").html('<b>Birth date:</b> <span>'+birth+'</span> <button class="btn btn-dark pull-right">Edit</button>');     
        }
        
    });
    
});


