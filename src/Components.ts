export interface IComponent {
  update(deltaTime: number): void;
  performAction?(): void;
}

export interface IAttackComponent extends IComponent {
  attack(): void;
}

interface BaseDamage {
  baseAmount: number;
  target: string;
  multiplier?: number;
}

export interface SingleTargetDamage extends BaseDamage {
  type: "SingleTarget";
}
export interface AreaOfEffectDamage extends BaseDamage {
  type: "AreaOfEffect";
  radius: number;
}

export type Damage = SingleTargetDamage | AreaOfEffectDamage;

export class MeleeAttack implements IAttackComponent {
  private damage: Damage;

  constructor(damage: Damage) {
    this.damage = damage;
  }

  update(deltaTime: number): void {}

  performAction(): void {
    this.attack();
  }

  attack(): void {
    if (this.damage.type === "SingleTarget") {
      console.log(
        `Attacking ${this.damage.target} with ${this.damage.baseAmount} damage`
      );
    }
  }
}

export class MeleeSpecialAttack implements IAttackComponent {
  private damage: Damage;

  constructor(damage: Damage) {
    this.damage = damage;
  }

  update(deltaTime: number): void {}

  performAction(): void {
    this.attack();
  }

  attack(): void {
    if (this.damage.type === "AreaOfEffect") {
      console.log(
        `Attacking ${this.damage.target} with ${this.damage.baseAmount} damage in radius ${this.damage.radius}`
      );
    }
  }
}
