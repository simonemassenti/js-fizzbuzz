### PROBLEMA

**Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.**

 ### SOLUZIONE
 - Impostiamo il ciclo for che va da 0 a 100;
 - Inizializziamo le variabili che conterranno il messaggio (Fizz, Buzz, FizzBuzz o il numero), e quella che conterrà la classe vuote.
 - Controlliamo il numero in base al contatore del ciclo:
 - SE il numero è divisibile per 3 ALLORA scriviamo nella variabile che conterrà il nome della classe e il messaggio: _Fizz_;
 - SE è divisibile per 5 ALLORA creiamo una concatenazione con la parola _Buzz_ (La concatenazione serve nel caso il nostro numero sia divisibile sia per 5 che per 3 e così verrà creata la stringa _FizzBuzz_);
 - SE non è divisibile nè per 5 e nè per 3 il messaggio sarà il numero del contatore e non verrà scritta nessuna classe.

Ad ogni ciclo, concateniamo all'interno di una variabile il nostro elemento HTML con la classe (se esiste) e il messaggio.

 ### OUTPUT
 Una volta terminato il ciclo, verrà stampata la variabile che contiene tutti i nostri elementi HTML concatenati nel documento HTML.