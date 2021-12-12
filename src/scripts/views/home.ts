const Home = {
  render: async () => {
    const view = `
    <section class="content" id="content">
      <div class="welcome-container">
        <p class="welcome-container__text">Помогите бабушке нарядить ёлку</p>
      </div>
      <button class="start-game">Начать</button>
    </section>
    `;

    return view;
  },
  after_render: async () => {
    const start = document.querySelector('.start-game')!;

    start.addEventListener('click', () => {
      window.location.hash = '/toys';
    });
  },
};

export default Home;
