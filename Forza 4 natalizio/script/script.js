document.getElementById("videonatale").style.display = "none";
document.getElementById("testoperso").style.display = "none";
document.getElementById("testovinto").style.display = "none";
document.getElementById("bottonefine").style.display = "none";     //Questi testi appaiono in caso di vincita, così all'inizio li nascondo
document.getElementById("Pandorovinto").style.display = "none";
document.getElementById("Panettonevinto").style.display = "none";

alert("Benvenuto al Forza 4 Natalizio!!!")

let game;

while(game!="No")
{
    game = prompt("Scrivere Si se si vuole fare una partita contro un bot o No se si vuole fare una partita in locale");
    if (game == "Si")
    {
        let bot;          //Inserisco le variabili che mi servono per gestire il bot
        let teambot;
        break;                                                                                 
    }                                                                                                                                           
    else
    {
        if (game != "No")
        {
            alert("Si prega di inserire un valore corretto o scrivere i termini Si o No con la lettera maiuscola.")
        }
    }
}

let team = prompt("Team Pandoro o Panettone?"); 
let i; //I mi servirà per gestire i turni
const pandoro = "<img src=\"style/img/pandoro.jpg\">";   
const panettone = "<img src=\"style/img/panettone.jpg\">";
let inserisci;
let bottoni= [43,44,45,46,47,48,49] //Questo harray contiene gli id dei bottoni che serviranno poi al bot
let a;
let b;
let c;          //Queste variabili cambiano valore a seconda del bottone premuto, ogni bottone gestisce una colonna.
let d;
let e;
let f;

while(team!=pandoro)
{
    if(team == "Pandoro")
    {
        i = 0;
        bot = 1;
        teambot = panettone;
        break;
    }
    else
    {
        if(team == "Panettone")
        {
            i = 1;
            bot = 1;
            teambot = pandoro;
            break;
        }
        else
        {
            alert("Inserisci un team valido o riscrivilo utilizzando la 'P' maiuscola");
            team = prompt("Team Pandoro o Panettone?");
        }
    }
}

function riavvia()
{  
    window.location.reload();
}

const vincitore = [ [1, 2, 3, 4],[42, 41, 40, 39],[8, 9, 10, 11],[35, 34, 33, 32],[15, 16, 17, 18],[28, 27, 26, 25],[22, 23, 24, 25],[21, 18, 19, 18],[29, 30, 31, 32],[14, 13, 12, 11],[36, 37, 38, 39],[7, 6, 5, 4],[1, 8, 15, 22],[42, 35, 28, 21],
    [2, 9, 16, 23],[41, 34, 27, 20],[3, 10, 17, 24], [40, 33, 26, 19],[4, 11, 18, 25],[39, 32, 25, 18],[5, 12, 19, 26],[38, 31, 24, 17],[6, 13, 20, 27],[37, 30, 23, 16],[7, 14, 21, 28],[36, 29, 22, 15],[1, 9, 17, 25],[42, 34, 26, 18],[8, 16, 24, 32],
    [35, 27, 19, 11],[15, 23, 31, 39],[28, 20, 12, 4],[36, 30, 24, 18],[7, 13, 19, 25],[29, 23, 17, 11],[14, 20, 26, 32],[22, 16, 10, 4],[21, 27, 33, 39],[37, 31, 25, 19],[6, 12, 18, 24],[38, 32, 26, 20],[5, 11, 17, 23],[3, 11, 19, 27],[40, 32, 24, 16],
    [2, 10, 18, 26],[41, 33, 25, 17],[10, 18, 26, 34],[9, 17, 25, 33],[12, 18, 24, 30],[13, 19, 25, 31],[2, 3, 4, 5],[6, 5, 4, 3],[9, 10, 11, 12],[13, 12, 11, 10],[16, 17, 18, 19],[20, 19, 18, 17],[23, 24, 25, 26],[27, 26, 25, 24],[28, 29, 30, 31],
    [34, 33, 32, 31],[37, 38, 39, 40],[41, 40, 39, 38],[8, 15, 22, 29],[9, 16, 23, 30],[10, 17, 24, 31],[11, 18, 25, 32],[12, 19, 26, 33],[13, 20, 27, 34],[14, 21, 28, 35],
  ] //Questo doppio array contiene tutte le possibili combinazioni di vincita

