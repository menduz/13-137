export * from "@dcl/sdk"

import { ReactEcsRenderer } from "@dcl/sdk/react-ecs"
import { ui } from "./ui"
import { spawnCubes } from "./cube-scene"
import { CircleHoverSystem, MaterialChangerSystem } from "./circular-system"
import { engine } from "@dcl/sdk/ecs"

spawnCubes()
engine.addSystem(CircleHoverSystem)
engine.addSystem(MaterialChangerSystem)

ReactEcsRenderer.setUiRenderer(ui)
