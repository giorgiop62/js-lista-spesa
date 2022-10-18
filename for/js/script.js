/*Abbiamo un array di alimenti.
Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
Consegna:
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
*/

const arrayAlimenti = ['caffè','latte', 'zucchero', 'farina'];

var lista = document.getElementById('lista').innerHTML;

for(i = 0; i < arrayAlimenti.length; i++){

  console.log(arrayAlimenti[i]);
}