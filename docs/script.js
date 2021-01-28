 lista = ["Ukończyć stronę", "Code Review" , "Dodanie na hosting"];
function wyswietl()
{
    let dane = document.getElementById("data").innerHTML='';
    lista.forEach((element)=>
    {
        document.getElementById("data").innerHTML=dane+"<div class='value'>"+element+"<div class='remove' onclick='remove("+'"'+element+'"'+")'></div></div>";
        dane = document.getElementById("data").innerHTML;
    }
    )
}
function add()
{
    let add = document.getElementById("text_area").value;
    if (add.length<=3 || lista.indexOf(add) !== -1)
    {
        alert("Nazwa musi zawierać conajmniej 4 znaki i powinna być unikalna!")
    }
    else
    {
    document.getElementById("text_area").value='';
    lista.push(add);
    wyswietl();
    }
}
function remove(a)
{
    a = lista.findIndex(element => element == a);
    lista.splice(a,1);
    wyswietl();
}
var char = 0;
var last_dane = 0;
function calculator(a)
{
    let dane = document.getElementById("calc_input").value;
    if (!isNaN(dane))
    {
    let result = 0;
    switch (a)
    {
        case 'C':
        document.getElementById("calc_input").value = '0';
        break;

        case '*':
        char = '*';
        last_dane = document.getElementById("calc_input").value;
        document.getElementById("calc_input").value = '0';
        break;

        case '-':
        char = '-';
        last_dane = document.getElementById("calc_input").value;
        document.getElementById("calc_input").value = '0';
        break;

        case '+':
        char = '+';
        last_dane = document.getElementById("calc_input").value;
        document.getElementById("calc_input").value = '0';
        break;

        case '/':
        char = '/';
        last_dane = document.getElementById("calc_input").value;
        document.getElementById("calc_input").value = '0';
        break;

        case '=':
        if (char!=0 && dane>0)
        {
        result = last_dane + char + dane;
        document.getElementById("calc_input").value = eval(result);
        char = 0;
        last_dane = 0;
        }
        break;

        default:
        if (dane ==0)
        document.getElementById("calc_input").value = a;
        else
        document.getElementById("calc_input").value = dane + a;
    }
    }
    else
    {
        document.getElementById("calc_input").value="Podales literę!"
        setTimeout(function(){ document.getElementById("calc_input").value=0 }, 3000);;
    }
}