import snowfall from './svg/snowfall';
import settings from './svg/settings';

const treeView = `
  <aside class="aside-container">
    <fieldset class="settings">
      <legend class="hide">Настройки</legend>
      <label class="music-label settings__toggle">
        <input class="music-toggle hide" type="checkbox">
        ${settings}
      </label>
      <label class="snowfall-label settings__toggle">
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
      <div class="favorites-root"></div>
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
    <map class="tree-map" name="tree-map">
      <area coords="365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664" shape="poly">
    </map>
    <img class="tree" src="../../../assets/tree/0.png" draggable="false" usemap="#tree-map"/>
  </section>
`;

export default treeView;
