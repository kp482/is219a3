(function ($) {
    $('#homesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/homes",
        "columns": [
            { "data": "Sell" },
            { "data": "List" },
            { "data": "Living" },
            { "data": "Rooms" },
            { "data": "Beds" },
            { "data": "Baths" },
            { "data": "Age" },
            { "data": "Acres" },
            { "data": "Taxes" }

        ]
    } );

})(jQuery);