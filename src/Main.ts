import { IComponent } from "./Components";
import { EnemyFactory } from "./EnemyFactory";

const meleeEnemyType1 = EnemyFactory.createMeleeEnemy();
const meleeEnemyType2 = EnemyFactory.createMeleeEnemy();
const bossMeleeEnemy = EnemyFactory.createSpecialMeleeEnemy();

const enemies = [meleeEnemyType1, meleeEnemyType2, bossMeleeEnemy];

enemies.forEach((enemy) => {
  const componentKeys = enemy.getComponentKeys();
  componentKeys.forEach((key) => {
    const component = enemy.getComponent<IComponent>(key);
    if (component && component.performAction) {
      component.performAction();
    }
  });
});

