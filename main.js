$(document).ready(function(){
    $(".submit").on("click", handleSubmit)
})

function handleSubmit(event){
    var input = $(".form-control");
    var inputVal = input.val();
    input.val("");
    createListEntry(inputVal, isPro(inputVal) ? addProToList : addConToList);
}

function isPro(textContent){
    if(textContent.startsWith("PRO:")){
        return true;
    }
    return false;
}

function createListEntry(elementText, callback){
    var listEntryElem = $("<p>").text(elementText).on("click", toggleListEntry);
    callback(listEntryElem);
}

function addProToList($elem){
    $elem.css({color:"forestgreen"}).appendTo($("#pros"));
}

function addConToList($elem){
    $elem.css({color:"firebrick"}).appendTo($("#cons"));
}

function toggleListEntry({ currentTarget: elem }){
    var elemText = $(elem).text();
    var elemIsPro = isPro(elemText);
    $(elem).remove();
    elemText = `${elemIsPro ? "CON:" : "PRO:"}${elemText.slice(4)}`
    createListEntry(elemText, elemIsPro ? addConToList : addProToList);
}
