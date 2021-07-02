`[![MercuryUI](https://storage.caribesistemas.com/mercuryui/mercuryui.svg "MercuryUI")](https://mercuryui.caribesistemas.com/ "MercuryUI")

------------
#### Un plugin para tailwind basado en utilidades como `clickeable` o utilidades como `size-full` para la elaboración de componentes.
#### Para instalar...

`> npm i @darudlingilien/mercuryui `
#### Después a tu archivo `tailwind.config.json` agrega esto...
```javascript
plugins: [
    require('@darudlingilien/mercuryui')
],
```
###Listo! ya puedes usar MercuryUI para elaborar componentes.

#### Ejemplo:
```html
   <div class="w-24">
      <div class="button-component">
         <button class="button button-md button-default theme-primary">
             <div class="body">
                Lorem ipsum
              </div>
          </button>
      </div>
   </div>
```
##### Su output sería...
![Example](https://storage.caribesistemas.com/mercuryui/example.gif "Example")
##### La clase `button` aplica la clase `clickeable`, que puede ser aplicada a cualquier elemento, además de ofrecer lo necesario para elaborar un botón.
------------

#### Ese es un pequeño ejemplo de lo que puede hacer con MercuryUI, para más información visite [el sitio oficial.](https://mercuryui.netlify.app/ "el sitio oficial.")

<span style="color: red; font-weight: bold;font-size: 24px;">Advertencia: MercuryUI está en fase beta, y el sitio oficial está bajo mantenimiento por los momentos.</span>