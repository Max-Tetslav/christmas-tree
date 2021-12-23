import snowfall from './svg/snowfall';
import settings from './svg/settings';

const treeView = `
  <aside class="aside-container">
    <fieldset class="settings">
      <legend class="hide">Настройки</legend>
      <label class="settings__toggle">
        <input class="music-toggle hide" type="checkbox">
        ${settings}
      </label>
      <label class="settings__toggle">
        <input class="snowfall-toggle hide" type="checkbox">
        ${snowfall}
      </label>
    </fieldset>
    <fieldset class="lights-container">
      <legend class="hide">Гирлянда</legend>
      <h2 class="settings-container__title">Гирлянда</h2>
      <label>
        <input class="light-toggle" id="multi-light" type="radio" name="light">
        <input class="light-toggle" id="red-light" type="radio" name="light">
        <input class="light-toggle" id="yellow-light" type="radio" name="light">
        <input class="light-toggle" id="blue-light" type="radio" name="light">
        <input class="light-toggle" id="green-light" type="radio" name="light">
        <div class="light-power" id="light-toggle"></div>
      </label>
    </fieldset>
    <fieldset class="lights-container">
      <legend class="hide">Ёлка</legend>
      <h2 class="settings-container__title">Ёлка</h2>
      <label class="tree-label">
        <input class="tree-toggle hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="tree-label">
        <input class="tree-toggle hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="tree-label">
      <input class="tree-toggle hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="tree-label">
        <input class="tree-toggle hide" id="tree-4" type="radio" name="tree">
      </label>
    </fieldset>
    <fieldset class="lights-container">
      <legend class="hide">Игрушки</legend>
      <h2 class="settings-container__title">Игрушки</h2>
      <label class="toy-toggle">
        <input class="hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
      <input class="hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-4" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-4" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-4" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-4" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-1" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-2" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
      <input class="hide" id="tree-3" type="radio" name="tree">
      </label>
      <label class="toy-toggle">
        <input class="hide" id="tree-4" type="radio" name="tree">
      </label>
    </fieldset>
    <fieldset class="lights-container">
      <legend class="hide">Фон</legend>
      <h2 class="settings-container__title">Фон</h2>
      <label class="background-label">
        <input class="background-toggle hide" id="background-1" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-2" type="radio" name="background">
      </label>
      <label class="background-label">
       <input class="background-toggle hide" id="background-3" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-4" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-5" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-6" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-7" type="radio" name="background">
      </label>
      <label class="background-label">
        <input class="background-toggle hide" id="background-8" type="radio" name="background">
      </label>
    </fieldset>
  </aside>
  <section class="tree-container">
    <img class="tree" src="../../../assets/tree/0.png"/>
  </section>
`;

export default treeView;
