import Character from '../src/js/Character';
import Bowerman from '../src/js/Bowerman';
import Swordsman from '../src/js/Swordsman';
import Magician from '../src/js/Magician';
import Daemon from '../src/js/Daemon';
import Undead from '../src/js/Undead';
import Zombie from '../src/js/Zombie';

describe('Character', () => {
  test('создаёт персонажа с корректными данными', () => {
    const char = new Character('Hero', 'Bowman');
    expect(char.name).toBe('Hero');
    expect(char.type).toBe('Bowman');
    expect(char.health).toBe(100);
    expect(char.level).toBe(1);
  });

  test('выбрасывает ошибку при коротком имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
  });

  test('выбрасывает ошибку при длинном имени', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow();
  });

  test('выбрасывает ошибку при не-строке в имени', () => {
    expect(() => new Character(123, 'Bowman')).toThrow();
  });

  test('выбрасывает ошибку при неверном типе', () => {
    expect(() => new Character('Hero', 'Unknown')).toThrow();
  });

  describe('levelUp', () => {
    test('повышает level, attack, defence и восстанавливает health', () => {
      const char = new Character('Hero', 'Bowman');
      char.attack = 25;
      char.defence = 25;
      char.health = 50;
      char.levelUp();
      expect(char.level).toBe(2);
      expect(char.attack).toBe(30);
      expect(char.defence).toBe(30);
      expect(char.health).toBe(100);
    });

    test('выбрасывает ошибку, если health = 0', () => {
      const char = new Character('Hero', 'Bowman');
      char.health = 0;
      expect(() => char.levelUp()).toThrow();
    });
  });

  describe('damage', () => {
    test('уменьшает health по формуле', () => {
      const char = new Character('Hero', 'Bowman');
      char.defence = 25;
      char.damage(20);
      expect(char.health).toBe(85);
    });

    test('health не уходит ниже 0', () => {
      const char = new Character('Hero', 'Bowman');
      char.defence = 0;
      char.damage(200);
      expect(char.health).toBe(0);
    });
  });
});

describe('Дочерние классы', () => {
  test('Bowerman имеет attack 25 и defence 25', () => {
    const char = new Bowerman('Robin');
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
    expect(char.type).toBe('Bowman');
  });

  test('Swordsman имеет attack 40 и defence 10', () => {
    const char = new Swordsman('Artur');
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);
    expect(char.type).toBe('Swordsman');
  });

  test('Magician имеет attack 10 и defence 40', () => {
    const char = new Magician('Merlin');
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
    expect(char.type).toBe('Magician');
  });

  test('Daemon имеет attack 10 и defence 40', () => {
    const char = new Daemon('Lucifer');
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
    expect(char.type).toBe('Daemon');
  });

  test('Undead имеет attack 25 и defence 25', () => {
    const char = new Undead('Ghoul');
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
    expect(char.type).toBe('Undead');
  });

  test('Zombie имеет attack 40 и defence 10', () => {
    const char = new Zombie('Walker');
    expect(char.attack).toBe(40);
    expect(char.defence).toBe(10);
    expect(char.type).toBe('Zombie');
  });
});