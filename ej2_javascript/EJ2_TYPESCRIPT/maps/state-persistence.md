# State Persistence

State persistence allows the Maps to retain the current model value in the browser cookies for state maintenance. This action is handled through the [`enablePersistence`](../api/maps#enablepersistence) property which is set to **false** by default. When this property is set to **true**, some of the Maps component model values are preserved even after the page is refreshed.

```typescript
import { world_map } from './world-map.ts';
import { Maps, Selection, Zoom } from '@syncfusion/ej2-maps';
Maps.Inject(Selection, Zoom);
let map: Maps = new Maps({
    enablePersistence:true,
    zoomSettings:{
        enable:true
    },
    layers: [{
        shapeData: world_map
    }]
});
map.appendTo('#element');
```