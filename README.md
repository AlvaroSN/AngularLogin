# Log in
Despliegue: https://alvarosn.github.io/AngularLogin/sign-in

## Versiones
```
Angular CLI: 11.2.6
Angular CDK: 11.2.9
Angular material: 11.2.9
AngularFire: 6.1.4
Firebase: 9.11.0
```


## Base de datos y servicios
Para la base de datos he usado la plataforma online de Google Firebase, más concretamente con su apartado para la autentificación de usuarios; interactuando con este a través de un servicio de Angular (**AuthService**). En este servicio nos podemos encontrar con varios métodos para trabajar con la autenticación de Firebase: iniciar sesión, regitsrase, enviar un correo de verificación al registrarse, restaurar la contraseña a través de un correo, comprobar si el usuario en cuestión está logueado, actualizar los datos de un usuario cuando sea necesario y cerrar sesión.

También desarrollé otro servicio (**DataService**) para implemetar la comunicación entre componentes, con el que a través de [ChangeNameComponent](https://github.com/AlvaroSN/AngularLogin/tree/main/src/app/components/change-name) se puede editar el nombre que aprece en el [DashBoardComponent](https://github.com/AlvaroSN/AngularLogin/tree/main/src/app/components/dashboard)


## Componentes
La aplicación web cuenta con 6 componentes disintos:
* change-name: diálogo para cambiar el nombre mostrado en el component dashboard a través de la implementación mostrada en este [vídeo](https://www.youtube.com/watch?v=w5cCsoOs8SI&t=1s)   
* dashboard: componente principal mostrado al iniciar sesión, donde nos encontramos dos partes: menú implementado con [Angular Routing](https://github.com/AlvaroSN/AngularLogin/tree/main/src/app/shared/routing) y apartado donde se muestran los datos del usuario logueado
* forgot-password: componente para recuperar la contraseña de una cuenta, que realiza mediante un correo que se envía al perfil indicado, y este incluye un enlace que te permite cambiar la contraseña de la cuenta en cuestión 
* sign-in: primer componente en mostrarse, para iniciar sesión
* sign-up: componente para registrarse con un correo que aún no esté en la base de datos
* verify-email: componente que nos indica que se ha enviado el correo de verificación 

## Indicaciones de uso
* Al iniciar sesión hay que pulsar **dos veces** en el botón de iniciar sesión
* Para poder iniciar sesión correctamente, despúes de haberse registrado, hay que tener en cuenta dos aspectos: hay que **verificar el correo** mediante el enlace que se manda para poder iniciar sesión y después se recomienda **recargar** la página 
* El nombre de usuario, que se puede cambiar con el [ChangeNameComponent](https://github.com/AlvaroSN/AngularLogin/tree/main/src/app/components/change-name), por defecto es la primera parte del correo (antes de la @) y es el que sale en **negrita** al lado de "Bienvenido: "
