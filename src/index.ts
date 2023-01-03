export * from "@dcl/sdk"

import { ReactEcsRenderer } from "@dcl/sdk/react-ecs"
import { ui } from "./ui"
import { spawnCubes } from "./cube-scene"
import { CircleHoverSystem, MaterialChangerSystem } from "./circular-system"
import { engine, GltfContainer, Transform } from "@dcl/sdk/ecs"

spawnCubes()
engine.addSystem(CircleHoverSystem)
engine.addSystem(MaterialChangerSystem)

{
  const glb = engine.addEntity()
  GltfContainer.create(glb, { src: 'models/shark.glb' })
  Transform.create(glb, {
    position: { x: 8, y: 8, z: 8 },
    scale: { x: 5, y: 5, z: 5 },
  })
}

ReactEcsRenderer.setUiRenderer(ui)
