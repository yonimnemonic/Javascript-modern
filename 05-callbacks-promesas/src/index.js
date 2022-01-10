import { heroesCiclo, heroeIfAwait } from './js/await';
import { testPromise } from './js/test';

// heroesCiclo();


// heroeIfAwait('iron');


setTimeout(() => {
    testPromise('spider').then(console.table)
}, 2000);






