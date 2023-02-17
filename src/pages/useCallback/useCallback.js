import { useCallback } from 'react';

/*
El hook useCallback en React se utiliza para memorizar (almacenar en caché) una función, de modo que se evite su recreación en cada renderizado del componente, a menos que las dependencias que se le pasen cambien.

Se recomienda utilizar useCallback en las siguientes situaciones:

Pasar una función como prop a un componente hijo: si una función se crea dentro del cuerpo del componente, se recreará en cada renderizado, lo que puede causar una re-renderización innecesaria del componente hijo. Usando useCallback, la función se memoizará y sólo se recreará cuando las dependencias cambien.

Usar una función como dependencia de otro hook: Si se utiliza una función como dependencia en otro hook, cada vez que se cambie el estado del componente, esa función se volverá a crear. En este caso, es recomendable usar useCallback para evitar que la función se vuelva a crear en cada renderizado.

Optimizar el rendimiento de una función que se ejecuta con frecuencia: Si una función se ejecuta con frecuencia y no es necesario que se vuelva a crear en cada renderizado, useCallback puede ayudar a mejorar el rendimiento del componente.

Es importante tener en cuenta que useCallback no siempre es necesario. Solo debería usarse si se espera que la función que se memoiza cambie con menos frecuencia que el componente padre. Si la función cambia en cada renderizado, no hay necesidad de memoizarla.
 */

export default function UseCallback() {
  const print = useCallback(() => {
    console.log('estoy memorizado');
  }, []);

  return (
    <div>
      <h1>Callback</h1>
      <button onClick={print}>click me</button>
    </div>
  );
}
