var convertor = {}

convertor.ukrainian_fn = function () {

    var ukrainian = [];
    ukrainian['б'] = 'b';
    ukrainian['Б']='B';
    ukrainian['в']='vu';
    ukrainian['В']='Vu';
    ukrainian['г']='h';
    ukrainian['Г']='H';
    ukrainian['ґ']='g';
    ukrainian['Ґ']='G';
    ukrainian['д']='d';
    ukrainian['Д']='D';
    ukrainian['ж']='jh';
    ukrainian['Ж']='Jh';
    ukrainian['з']='ve';
    ukrainian['З']='Ve';
    ukrainian['й']='ye';
    ukrainian['Й']='Ye';
    ukrainian['к']='k';
    ukrainian['К']='K';
    ukrainian['л']='l';
    ukrainian['Л']='L';
    ukrainian['м']='m';
    ukrainian['М']='M';
    ukrainian['н']='n';
    ukrainian['Н']='N';
    ukrainian['п']='p';
    ukrainian['П']='P';
    ukrainian['р']='r';
    ukrainian['Р']='R';
    ukrainian['с']='s';
    ukrainian['С']='S';
    ukrainian['т']='t';
    ukrainian['Т']='T';
    ukrainian['ф']='f';
    ukrainian['Ф']='F';
    ukrainian['х']='chu';
    ukrainian['Х']='Chu';
    ukrainian['ц']='su';
    ukrainian['Ц']='Su';
    ukrainian['ч']='u';
    ukrainian['Ч']='Ču';
    ukrainian['ш']='sh';
    ukrainian['Ш']='Sh';
    ukrainian['щ']='shč';
    ukrainian['Щ']='Shč';
    ukrainian['а']='a';
    ukrainian['А']='A';
    ukrainian['е']='eh';
    ukrainian['Е']='Eh';
    ukrainian['и']='y';
    ukrainian['И']='Y';
    ukrainian['і']='ee';
    ukrainian['І']='Ee';
    ukrainian['о']='oh';
    ukrainian['О']='Oh';
    ukrainian['у']='ow';
    ukrainian['У']='Ow';
    ukrainian['є']='yeah';
    ukrainian['Є']='Yeah';
    ukrainian['ї']='yee';
    ukrainian['Ї']='Yee';
    ukrainian['ю']='you';
    ukrainian['Ю']='You';
    ukrainian['я']='ya';
    ukrainian['Я']='Ya';
    ukrainian['ь']='';
    ukrainian['Ь']='';

    var convert = function() {
        var string = $(".la-input").val();
        var newstring = "";
        for (var i = 0; i < string.length; i++) {
            if (ukrainian[string.charAt(i)]) {
                newstring += ukrainian[string.charAt(i)];
            } else {
                if (string.charAt(i) === " ") {
                    newstring += " ";
                } else {
                    newstring += "*";
                };
            };
        };
        $(".la-output").html(newstring);
    };
    return convert;
};

$(".la-input").on("change", function() {
    convertor.ukrainian_fn()();
});

$(".la-input").on("keyup", function() {
    convertor.ukrainian_fn()();
});
