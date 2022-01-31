# Prueba para cargo de Technical Support Engineer

En este repositorio se encuentra la solución de la prueba para el cargo de Technical Support Engineer

## Solución puntos 4 y 5 - Request y Responses 

La solución de los puntos 4 y 5 se ven en los archivos 
```bash
  > ./getTransactionList.txt
  > ./voidATransaction.txt
```

## Respuestas feedback 

## Experiencia de Onboarding con Kushki. Oportunidades de mejoras identificadas

Es una plataforma muy intuitiva, los pasos de registro fueron cortos y sencillos, permitiendo un registro rápido y exitoso. Quizá agregando la opción de un registro rápido con cuentas corporativas el proceso sería aún más eficiente

## Experiencia con la documentación técnica. Oportunidades de mejoras identificadas y propuesta de mejora de esta.

En la descripción de la librería Kushki.js y en la información de las api mencionan public-merchant-id y private-merchant-id, y en la descripción respectiva mencionan merchant-id, eso es algo confuso ya que se puede entender que se refiere a Id del comercio y no a las llaves públicas y privadas que se encuentran en la parte de credenciales para los desarrolladores, debería decir private-merchant-key, enfatizar el KEY ya que es diferente a un ID, un id se entiende por un identificador en este caso, el identificador del comercio, id del comercio y una llave a un hash para autenticación.

## Qué entiendes por el concepto de tokenización y por qué cree que se recomienda tokenizar por medio de una solución del front?

La tokenización permite la protección de datos sensibles para sistemas que requieren autenticación, evitando el robo de esta información, encriptando la información de la cuenta de que se quiere autenticar. Se recomienda el uso de tokens en el front ya que siempre está expuesto para los usuarios y pueden ver su código e información que se guarda por lo tanto no es correcto tener los datos sensibles de la cuenta (llaves, ids, etc), el token ya que es información encriptada no hay problema con que el usuario lo extraiga, no podrá saber los datos sensibles sin conocer el método de encriptación

## Qué entiendes por el concepto de Webhook?

Webhook es una tecnología que permite la integración de servicios y aplicaciones entre sí, a diferencia de una API permite notificaciones en tiempo real.