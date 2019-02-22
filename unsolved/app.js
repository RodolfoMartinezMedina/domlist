const hideFunction = function(){
    $(".card").hide();
};

hideFunction();

const showFunction = function(){
    $("#input").show();
};

const viewFunction = function(){
    // $("employeeList")
    console.log("hi")
    $(".card").show();
};

const addCard = function(element){
    $(".card").append(`
    <div class='card-div'>
    <p>${element.name}</p>
    <p>${element.officeNum}</p>
    <p>${element.phoneNum}</p>
    </div>`)
}

employeeList.forEach(function(element){
    addCard(element)
})

$("#view").on("click", function(){
    viewFunction()
})


const addFunction = function(){
    addCard({
        "name": $("#name").val(),
        "phoneNum": $("#phone").val(),
        "officeNum": $("#office").val()
    })
}

$("#submit").on("click", function(){
    addFunction()
})

const delName = function(){
    name = $('#name').val();
    for (let i = 0; i < nodeList.length; i++){
      if (employeeList[i].name === name);
      employeeList.splice(i,1);
    }
    
    $('#delete').on("click", function(){
        delName();
    })
    
}