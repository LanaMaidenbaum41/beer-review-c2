var BeerAppReview = function(){
    var beers = [];
    function addBeer(name,category,rating){
        var beer = {
            name: name ,
            category: category,
            rating: rating
        };
        beers.push(beer);
        updateBeers();
    }

    function updateBeers(){
        $('.beers-list').empty();
    
        beers.forEach(function(beer){
            $('.beers-list').append('<li>'+beer.name+': '+beer.category+' ('+beer.rating+') </li>');
        });
    }

    function reverseListOrder(){
        beers.reverse();
        updateBeers();
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
    return {
        addBeer: addBeer,
        updateBeers: updateBeers,
        sortBeers: sortBeers,
        reverseListOrder: reverseListOrder
    }
}
var beerAppReview = BeerAppReview();

$('.post-beer').click(function(){
    var beerName = $('.beer-input').val();
    var beerCategory = $('.category-input').val();
    var beerRating = $('.rating').val();

    beerAppReview.addBeer(beerName,beerCategory,beerRating);

    $('.beer-input').val('');
    $('.category-input').val('');
    $('.rating').val('');
});

$('#sortButton').click(beerAppReview.sortBeers);

$('#reverseButton').click(beerAppReview.reverseListOrder);

$('#clearButton').click(function(){
    $('.beers-list').empty()}
);