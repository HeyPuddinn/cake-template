const $formTable = $('.quote__form--place-table');
const $formTableCountry = $('.quote__form--place-table-country');
const $formTableSelectBox = $('.quote__form--selectBox-table')
const $formList = $('.quote__form--place-list');
const $formListCountry = $('.quote__form--place-list-country');
const $formListSelectBox = $('.quote__form--selectBox-list');
const $currentValue = $('.quote__form--place-current');
const $currentValueCountry = $('.quote__form--place-country-current');
const $currentValueSelectBox = $('.quote__form--selectBox-current');
const $optionValue = $('.option');

// select option
$($formTable.on('click',() => {
    $formTable.toggleClass("open");

    $(document).on("click", function (e) {
        if ($(e.target).is(".quote__form--place-table") === false) {
            $(".quote__form--place-table").removeClass("open");
        }
    });
}))

$($formTableCountry.on('click',() => {
    $formTableCountry.toggleClass("open");

    $(document).on("click", function (e) {
        if ($(e.target).is(".quote__form--place-table-country") === false) {
            $(".quote__form--place-table-country").removeClass("open");
        }
    });
}))

$($formTableSelectBox.on('click',() => {
    $formTableSelectBox.toggleClass("open");

    $(document).on("click", function (e) {
        if ($(e.target).is(".quote__form--selectBox-table") === false) {
            $(".quote__form--selectBox-table").removeClass("open");
        }
    });
}))



$($formList).on('click', 'li', function(){
    $currentValue.text($(this).text());
});
$($formListCountry).on('click', 'li', function(){
    $currentValueCountry.text($(this).text());
});
$($formListSelectBox).on('click', 'li', function(){
    $currentValueSelectBox.text($(this).text());
});