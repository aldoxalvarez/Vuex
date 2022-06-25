import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')


extend('hierroRules', value => {
    if (value <= 100) {
      return true;
    }
  
    return 'Hierro debe de ser menor que 100%';
  });