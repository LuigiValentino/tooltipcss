# TooltipCSS

![TooltipCSS Banner](./dist/img/banner.png)

**TooltipCSS** es una librería ligera y personalizable de tooltips para HTML. Proporciona diferentes estilos de tooltips, incluyendo opciones de animación, tamaños, colores personalizados, y más. ¡Fácil de usar e integrar en cualquier proyecto web!

## Características

- 📦 **Ligera**: Sin dependencias de terceros.
- ✨ **Altamente personalizable**: Cambia colores, tamaños, animaciones y más a través de atributos `data-*`.
- 🎨 **Soporta CSS personalizado**: Agrega tus propios estilos para hacer que los tooltips coincidan con el diseño de tu sitio.
- 🔄 **Animaciones**: Opciones para animaciones con desvanecimiento, animaciones infinitas y tooltips estáticos.
- 🛠️ **Fácil de usar**: Sólo necesitas añadir algunos atributos `data-*` a tus elementos HTML.

## Uso

Para añadir un tooltip a cualquier elemento HTML, simplemente añade el atributo `data-tooltip` con el texto que deseas mostrar.

```html
<p data-tooltip="Este es un tooltip básico">Hover sobre este texto</p>

```

## Tooltips personalizados

```html
<p data-tooltip="Tooltip con color personalizado" data-tooltip-color="#ff5733">Hover aquí</p>

<p data-tooltip="Tooltip grande" data-tooltip-size="20px">Hover aquí</p>

<p data-tooltip="Tooltip con animación" data-tooltip-animate="fade">Hover aquí</p>

<p data-tooltip="Tooltip con retraso" data-tooltip-delay="500">Hover aquí</p>

<p data-tooltip="Animación infinita" data-tooltip-infinite="true">Hover aquí</p>

<button data-tooltip="Tooltip que se mantiene visible" data-tooltip-static="true">Hover aquí</button>

```
