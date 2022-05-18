---
title: "useState y lazy initialization"
date: "2022/05/18"
summary: "Aprende cómo y cuándo utilizar lazy initialization en useState para mejorar la performance de tus componentes en React."
image: "/images/lazyInitializationBanner.jpg"
subject: "React"
writtenBy: "Pablo Ramos"
minRead: "5"
tag: "React hooks"
---

El hook useState es una de las primeras cosas que aprendemos a la hora de manejar estados en React. Aquí un pequeño ejemplo:

```
function App() {
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || ""
  )
  
  React.useEffect(()=>{
    window.localStorage.setItem("name", name)
  })
  
  const handleChange = event => setName(event.target.value)
  
  return (
    <>
      <form>
        <input onChange={handleChange} />
        <h2>{name}</h2>
      </form>
    </>
  )
}
```

Al llamar useState nos devuelve un array con dos elementos: el valor del estado y una función con la cual podemos actualizar dicho valor, en este caso los llamamos name y setName respectivamente. Cuando llamamos a setName, le pasamos el nuevo valor que tendrá el estado (name) provocando un re-render del componente lo que lleva a que useState sea llamado de nuevo (para recuperar el nuevo valor del estado name) y también la función que lo actualiza (setName).


Algo importante que tenemos que saber del hook useState es que el valor inicial que le proveemos es importante para el render inicial del componente, pero luego es ignorado en los siguientes re-renders. Esto no es un problema si dicho valor es un valor primitivo, pero puede que tengamos el caso donde necesitemos que nuestro componente ejecute cierto código para obtener ese estado inicial.


Con lo anterior en mente, ahora sabemos que en el ejemplo de arriba estamos leyendo localStorage cada vez que el componente hace un re-render. Podemos ver todas las veces que esto ocurre si agregamos un console.log dentro del componente:

```
function App() {
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || ""
  )
  console.log("render")
    
  React.useEffect(()=>{
    window.localStorage.setItem("name", name)
  })
    
  const handleChange = event => setName(event.target.value)
  
    return (
    <>
      <form>
        <input onChange={handleChange} />
        <h2>{name}</h2>
      </form>
    </>
  )
}

```
![Without Lazy Initializiation.](/images/withoutLazyInitialization.gif "Without Lazy Initializiation")


Para combatir esto, el hook useState cuenta con una característica llamada lazy initialization donde simplemente lo que hacemos es proveer a useState de un función flecha como valor inicial. Esta función será llamada únicamente cuando sea absolutamente necesario recuperar el valor inicial, es decir, en el primer render. La documentación oficial de React nos dice que en aquellos casos donde tenemos que ejecutar cierto código costoso (expensive process), deberíamos hacerlo mediante lazy initialization.


Podemos checkear como mejora la performance de nuestro componente dándole cuerpo a dicha función flecha y agregándole un console.log:


```
  const [name, setName] = React.useState(()=> {
      console.log("hola")
      return window.localStorage.getItem("name") || ""
  })
```
![With Lazy Initializiation.](/images/withLazyInitialization.gif "With Lazy Initializiation")


De esta forma, podemos observar que "hola" sólo se llama una vez, en el primer renderizado, y no en los posteriores re-renders. Lo mismo ocurre con el llamado a localStorage, ya que no es necesario volverlo a llamar luego del primer render del componente.


### Conclusión


Espero que hayas aprendido por qué y cuándo utilizar lazy initialization con useState. Es útil para mejorar la performance de nuestros componentes, ya que se evita que se ejecute código que no es necesario en ciertos momentos del ciclo de vida del componente.