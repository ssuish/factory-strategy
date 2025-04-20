import { v4 as uuidv4 } from "uuid";
import { Damage, MeleeAttack, MeleeSpecialAttack } from "./Components";
import { Entity } from "./Entity";

export class EnemyFactory {
  static createMeleeEnemy(): Entity {
    const enemy = new Entity(uuidv4());
    const damage: Damage = {
      type: "SingleTarget",
      baseAmount: 10,
      target: "Player",
    };
    enemy.addComponent("singleTargetAttack", new MeleeAttack(damage));
    return enemy;
  }

  static createSpecialMeleeEnemy(): Entity {
    const enemy = new Entity(uuidv4());
    const damage: Damage = {
      type: "AreaOfEffect",
      baseAmount: 15,
      target: "Player",
      radius: 5,
    };
    enemy.addComponent("areaOfEffectAttack", new MeleeSpecialAttack(damage));
    return enemy;
  }
}
