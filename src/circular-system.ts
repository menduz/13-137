import { engine, Material, MeshRenderer, Transform } from "@dcl/sdk/ecs"
import { Color3 } from "@dcl/sdk/math"

let hoverState: number = 0

export function CircleHoverSystem(dt: number) {
  hoverState += Math.PI * dt * 0.5

  const entitiesWithBoxShapes = engine.getEntitiesWith(MeshRenderer, Transform)

  // iterate over the entities of the group
  for (const [entity] of entitiesWithBoxShapes) {
    const transform = Transform.getMutable(entity)

    // mutate the rotation
    transform.position.y =
      Math.cos(
        hoverState + Math.sqrt(Math.pow(transform.position.x - 8, 2) + Math.pow(transform.position.z - 8, 2)) / Math.PI
      ) *
        2 +
      2
  }
}

let totalTime: number = 0
let color = true

export function MaterialChangerSystem(dt: number) {
  totalTime += dt

  while (totalTime > 1) {
    totalTime -= 1
    color = !color
  }

  const entitiesWithBoxShapes = engine.getEntitiesWith(MeshRenderer, Transform)

  // iterate over the entities of the group
  for (const [entity] of entitiesWithBoxShapes) {
    Material.setPbrMaterial(entity, {
      albedoColor: color ? Color3.Blue() : Color3.Green(),
    })
    const { scale } = Transform.getMutable(entity)
    scale.x = scale.y = scale.z = color ? 0.5 : 1
  }
}

