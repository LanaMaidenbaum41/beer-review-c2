var beers = [];
//peoject exercise 1
function addBeer(name,category,rating){
    var beer = {
        name: name ,
        category: category,
        rating: rating
    };
    beers.push(beer);
    updateBeers();
}

$('.post-beer').click(function(){
    var beerName = $('.beer-input').val();
    var beerCategory = $('.category-input').val();
    var beerRating = $('.rating').val();

    addBeer(beerName,beerCategory,beerRating);

    $('.beer-input').val('');
    $('.category-input').val('');
    $('.rating').val('');
});



//project exercise 3
function updateBeers(){
    $('.beers-list').empty();

    beers.forEach(function(beer){
        $('.beers-list').append('<li>'+beer.name+': '+beer.category+' ('+beer.rating+') </li>');
    });
}

function sortBeers(){
    beers.sort(function(a,b){
        if(a.name > b.name){
            return 1;
        } else if(a.name < b.name){
            return -1;
        } else {
            return 0;
        }
    });
    updateBeers();
}
$('#sortButton').click(sortBeers);

//project exercise 4 extension - add the rating section
//project exercise 5 extension - add a function to reverse the order of the posted beers
function reverseListOrder(){
    beers.reverse();
    updateBeers();
}
$('#reverseButton').click(reverseListOrder);

$('#clearButton').click(function(){
    $('.beers-list').empty()}
);
    