function vinci()
{
    for(let index=0; index < 67 /*67 è il numero di combinazioni possibili*/; index++)
    {
        let punto1 = document.getElementById(vincitore[index][0]).innerHTML;
        let punto2 = document.getElementById(vincitore[index][1]).innerHTML;
        let punto3 = document.getElementById(vincitore[index][2]).innerHTML;
        let punto4 = document.getElementById(vincitore[index][3]).innerHTML; //Utilizzo index che indica il numero della cella che contiene l'array e poi con "1,2,3,4" controllo i valori all'interno dell'array. Creo 4 variabili che contengono il contenuto della cella con quell'id.
        //Con degli if controllo se gli id in html contengono l'immagine del pandoro o del panettone, poi controllo se la partita è contro il bot o no, nel primo caso controllo se la combinazione vincente appartiene al bot o al giocatore, e in caso dice al giocatore se ha vinto o perso. Nel secondo caso se la partita è locale il programma stabilirà il team che ha vinto. Poi a seconda del risultato faccio apparire le scritte nascoste ad inizio programma.
        if(punto1 == "<img src=\"style/img/panettone.jpg\">" && punto2 == "<img src=\"style/img/panettone.jpg\">" && punto3 == "<img src=\"style/img/panettone.jpg\">" && punto4 == "<img src=\"style/img/panettone.jpg\">" )
        {
            document.getElementById(vincitore[index][0]).innerHTML = "<img src=\"style/img/panettonedoro.jpg\">";
            document.getElementById(vincitore[index][1]).innerHTML = "<img src=\"style/img/panettonedoro.jpg\">"; //Nella riga vincente cambio l'immagine così da far capire all'utente qual'è.
            document.getElementById(vincitore[index][2]).innerHTML = "<img src=\"style/img/panettonedoro.jpg\">";
            document.getElementById(vincitore[index][3]).innerHTML = "<img src=\"style/img/panettonedoro.jpg\">";
            if (game == "No")
            {
                document.getElementById("Panettonevinto").style.display = "block";
                document.getElementById("bottonefine").style.display = "block";
            }
            else
            {
                if(teambot == panettone)
                {
                    document.getElementById("videonatale").style.display = "block";
                    document.getElementById("testoperso").style.display = "block"; 
                    document.getElementById("bottonefine").style.display = "block";
                    let popupvideo = document.getElementById("videonatale");
                    popupvideo.play();
                }
                else
                {
                    document.getElementById("testovinto").style.display = "block";
                    document.getElementById("bottonefine").style.display = "block";   
                }    
            }
        }
        if(punto1 == "<img src=\"style/img/pandoro.jpg\">" && punto2 == "<img src=\"style/img/pandoro.jpg\">" && punto3 == "<img src=\"style/img/pandoro.jpg\">" && punto4 == "<img src=\"style/img/pandoro.jpg\">" )
        {
            document.getElementById(vincitore[index][0]).innerHTML = "<img src=\"style/img/pandorodoro.jpg\">";
            document.getElementById(vincitore[index][1]).innerHTML = "<img src=\"style/img/pandorodoro.jpg\">";
            document.getElementById(vincitore[index][2]).innerHTML = "<img src=\"style/img/pandorodoro.jpg\">";
            document.getElementById(vincitore[index][3]).innerHTML = "<img src=\"style/img/pandorodoro.jpg\">";
            if (game == "No")
            {
                document.getElementById("Pandorovinto").style.display = "block";
                document.getElementById("bottonefine").style.display = "block";
            }
            else
            {
                if(teambot == pandoro)
                {
                    document.getElementById("videonatale").style.display = "block";
                    document.getElementById("testoperso").style.display = "block";
                    document.getElementById("bottonefine").style.display = "block";
                    let popupvideo = document.getElementById("videonatale");
                    popupvideo.play();
                }
                else
                {
                    document.getElementById("testovinto").style.display = "block";
                    document.getElementById("bottonefine").style.display = "block";
                }
            }           
        }   
    }
}

