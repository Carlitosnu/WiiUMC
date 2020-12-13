# WiiUMC
WiUMC sera un reproductor multimedia que se podra conectar a Wifi y cargar tu lista de reproduccion o podras cargar archivos en tu SD

## Multimedia Local.
Para usar la multimedia local se debe cargar la version **HBL** modificando el *onlineMedia.js* Y incluyendo las rutas que se usaran para acceder a los archivos que usara de multimedia.

## Multimedia externa ( *En linea* ).
WiiUMC tiene la capacidad de cargar multimedia en linea modificando el archivo de `media.js` que es el archivo que se carga la multimedia que el Reproductor usa, puede ver como es un archivo de multimedia.

## Formato de multimedia.

    
	   {"name":"NCV",
	    "url":"la.ruta.del/archivo",
	    "cover":"la url del cover Aquí",
	    "description":"Lorem Imsump..."}
En archivo habrá un **arreglo** donde deberemos crear un objeto que tiene la propiedad de *name* que será el nombre que la app mostrara, *url* sera la ruta del archivo que de preferencia sea formato **.mp4** puede ser también una dirección de internet, en el apartado de *cover* nos vendrá el archivo de la caratula que saldrá en la aplicación y en el apartdo *description* será la descripción que saldrá en la carga de la multimedia.

## Modificaciones.
Las modificaciones es recomendables hacerlas en el apartado de estilos y se debe incluir en el archivo llamado **style.css** que maneja los estilos generales.

> **Nota:**
> La aplicación al basarse en los servicios del navegador de *WiiU* no soporta los estilos mas modernos de CSS por ejemplo ***flex, grid***.
Las modificaciones no será recomendables aplicarlas al archivo **JS** por que es un compilado de javascript. **Por favor haga las modificaciones en los archivos de *TypeScript* que es el source de la aplicación**.

Se pueden hacer modificaciones de maquetado y extender funcionalidades siempre y cuando se añadan en el *div* **app** que es manipulado por el JavaScript compilado

## Próximamente.
+ Se espera añadir soporte para multimedia de audio. Los formatos soportados pueden ser: `ogg, mp4, mvl`.
+ Se espera poder crear categorías añadiendo un tag en el json.
+ Empacar todo en un **WUP** que podra ser instalado en el menu del sistema de la WiiU
