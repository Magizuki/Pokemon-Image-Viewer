$('#imageSpinner').hide()
        
function searchPokemon()
{
    $('#imageSpinner').show()
    var pokemonName = document.getElementById("pokemonName").value

    if(pokemonName == "")
    {
        $('#imageSpinner').hide()
        alert("Field cannot be empty")
        return
    }
    $.ajax({
        type: 'GET',
        url:'https://pokeapi.co/api/v2/pokemon/' + pokemonName,
        success: function(data)
        {
            $('#imageSpinner').hide()
            $('#imageContainer').empty()
            console.log(data)
            //data = JSON.parse(data)
            console.log(data['sprites']['other']['official-artwork']['front_default'])
            if(data['sprites']['other']['official-artwork']['front_default'])
            {
                var image = "<img src='"+data['sprites']['other']['official-artwork']['front_default']+"' style='margin: auto; display:block;' alt='pokemonImage'>"
                $('#imageContainer').append(image)
                return
            }
            alert('Image Not Exist')
            },
        error: function()
        {
            $('#imageSpinner').hide()
            alert('Image Not Exist')
        }
    })
}       