function bottone1()
{
    a = 7;
    b = 14; //Associo alle variabili il valore dell'id corrispondente a seconda della colonna
    c = 21;
    d = 28;
    e = 35;
    f = 42;
    Controlla();
}

function bottone2()
{
    a = 6;
    b = 13;
    c = 20;
    d = 27;
    e = 34;
    f = 41;
    Controlla();
}

function bottone3()
{
    a = 5;
    b = 12;
    c = 19;
    d = 26;
    e = 33;
    f = 40;
    Controlla();
}

function bottone4()
{
    a = 4;
    b = 11;
    c = 18;
    d = 25;
    e = 32;
    f = 39;
    Controlla();
}

function bottone5()
{
    a = 3;
    b = 10;
    c = 17;
    d = 24;
    e = 31;
    f = 38;
    Controlla();
}

function bottone6()
{
    a = 2;
    b = 9;
    c = 16;
    d = 23;
    e = 30;
    f = 37;
    Controlla();
}

function bottone7()
{
    a = 1;
    b = 8;
    c = 15;
    d = 22;
    e = 29;
    f = 36;
    Controlla();
}

function Controlla()
{
    if(i % 2 == 0) //Il valore di I stabilisce il turno, e poi a seconda del tuno il programma inserisce il pandoro o il panettone.
    {
        inserisci = pandoro;     
        i++;                  
        if (game == "Si")
        {
            bot++;
        }
    }
    else
    {
        inserisci = panettone;
        i++;
        if (game == "Si")
        {
           bot++;
        }
    }
    
    if(document.getElementById(a).innerHTML == "<img src=\"style/img/nogettone.jpg\">" ) //Con una serie di if il programma controlla le caselle valide per l'inserimento , se nessuna è valida il programma chiede di utilizzare una colonna valida.
    {
        document.getElementById(a).innerHTML = inserisci;
    }
    else
    {
        if(document.getElementById(b).innerHTML == "<img src=\"style/img/nogettone.jpg\">" )
        {
            document.getElementById(b).innerHTML = inserisci;
        }
        else
        {
            if(document.getElementById(c).innerHTML == "<img src=\"style/img/nogettone.jpg\">" )
            {
                document.getElementById(c).innerHTML = inserisci;
            }
            else
            {
                if(document.getElementById(d).innerHTML == "<img src=\"style/img/nogettone.jpg\">" )
                {
                    document.getElementById(d).innerHTML = inserisci;
                }
                else
                {
                    if(document.getElementById(e).innerHTML == "<img src=\"style/img/nogettone.jpg\">" )
                    {
                        document.getElementById(e).innerHTML = inserisci;
                    }
                    else
                    {
                
                        if(document.getElementById(f).innerHTML == "<img src=\"style/img/nogettone.jpg\">" )
                        {
                            document.getElementById(f).innerHTML = inserisci;
                        }
                        else
                        {
                            if(document.getElementById(f).innerHTML != "<img src=\"style/img/nogettone.jpg\">" )
                            {
                                alert("La colonna è piena, scegline un'altra");
                                i--;
                                if (game == "Si")
                                {
                                   bot--;
                                }
                                
                            }

                        }
                    }
                }
    
            }
        }   
    }

    if(bot % 2 == 0) //Se è il turno del bot, creo una variabile che casualmente sceglie l'id del bottone da premere.
    {    
        let random = Math.floor(Math.random() * bottoni.length);
        let gettonisopra = [42,41,40,39,38,37,36]; //questo harray contiene gli id delle caselle della riga in alto
        while(document.getElementById(gettonisopra[random]).innerHTML!="<img src=\"style/img/nogettone.jpg\">") //In caso la casella in alto sia piena, il programma genera l'id di un altro bottone da premere.
        {
            random = Math.floor(Math.random() * bottoni.length);
        }
        document.getElementById(bottoni[random]).click(); //con questo comando premo il bottone in html
    }
    vinci();
}









    

