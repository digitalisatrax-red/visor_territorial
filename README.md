# Visor Territorial — La Floresta

Visor geográfico 2D y 3D del predio La Floresta, Chinchiná, Caldas.

## Abrir localmente

Abra `index.html` en un navegador moderno. El visor incluye sus mapas base dentro del HTML y no requiere un servidor para mostrar el predio.

## Publicar con GitHub Pages

1. Suba todos los contenidos de esta carpeta al repositorio, conservando la estructura.
2. En GitHub, abra **Settings > Pages**.
3. En **Build and deployment**, seleccione **Deploy from a branch**.
4. Seleccione la rama **main** y la carpeta **/(root)**, luego guarde.
5. GitHub mostrará la URL pública al terminar la publicación.

## Estructura

- `index.html`: visor principal.
- `assets/`: motor cartográfico local y escenas del recorrido.
- `datos/`: capas procesadas y reporte de coberturas.

## Datos

- Lindero predial: WGS 84 / EPSG:4326.
- Coberturas de la tierra: IDEAM 2024, simbología CLC.
- Vías y red hídrica: datos OSM procesados.

La carpeta de insumos ArcGIS completos no se incluye: pesa más de 4 GB y supera los límites normales de GitHub.
